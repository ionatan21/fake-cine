import React from "react";
import { Carousel } from "./InfiniteSlider";
import { FoodItems } from "../food/food";
import ReactCarousel from "../Slider/Carousel";

const Slider: React.FC = () => {
  const items = FoodItems();

  return <ReactCarousel items={items} />;
};

export default Slider;