import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { blockData } from "./ImageGalleryData";

const style = {
  main: `w-full  flex flex-col items-center justify-center p-[40px] lg:p-[80px]`,
  section: `grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 w-full h-[400px] md:h-[700px] lg:h-[800px] items-center justify-center p-4`,
  block: `items-center justify-center border h-full relative overflow-hidden transition-all group cursor-pointer`,
  sheet: `absolute w-full h-full top-full bg-[#000000] text-white flex items-center justify-center transition-all duration-1000 opacity-0 transform translate-y-full`,
  sheetHover: `group-hover:opacity-90 group-hover:-translate-y-full text-2xl font-bold`,
};

function GameSection() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);

  return (
    <div className={style.main}>
      <div
        style={{
          textAlign: "left",
          width: "100%",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        Top Products of this <u>Month</u>
      </div>
      <div className={style.section}>
        {blockData.map((block, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration={block.aosDuration || 900}
            data-aos-anchor-placement={block.aosAnchorPlacement || ""}
            className={`${style.block} ${block.showOnMd ? "md:block" : ""} ${
              block.class
            }`}
            style={{
              backgroundImage: `url("${block.productInfo.imageUrl}")`,
              backgroundSize: "cover",
            }}
            onClick={() =>
              block?.seeMore
                ? navigate(`${block.navigate}`)
                : navigate(`/product/${block.productInfo._id.$oid}`)
            }
          >
            <div className={`${style.sheet} ${style.sheetHover}`}>
              <div>{block.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameSection;
