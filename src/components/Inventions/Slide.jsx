import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "./invention.module.css";
// import required modules
import { EffectCreative } from "swiper/modules";
import inven1 from "../../assets/inven1.jpg";
import inven2 from "../../assets/invent2.jpg";
import inven3 from "../../assets/invent3.jpg";
import inven4 from "../../assets/invent4.jpg";
export default function Slide() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide>
          <div>
            <img src={inven1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={inven2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={inven3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={inven4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={inven2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={inven1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
