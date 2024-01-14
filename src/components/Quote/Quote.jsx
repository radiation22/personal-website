import React from "react";
import profile from "../../assets/quote.png";
const Quote = () => {
  return (
    <div className="bg-[#8ABBD4] text-white pt-20  flex px-5">
      <div className="w-[60%] ">
        <h1 className=" text-xl lg:text-5xl font-bold">
          When employees stop challenging the way things are done, because
        </h1>
        <h1 className="text-xl text-black lg:text-5xl font-bold">
          'that's the way it's always been done'
        </h1>
        <p className="text-xl lg:text-5xl font-bold">
          You are destined to fail.
        </p>
        <p className="text-lg mt-5 ">Taylor Vowell</p>
      </div>
      <div className="w-[40%] pt-10">
        <div>
          <img className="h-[250px] lg:h-[450px]" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
