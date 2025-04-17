import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

interface CarouselProps {
  items: React.ReactNode[];
}

const ReactCarousel = ({ items }: CarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        
      }}
      className="w-[90%] h-full gap-10"
    >
      <CarouselContent>{items}</CarouselContent>
      <CarouselPrevious className="ml-2"/>
      <CarouselNext className="mr-2" />
    </Carousel>
  );
};

export default ReactCarousel;
