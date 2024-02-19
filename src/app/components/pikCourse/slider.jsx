/** @format */
'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperNavButtons } from './SwiperNavButtons'

export default function UISlider() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className='mySwiper relative !py-14'
      >
        <SwiperSlide>
          <div className='w-[200] h-[300px] flex items-center'>
            <div className='w-[130px] h-[130px] ui_bg relative rounded-lg'>
              <div className='py-8 shadow-lg px-3 font-bold text-5xl text-borderColor text-center top_curcal_gradient absolute top-0 right-0 -translate-y-14 rounded-2xl border-4 border-white translate-x-16'>
                UI/UX
                <span className='text-xl block whitespace-nowrap font-normal mt-2 text-primary'>
                  UI/UX training
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[200] h-[300px] flex items-center'>
            <div className='w-[130px] h-[130px] java relative rounded-lg'>
              <div className='py-8 shadow-lg px-3 font-bold text-5xl text-borderColor text-center top_curcal_gradient absolute top-0 right-0 -translate-y-14 rounded-2xl border-4 border-white translate-x-14'>
                JAVA
                <span className='text-xl block whitespace-nowrap font-normal mt-2 text-primary'>
                  java training
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[200] h-[300px] flex items-center'>
            <div className='w-[130px] h-[130px] ui_bg relative rounded-lg'>
              <div className='py-8 shadow-lg px-3 font-bold text-5xl text-borderColor text-center top_curcal_gradient absolute top-0 right-0 -translate-y-14 rounded-2xl border-4 border-white translate-x-10'>
                AI
                <span className='text-xl block whitespace-nowrap font-normal mt-2 text-primary'>
                  ai training
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[200] h-[300px] flex items-center'>
            <div className='w-[130px] h-[130px] java relative rounded-lg'>
              <div className='py-8 shadow-lg px-3 font-bold text-5xl text-borderColor text-center top_curcal_gradient absolute top-0 right-0 -translate-y-14 rounded-2xl border-4 border-white translate-x-14'>
                JAVA
                <span className='text-xl block whitespace-nowrap font-normal mt-2 text-primary'>
                  java training
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
    </>
  )
}
