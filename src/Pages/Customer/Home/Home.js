import React from "react";

import MainCarousel from "../../../Components/HomeCarousel/MainCarousel";
import ImageGallery from "../../../Components/ImageGallery";

function Home() {
  return (
    <div>
      <MainCarousel />
      <ImageGallery />
      {/* <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div> */}
    </div>
  );
}

export default Home;
