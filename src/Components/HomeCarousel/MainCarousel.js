import { useEffect, useState } from "react";
import { bannerData } from "./bannerData";
import { ReactComponent as RightArrow } from "../../Assets/Banner/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../Assets/Banner/left-arrow.svg";
import { useNavigate } from "react-router-dom";

const classes = {
  container: "font-['Segoe_UI'] relative",
  itemContainer: "bg-cover bg-top h-[600px] max-md:h-[350px] max-sm:h-[200px]",
  item1:
    "w-3/5 flex flex-col pl-16 max-sm:pl-10 max-sm:w-4/5 justify-evenly h-full py-10",
  item2: "",
  heading: "font-extrabold text-5xl max-sm:text-3xl",
  subheading: "font-bold text-3xl text-primaryText max-sm:text-2xl",
  downloadContainer: "flex items-center w-full",
  download:
    "px-10 py-3 bg-buttons rounded-xl font-bold text-2xl max-sm:text-xl text-secondaryText hover:bg-buttonHover cursor-pointer",
  circleGroup: "flex gap-3 absolute bottom-2.5 left-1/2 -translate-x-1/2",
  circle: "w-3 h-3 border-2 border-black rounded-full cursor-pointer",
  currentCircle: "bg-white",
};
const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerData.home.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRoute = (e, path) => {
    e.stopPropagation();
    navigate(path);
  };

  const nextBanner = () => {
    setCurrentBannerIndex(
      (prevIndex) => (prevIndex + 1) % bannerData.home.length
    );
  };

  const prevBanner = () => {
    setCurrentBannerIndex(
      (prevIndex) =>
        (prevIndex - 1 + bannerData.home.length) % bannerData.home.length
    );
  };

  const specificBanner = (index) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className={classes.container}>
      {bannerData.home.map((banner, index) => (
        <div
          key={index}
          className={`${classes.itemContainer}  ${
            index === currentBannerIndex ? "block" : "hidden"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
          }}
          onClick={(e) => {
            handleRoute(e, banner.path);
          }}
        >
          <div className={classes.item1}>
            <div
              className={classes.heading}
              style={{ WebkitTextStroke: "2px white" }}
            >
              {banner.heading}
            </div>
            <div
              className={classes.subheading}
              style={{ WebkitTextStroke: "1px white" }}
            >
              {banner.subheading}
            </div>
          </div>
          <div className={classes.item2}></div>
        </div>
      ))}
      <div
        onClick={prevBanner}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          height: "5px",
          width: "5px",
        }}
      >
        <LeftArrow />
      </div>
      <div
        onClick={nextBanner}
        style={{
          position: "absolute",
          top: "50%",
          right: "25px",
          height: "5px",
          width: "5px",
        }}
      >
        <RightArrow />
      </div>
      <div className={classes.circleGroup}>
        {bannerData.home.map((item, index) => (
          <div
            className={`${classes.circle} ${
              currentBannerIndex === index ? classes.currentCircle : ""
            }`}
            onClick={() => specificBanner(index)}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
