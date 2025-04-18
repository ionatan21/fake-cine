import { motion } from "framer-motion";

type MovieProps = {
  movie: {
    id: string;
    title: string;
    movieslug: string;
    language: string;
    duration: string;
    format: string;
    posterURL: string;
    trailerURL: string;
    body: string;
    age: string;
    genre: string;
    premiere_date: string;
    released: boolean;
    schedule: Record<string, { time: string; format: string }[]>;
  };
};

const MovieDetail = ({ movie }: MovieProps) => {


  return (
    <article className="w-screen z-10 min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white md:p-6">
      <section className="bg-gradient-to-b mt-6 h-fit from-gray-900 to-black text-white min-h-screen py-10 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="rounded-lg shadow-2xl w-full aspect-[2/3] bg-center bg-cover"
            style={{
              backgroundImage: `url(${movie.posterURL})`,
              viewTransitionName: `poster-${movie.movieslug}`,
            }}
          ></motion.div>

          <div className=" ">
            <h1 className="text-2xl md:text-5xl font-bold mb-4" style={{ viewTransitionName: `title-${movie.movieslug}` }}>
              {movie.title}
            </h1>
            <p className="text-lg text-gray-300 italic mb-4">{movie.body}</p>

            <div className="space-y-2 text-base ">
              <table className="w-full text-sm sm:text-base table-auto border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 align-top">
                      <span className="font-semibold block sm:inline">
                        Género:
                      </span>{" "}
                      {movie.genre}
                    </td>
                    <td className="py-2 align-top">
                      <span className="font-semibold block sm:inline">
                        Duración:
                      </span>{" "}
                      {movie.duration} min
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 align-top">
                      <span className="font-semibold block sm:inline">
                        Idioma y Formato:
                      </span>{" "}
                      {movie.language} - {movie.format}
                    </td>
                    <td className="py-2 align-top">
                      <span className="font-semibold block sm:inline">
                        Clasificación:
                      </span>{" "}
                      {movie.age}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">
                      <span className="font-semibold block sm:inline">
                        Estreno:
                      </span>{" "}
                      {movie.premiere_date}
                    </td>
                    <td className="py-2 align-top">
                      <span className="font-semibold block sm:inline">
                        ¿Ya en cartelera?
                      </span>{" "}
                      <span
                        className={`inline-block px-2 py-1 rounded font-medium ${
                          movie.released ? " text-green-700" : "text-yellow-700"
                        }`}
                      >
                        {movie.released ? "Sí" : "Próximamente"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <iframe
              className="w-full mt-4 h-[320px] rounded-lg shadow-lg"
              src={movie.trailerURL}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Horarios */}
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
            Horarios por día
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(movie.schedule).map(([day, times]) => (
              <div key={day} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 capitalize">{day}</h3>
                <ul className="space-y-1">
                  {times.map((slot, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{slot.time}</span>
                      <span className="text-sm text-gray-400">
                        {slot.format}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default MovieDetail;
