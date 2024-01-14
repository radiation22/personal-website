import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../assets/avatar.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
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
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white text-center">
              <img
                className="h-20 w-20 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2"
                src={profile}
                alt=""
              />
              <h1 className="font-bold">James Cameron</h1>
              <p>Software Engineer at facebook</p>
            </div>
            <div className="bg-white p-8">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta totam deserunt quisquam in vel architecto itaque facilis
                quibusdam natus incidunt ab neque ea doloremque, tenetur
                blanditiis, magni dolore. Quam qui nostrum corrupti soluta sequi
                dignissimos minima recusandae iste, nam quo, eos fuga. Autem
                unde soluta mollitia sint tempore? Dolor.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white text-center">
              <img
                className="h-20 w-20 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2"
                src={profile}
                alt=""
              />
              <h1 className="font-bold">James Cameron</h1>
              <p>Software Engineer at facebook</p>
            </div>
            <div className="bg-white p-8">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta totam deserunt quisquam in vel architecto itaque facilis
                quibusdam natus incidunt ab neque ea doloremque, tenetur
                blanditiis, magni dolore. Quam qui nostrum corrupti soluta sequi
                dignissimos minima recusandae iste, nam quo, eos fuga. Autem
                unde soluta mollitia sint tempore? Dolor.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white text-center">
              <img
                className="h-20 w-20 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2"
                src={profile}
                alt=""
              />
              <h1 className="font-bold">James Cameron</h1>
              <p>Software Engineer at facebook</p>
            </div>
            <div className="bg-white p-8">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta totam deserunt quisquam in vel architecto itaque facilis
                quibusdam natus incidunt ab neque ea doloremque, tenetur
                blanditiis, magni dolore. Quam qui nostrum corrupti soluta sequi
                dignissimos minima recusandae iste, nam quo, eos fuga. Autem
                unde soluta mollitia sint tempore? Dolor.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white text-center">
              <img
                className="h-20 w-20 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2"
                src={profile}
                alt=""
              />
              <h1 className="font-bold">James Cameron</h1>
              <p>Software Engineer at facebook</p>
            </div>
            <div className="bg-white p-8">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta totam deserunt quisquam in vel architecto itaque facilis
                quibusdam natus incidunt ab neque ea doloremque, tenetur
                blanditiis, magni dolore. Quam qui nostrum corrupti soluta sequi
                dignissimos minima recusandae iste, nam quo, eos fuga. Autem
                unde soluta mollitia sint tempore? Dolor.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#5471B9] pb-5 w-full rounded-t-lg text-white text-center">
              <img
                className="h-20 w-20 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2"
                src={profile}
                alt=""
              />
              <h1 className="font-bold">James Cameron</h1>
              <p>Software Engineer at facebook</p>
            </div>
            <div className="bg-white p-8">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta totam deserunt quisquam in vel architecto itaque facilis
                quibusdam natus incidunt ab neque ea doloremque, tenetur
                blanditiis, magni dolore. Quam qui nostrum corrupti soluta sequi
                dignissimos minima recusandae iste, nam quo, eos fuga. Autem
                unde soluta mollitia sint tempore? Dolor.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
