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
import Image from 'next/image'
import NextLink from 'next/link'

// ===================
import expertImage1 from '../../../../public/assets/expert/expert1.webp'
import expertImage2 from '../../../../public/assets/expert/expert2.webp'
import expertImage3 from '../../../../public/assets/expert/expert3.webp'
import expertImage4 from '../../../../public/assets/expert/expert4.webp'

// icons
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { IconButton } from '@mui/material'

const TEACHER_DATA = [
  {
    imgPath: expertImage1,
    facebookPath: '#',
    twiterPath: '#',
    likedein: '#',
  },
  {
    imgPath: expertImage2,
    facebookPath: '#',
    twiterPath: '#',
    likedein: '#',
  },
  {
    imgPath: expertImage3,
    facebookPath: '#',
    twiterPath: '#',
    likedein: '#',
  },
  {
    imgPath: expertImage4,
    facebookPath: '#',
    twiterPath: '#',
    likedein: '#',
  },
]

export default function Teachers() {
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className='mySwiper !py-14'
      >
        {TEACHER_DATA.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className=' relative'>
              <Image
                src={item.imgPath}
                alt='expert'
                className='h-[540px] object-cover rounded-3xl '
              />
              <div className='absolute bg-white p-2 rounded-tr-2xl bottom-0 -left-0'>
                <div className='teacher h-[144px] p-2 rounded-3xl flex flex-col  items-center justify-center'>
                  <IconButton
                    LinkComponent={NextLink}
                    href={item.facebookPath}
                  >
                    <FaFacebook className='text-white text-[26px]' />
                  </IconButton>
                  <IconButton
                    LinkComponent={NextLink}
                    href={item.twiterPath}
                  >
                    <AiFillTwitterCircle className='text-white text-[26px]' />
                  </IconButton>
                  <IconButton
                    LinkComponent={NextLink}
                    href={item.likedein}
                  >
                    <FaLinkedin className='text-white text-[26px]' />
                  </IconButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </>
  )
}
