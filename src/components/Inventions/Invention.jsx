import React from "react";
import nirapode from "../../assets/avatar.jpeg";
const Invention = () => {
  return (
    <div className="py-20 px-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div data-aos="zoom-in" data-aos-duration="1500">
          <div className="bg-green-500 w-full h-[300px] flex items-center justify-center">
            <div>
              <img className="rounded-full h-40 w-40" src={nirapode} alt="" />
            </div>
          </div>
          <h1 className="text-center font-bold">Nirapode</h1>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500">
          <div className="bg-green-500 w-full h-[300px] flex items-center justify-center">
            <div>
              <img className="rounded-full h-40 w-40" src={nirapode} alt="" />
            </div>
          </div>
          <h1 className="text-center font-bold">Nirapode</h1>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500">
          <div className="bg-green-500 w-full h-[300px] flex items-center justify-center">
            <div>
              <img className="rounded-full h-40 w-40" src={nirapode} alt="" />
            </div>
          </div>
          <h1 className="text-center font-bold">Nirapode</h1>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500">
          <div className="bg-green-500 w-full h-[300px] flex items-center justify-center">
            <div>
              <img className="rounded-full h-40 w-40" src={nirapode} alt="" />
            </div>
          </div>
          <h1 className="text-center font-bold">Nirapode</h1>
        </div>
      </div>
    </div>
  );
};

export default Invention;
