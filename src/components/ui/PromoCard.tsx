import { motion } from "framer-motion";
import { useState } from "react";

interface PromoCardProps {
  Id: string;
  title: string;
  body: string;
  image: string;
}

interface PromoProps {
  Promo: PromoCardProps;
}

export const PromoCard: React.FC<PromoProps> = ({ Promo }) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden w-[300px] min-h-[450px] flex flex-col justify-center items-center p-6 cursor-pointer"
      style={{
        backgroundImage: `url(${Promo.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
      initial={{ backgroundSize: "100%" }}
      whileHover={{ backgroundSize: "110%" }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHoveredIndex(Promo.Id)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={() => setHoveredIndex(Promo.Id)}
      onTouchEnd={() => setHoveredIndex(null)}
    >
      <div className="absolute bg-gradient-to-t from-black/80 via-black/30 to-transparent w-full h-full z-0" />

      <div className="z-10  p-2 absolute bottom-0 text-left w-full">
        <h2 className="text-2xl font-bold mb-2">{Promo.title}</h2>

        <motion.p
          className="text-sm overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: hoveredIndex === Promo.Id ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ height: "auto" }}
        >
          {Promo.body}
        </motion.p>
      </div>
    </motion.div>
  );
};
