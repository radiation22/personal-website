import React from "react";
import html from "../../assets/html.png";
const Skills = () => {
  return (
    <div id="skills" className="bg-[#F0F1F1]">
      <h1 className=" text-center text-4xl py-20 font-bold">Skills</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-36 px-3">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-[#EE6D15] h-[250px] flex items-center"
        >
          <img
            className="h-[100px] w-[100px] rounded-full mx-auto"
            src={html}
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-[#233A5D] h-[250px] flex items-center"
        >
          <img
            className="h-[100px] w-[100px] rounded-full mx-auto"
            src={html}
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-[#EE6D15] h-[250px] flex items-center"
        >
          <img
            className="h-[100px] w-[100px] rounded-full mx-auto"
            src={html}
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-[#233A5D] h-[250px] flex items-center"
        >
          <img
            className="h-[100px] w-[100px] rounded-full mx-auto"
            src={html}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
