import React from "react";
import Slide from "./Slide";
import Invention from "./Invention";

const Inventions = () => {
  const dividerStyle = {
    border: "none",
    height: "2px",
    background: "linear-gradient(to right, #fff, #ccc, #fff)",
  };

  return (
    <div id="inventions" className="bg-white">
      <h1 className="text-center text-4xl py-20 font-bold">Inventions</h1>
      {/* <hr style={dividerStyle} /> Inline styling for the divider */}
      <Invention></Invention>
    </div>
  );
};

export default Inventions;
