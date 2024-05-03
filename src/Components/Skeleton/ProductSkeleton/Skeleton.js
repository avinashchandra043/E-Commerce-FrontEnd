import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="cards">
      <div className="card is-loading">
        <div className="ProductImageSkeleton"></div>
        <div className="content">
          <p style={{ margin: "20px 10px", width: "100px" }}></p>
          <p style={{ margin: "10px 10px" }}></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
