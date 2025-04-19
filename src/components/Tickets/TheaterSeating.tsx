import { useEffect, useState } from "react";
import { Monitor } from "lucide-react";

type SeatStatus = "available" | "selected" | "occupied";

interface Seat {
  id: string;
  row: string;
  number: number;
  status: SeatStatus;
  price: number;
}

const generateTheaterLayout = (): Seat[][] => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seatsPerRow = 12;
  const occupiedSeats = new Set<string>();

  for (let i = 0; i < 20; i++) {
    const row = rows[Math.floor(Math.random() * rows.length)];
    const number = Math.floor(Math.random() * seatsPerRow) + 1;
    occupiedSeats.add(`${row}${number}`);
  }

  return rows.map((row) =>
    Array.from({ length: seatsPerRow }, (_, i) => {
      const number = i + 1;
      const id = `${row}${number}`;
      return {
        id,
        row,
        number,
        status: occupiedSeats.has(id) ? "occupied" : "available",
        price: row < "D" ? 12 : row < "G" ? 10 : 8,
      };
    })
  );
};

const handleBuyTickets = () => {
    alert("¡Gracias por tu compra! Tus boletos han sido reservados.");
  };
  

export default function TheaterSeating() {
  const [seats, setSeats] = useState<Seat[][]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const handleSeatClick = (rowIndex: number, seatIndex: number) => {
    const newSeats = [...seats];
    const seat = newSeats[rowIndex][seatIndex];

    if (seat.status === "occupied") return;

    if (seat.status === "available") {
      seat.status = "selected";
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      seat.status = "available";
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
    }

    setSeats(newSeats);
  };

  useEffect(() => {
    setSeats(generateTheaterLayout());
  }, []);

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const bookingFee = selectedSeats.length * 1.5;
  const total = totalPrice + bookingFee;

  return (
    <div className="flex flex-col justify-center lg:flex-row gap-6 mt-32 md:mt-20">
      <div className="flex-1 max-w-2xl ">
        {/* Screen */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md bg-gray-800 h-12 rounded-t-3xl flex items-center justify-center">
            <Monitor className="text-gray-400 mr-2" />
            <span className="text-gray-300 text-sm">SCREEN</span>
          </div>
        </div>

        {/* Seats */}
        <div className="mb-8 overflow-x-auto">
          <div className="min-w-[600px]">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center mb-2">
                <div className="w-8 text-gray-400 flex justify-center items-center">
                  {row[0].row}
                </div>
                <div className="flex gap-1">
                  {row.map((seat, seatIndex) => (
                    <button
                      key={seat.id}
                      onClick={() => handleSeatClick(rowIndex, seatIndex)}
                      disabled={seat.status === "occupied"}
                      className={`w-8 h-8 rounded-t-lg text-xs flex items-center justify-center transition-colors
                        ${
                          seat.status === "available"
                            ? "bg-gray-700 hover:bg-gray-600"
                            : seat.status === "selected"
                              ? "bg-green-600 hover:bg-green-500"
                              : "bg-red-400 cursor-not-allowed"
                        }`}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
                <div className="w-8 text-gray-400 flex justify-center items-center">
                  {row[0].row}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-8">
          <Legend color="bg-gray-700" label="Disponible" />
          <Legend color="bg-green-600" label="Seleccionado" />
          <Legend color="bg-red-400" label="Ocupado" />
        </div>
      </div>

      {/* Booking Summary */}
      <div className="lg:w-80">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-white space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Película</h3>
            <p className="text-gray-400">Interstellar</p>
            <p className="text-sm text-gray-500">Hoy, 7:30 PM</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">
              Asientos seleccionados ({selectedSeats.length})
            </h3>
            {selectedSeats.length ? (
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map((seat) => (
                  <span
                    key={seat.id}
                    className="bg-gray-800 px-2 py-1 rounded text-sm"
                  >
                    {seat.row}
                    {seat.number} (${seat.price})
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Sin asientos seleccionados</p>
            )}
          </div>

          <div className="border-t border-gray-800 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Precio del boleto</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tarifa de reserva</span>
              <span>${bookingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t border-gray-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            disabled={!selectedSeats.length}
            onClick={handleBuyTickets}
            className={`w-full py-2 px-4 rounded text-white font-semibold transition-colors ${
              selectedSeats.length
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Proceder a la compra
          </button>
        </div>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center">
      <div className={`w-4 h-4 rounded-t-sm mr-2 ${color}`}></div>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}
