import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "../ui/carousel";

const foodData = [
  {
    name: "Hamburguesa, papas y Refresco",
    img: "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1737662501/FakeCIne/Hamburguesa-orden_de_papas_a2glo8.png",
  },
  {
    name: "Hamburguesa y Orden de papas",
    img: "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1737661788/FakeCIne/Hamburguer-1_ayjo9l.png",
  },
  {
    name: "Combo 3 hamburguesas",
    img: "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1737661886/FakeCIne/Hamburguer-2_u3xf4p.png",
  },
  {
    name: "Palomitas y Refresco",
    img: "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1737662048/FakeCIne/cola-popcorn_qjwrly.png",
  },
  {
    name: "Combo Palomitas y Refresco para 2",
    img: "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1737662215/FakeCIne/cola-popcorn-2_oqfath.png",
  },
  {
    name: "Hot Dog Clásico",
    img: "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1737662360/FakeCIne/classic-hot-dog_fy5kgq.png",
  },
];

export const FoodItems = () => {
  return foodData.map((food, index) => (
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-full">
      <div className="p-1">
        <Card className="w-full bg-transparent">
          <CardContent className="flex bg-gradient-to-t from-black via-transparent to-transparent bg-[#f60] rounded-3xl flex-col w-full min-h-[450px] aspect-square items-center justify-evenly md:justify-between">
            <motion.img
              className=" select-none aspect-square flex justify-center size-48 md:size-72 m-2 items-center"
              style={{ filter: "drop-shadow(0 0 0.75rem black)" }}
              src={food.img}
              alt={food.name}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.p
              className="flex items-center justify-center h-fit text-center "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm md:text-lg font-bold select-none">
                {food.name}
              </span>
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ));
};
