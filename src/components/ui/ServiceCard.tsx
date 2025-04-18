import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  Id: string;
  title: string;
  body: string;
  image: string;
}

interface ServiceProps {
  service: ServiceCardProps;
}

export const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden h-[400px] flex flex-col justify-center items-center p-6 cursor-pointer"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "170%",
      }}
      initial={{ backgroundSize: "170%" }}
      whileHover={{ backgroundSize: "190%" }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHoveredIndex(service.Id)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={() => setHoveredIndex(service.Id)}
      onTouchEnd={() => setHoveredIndex(null)}
    >
      <div className="absolute bg-gradient-to-t from-black/80 via-black/30 to-transparent w-full h-full z-0" />

      <div className=" z-10 m-5 p-2 absolute bottom-0 text-left w-full">
        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>

        <motion.p
          className="text-sm overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: hoveredIndex === service.Id ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ height: "auto" }}
        >
          {service.body}
        </motion.p>
      </div>
    </motion.div>
  );
};
