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
// images
import Testimonial1 from '../../../../public/assets/testimonial/testimonial-1.jpg'
import Testimonial2 from '../../../../public/assets/testimonial/testimonial-2.png'
import { Grid, Rating } from '@mui/material'

// icons

const TESTIMONIAL_DATA = [
  {
    imgPath: Testimonial1,
    Name: 'Lara Ochoa',
    adtheRat: '@Lara25',
    profation: ' CEO of central',
    description: `I completed CCNA Course, CCNP Enterprice Training, PCNSE
                    training from Networkershome. They are the best training and
                    placement institute for networking courses. I know many
                    students from different background are placed at big
                    companies. Networkershome is achieving this through well
                    trained & experience faculties and very effective placement
                    team.`,
  },
  {
    imgPath: Testimonial2,
    Name: 'Lara Ochoa',
    adtheRat: '@Lara25',
    profation: ' CEO of central',
    description: `I completed CCNA Course, CCNP Enterprice Training, PCNSE
                    training from Networkershome. They are the best training and
                    placement institute for networking courses. I know many
                    students from different background are placed at big
                    companies. Networkershome is achieving this through well
                    trained & experience faculties and very effective placement
                    team.`,
  },
]

export default function TestimonialSlider() {
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className='mySwiper !py-14'
      >
        {TESTIMONIAL_DATA.map((item, idx) => (
          <SwiperSlide
            className='!w-[1120px] !m-auto !flex !justify-center !items-center !bg-transparent'
            key={idx}
          >
            <div className='testimonial p-20 shadow-lg border-4 border-white rounded-3xl  gap-4 relative w-[800px]'>
              <Grid
                container
                spacing={5}
              >
                <Grid
                  item
                  md={5}
                >
                  <Image
                    src={item.imgPath}
                    alt=''
                    className='w-[347px] object-cover h-[424px] rounded-3xl'
                  />
                </Grid>
                <Grid
                  item
                  md={7}
                >
                  <div className='text-start flex flex-col gap-2 justify-center mt-6'>
                    <h4 className='text-5xl font-semibold'>{item.name}</h4>
                    <p className='text-[#6F749E]'>
                      <b className='text-primary'>
                        {item.adtheRat} {`,`}{' '}
                      </b>
                      {item.profation}
                    </p>
                    <Rating
                      name='size-large'
                      defaultValue={5}
                      size='large'
                      readOnly
                    />
                    <p className='text-base text-[#49596A] mt-8'>
                      {item.description}
                    </p>
                  </div>
                </Grid>
              </Grid>
              <div className='w-[400px] h-[400px] testimonial_bg absolute bottom-0 left-0 rounded-3xl -translate-x-20 -z-10 translate-y-14' />
              <div className='w-[135px] h-[115px] testimonial_bg_2 absolute top-0 right-0 rounded-xl translate-x-12 -z-10 -translate-y-14' />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </>
  )
}
