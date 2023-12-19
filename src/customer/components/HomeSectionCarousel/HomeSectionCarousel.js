import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

function HomeSectionCarousel({ data, sectionName }) {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data
    ?.slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <div className="relative p-5">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5">
          {sectionName}
        </h2>
        <AliceCarousel
          className="p-5"
          items={items}
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
