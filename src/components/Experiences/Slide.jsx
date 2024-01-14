import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../assets/avatar.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slide() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white">
              <div className="flex items-center gap-5 py-5 px-5">
                <div>
                  <img
                    className="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={profile}
                    alt=""
                  />
                </div>
                <div>
                  <h2>Founder</h2>
                  <h1 className="font-bold">James Cameron</h1>
                  <p>Software Engineer at facebook</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-lg">
              <ol>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white">
              <div className="flex items-center gap-5 py-5 px-5">
                <div>
                  <img
                    className="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={profile}
                    alt=""
                  />
                </div>
                <div>
                  <h2>Founder</h2>
                  <h1 className="font-bold">James Cameron</h1>
                  <p>Software Engineer at facebook</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-lg">
              <ol>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white">
              <div className="flex items-center gap-5 py-5 px-5">
                <div>
                  <img
                    className="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={profile}
                    alt=""
                  />
                </div>
                <div>
                  <h2>Founder</h2>
                  <h1 className="font-bold">James Cameron</h1>
                  <p>Software Engineer at facebook</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-lg">
              <ol>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white">
              <div className="flex items-center gap-5 py-5 px-5">
                <div>
                  <img
                    className="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={profile}
                    alt=""
                  />
                </div>
                <div>
                  <h2>Founder</h2>
                  <h1 className="font-bold">James Cameron</h1>
                  <p>Software Engineer at facebook</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-lg">
              <ol>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white">
              <div className="flex items-center gap-5 py-5 px-5">
                <div>
                  <img
                    className="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={profile}
                    alt=""
                  />
                </div>
                <div>
                  <h2>Founder</h2>
                  <h1 className="font-bold">James Cameron</h1>
                  <p>Software Engineer at facebook</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-lg">
              <ol>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, distinctio!
                </li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
