import type React from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}

export function Carousel({ items }: CarouselProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [itemslength, setItemslength] = useState(0);
  const { currentIndex, next, prev } = useCarousel(itemslength);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };

    // Inicializar el estado
    setIsSmallScreen(mediaQuery.matches);
    if (mediaQuery.matches) {
      setItemslength(items.length);
    } else {
      setItemslength(items.length - 2);
    }

    // Agregar listener al media query
    mediaQuery.addEventListener("change", handleMediaChange);

    // Limpiar listener al desmontar el componente
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="relative w-full h-full max-w-[1400px] flex justify-center items-center mx-auto border-none">
      <div className="overflow-hidden h-full border-none">
        <div
          className="flex transition-transform translate-x-[${currentIndex + 2 < items.length ? currentIndex * 33.5 : 0}%] w-full gap-2 h-full duration-300 ease-in-out border-none"
          style={{
            transform: `translateX(-${
              isSmallScreen
                ? currentIndex * 101
                : currentIndex + 2 < items.length
                  ? currentIndex * 33.5
                  : 0
            }%)`,
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => {
                if (index === 0 || index === items.length - 1) {
                  return;
                }

                if (currentIndex === index) {
                  prev();
                } else if (currentIndex + 2 === index) {
                  next();
                } else {
                  console.log(currentIndex, index);
                }
              }}
              className={` ${currentIndex + 1 === index ? "scale-100" : "scale-95"} w-full md:w-[33%] h-full cursor-pointer  rounded-3xl flex-shrink-0 border-none bg-[#f60] flex flex-col gap-4 items-center justify-center`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-3xl"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-3xl"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
