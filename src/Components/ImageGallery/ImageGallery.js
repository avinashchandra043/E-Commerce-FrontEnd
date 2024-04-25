import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const style = {
  main: `w-full  flex flex-col items-center justify-center p-[40px] lg:p-[80px]`,
  section: `grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 w-full h-[400px] md:h-[700px] lg:h-[800px] items-center justify-center p-4`,
  block: `items-center justify-center border h-full relative overflow-hidden transition-all group cursor-pointer`,
  sheet: `absolute w-full h-full top-full bg-[#000000] text-white flex items-center justify-center transition-all duration-1000 opacity-0 transform translate-y-full`,
  sheetHover: `group-hover:opacity-90 group-hover:-translate-y-full text-2xl font-bold`,
};

const blockData = [
  {
    content: "Get Now",
    productInfo: {
      _id: {
        $oid: "65d81f160b94ec9404b199a3",
      },
      title: "Men Printed Pure Cotton Straight Kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
      price: 1499,
      discountedPrice: 499,
      discountPercent: 66,
      quantity: 100,
      brand: "Majestic Man",
      color: "Green",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      category: {
        $oid: "65d81f160b94ec9404b199a1",
      },
    },

    showOnMd: true,
    class: "hidden md:block  md:row-span-2",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
  },
  {
    content: "Get Now",
    productInfo: {
      _id: {
        $oid: "662a91b552bd897c6659dd6d",
      },
      title: "Women A-line Dark Blue, Yellow Dress",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
      price: 999,
      discountedPrice: 389,
      discountPercent: 61,
      quantity: 100,
      brand: "SHREEJI ENTERPRISE",
      color: "yellow",
      sizes: [
        {
          name: "S",
          quantity: 20,
          _id: {
            $oid: "662a91b552bd897c6659dd6e",
          },
        },
        {
          name: "M",
          quantity: 30,
          _id: {
            $oid: "662a91b552bd897c6659dd6f",
          },
        },
        {
          name: "L",
          quantity: 50,
          _id: {
            $oid: "662a91b552bd897c6659dd70",
          },
        },
      ],
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l2nmnww0/dress/p/7/i/xl-g-westrn-finenx-original-imagdy3p67zxwpyj.jpeg?q=70",
      ratings: [],
      reviews: [],
      ratingData: {
        excellent: 0,
        good: 0,
        average: 0,
        poor: 0,
        avgRating: 0,
        totalRating: 0,
      },
      category: {
        $oid: "662a91b252bd897c6659dc8b",
      },
      createdAt: {
        $date: "2024-04-25T17:22:15.613Z",
      },
      __v: 0,
    },
    aosDuration: 2000,
    class: "row-span-2 md:row-span-1",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
  },
  {
    content: "Get Now",
    productInfo: {
      _id: {
        $oid: "65d81f160b94ec9404b199a3",
      },
      title: "Men Printed Pure Cotton Straight Kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
      price: 1499,
      discountedPrice: 499,
      discountPercent: 66,
      quantity: 100,
      brand: "Majestic Man",
      color: "Green",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      category: {
        $oid: "65d81f160b94ec9404b199a1",
      },
    },
    showOnMd: true,
    class: "hidden md:block md:row-span-2",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
  },
  {
    content: "Get Now",
    productInfo: {
      _id: {
        $oid: "65d81f160b94ec9404b199a3",
      },
      title: "Men Printed Pure Cotton Straight Kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
      price: 1499,
      discountedPrice: 499,
      discountPercent: 66,
      quantity: 100,
      brand: "Majestic Man",
      color: "Green",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      category: {
        $oid: "65d81f160b94ec9404b199a1",
      },
    },
    aosAnchorPlacement: "top-bottom",
    aosDuration: 1500,
    class: "row-span-2",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
  },
  {
    content: "Get Now",
    productInfo: {
      _id: {
        $oid: "65d81f160b94ec9404b199a3",
      },
      title: "Men Printed Pure Cotton Straight Kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
      price: 1499,
      discountedPrice: 499,
      discountPercent: 66,
      quantity: 100,
      brand: "Majestic Man",
      color: "Green",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      category: {
        $oid: "65d81f160b94ec9404b199a1",
      },
    },
    class: "row-span-2 md:row-span-1",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
  },
  {
    content: "Click to see More",
    productInfo: {
      _id: {
        $oid: "65d81f160b94ec9404b199a3",
      },
      title: "Men Printed Pure Cotton Straight Kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
      price: 1499,
      discountedPrice: 499,
      discountPercent: 66,
      quantity: 100,
      brand: "Majestic Man",
      color: "Green",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      category: {
        $oid: "65d81f160b94ec9404b199a1",
      },
    },
    class: "row-span-2 md:row-span-1",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
  },
];

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
            onClick={() => navigate(`/product/${block.productInfo._id.$oid}`)}
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
