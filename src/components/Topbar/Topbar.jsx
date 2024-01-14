import React from "react";
import profile from "../../assets/top1.png";
import "./tobbar.css";

const Topbar = () => {
  return (
    <div className="pt-10 top-bar relative overflow-hidden">
      <div className="">
        <h1 className="text-5xl z-10 font-bold text-center left-[0%]  text-white absolute top-[200px]  right-[0%] animate-slide">
          Your Heading Here
        </h1>
        <div>
          <img
            className="h-[400px] md:h-[500px] mx-auto z-30 relative"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
