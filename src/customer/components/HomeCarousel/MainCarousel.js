import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function MainCarousel() {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      role="presentation"
      alt=""
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
}

export default MainCarousel;
