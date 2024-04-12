// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { swiperData } from "../data";
const SocialNetworks = () => {
    return (

        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            navigation={{
                prevEl: ".prev",
                nextEl: ".next",
            }}
            modules={[Navigation,]}
            loop={true}
            className="mySwiper"
            effect="fade"
        >
            {swiperData.map((el) => (
                // eslint-disable-next-line react/jsx-key
                <SwiperSlide key={el.id} className="bg-[rgba(255, 255, 255, 0.05);] rounded-2xl border-stone-500 bg-[rgba(255,255,255,0.05)] py-8 flex
          flex-col justify-center items-center gap-5 h-[182px]">
                    {el.icon}
                    <span className=" text-white opacity-40 text-xl font-extrabold leading-6">
                        {el.title}
                    </span>
                </SwiperSlide>
                
            ))}

            <div className="flex items-center justify-center gap-3 mx-auto mt-10">
                <button className="prev w-[60px] h-[60px] rounded-full bg-black text-white">Prev</button>
                <button className="next w-[60px] h-[60px] rounded-full bg-black text-white">Next</button>
            </div>

            



        </Swiper>
    )
}

export default SocialNetworks