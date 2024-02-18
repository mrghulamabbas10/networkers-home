/** @format */
'use client'
import React, { useEffect, useState } from 'react'
import { Container, Grid, Rating } from '@mui/material'

import ArrowImage from '../../../../public/assets/images/arrow-img.png'
import StudentImage2 from '../../../../public/assets/images/student-2.webp'

import Image from 'next/image'
import ArrowIcon from '../assets/svg/arrow'
import SearchIcon from '../assets/svg/search'
import BlueBack from '../assets/svg/blueBack'
import WhiteRight from '../assets/svg/whiteRight'

export default function Index() {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='lg:py-32'>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={10}
        >
          <Grid
            item
            md={7}
            xs={12}
          >
            <div className='relative max-w-[530px]'>
              <h1 className='text-7xl text_color_top_bottom'>
                Pick a course to get started your study
              </h1>
              <Image
                src={ArrowImage}
                alt='Arrow Image'
                className='right-0 top-0 absolute rotate-12 translate-x-32 -translate-y-10'
                placeholder='blur'
              />
            </div>
          </Grid>
          <Grid
            item
            md={5}
            xs={8}
          >
            <div className='flex gap-5 items-center ml-10 py-3 border-b-2 border-primary text-xl text-primary dark:text-white'>
              <SearchIcon />
              <input
                type='text'
                className='outline-none'
              />
            </div>

            <p className='mt-8 text-gray-500 dark:text-white text-lg'>
              online platforms often offer micro-courses or modules, allowing
              learners to focus on specific topics of interest and acquire
              targeted skills.
            </p>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <div className='my-20'>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={8}
            >
              <div
                className={`flex  ${
                  isOpen
                    ? 'gap-16 lg:pr-[78px] bg-[#FCFCFC] transition_all'
                    : 'transition_all'
                }`}
              >
                <div
                  className={`flex justify-between h-[1000px] flex-col items-center px-8 py-12 w-20  rounded-md  ${
                    isOpen
                      ? 'bg-primary text-white transition_all'
                      : 'bg-borderColor text-primary transition_all'
                  }`}
                  onClick={handleToggle}
                >
                  {isOpen ? <BlueBack /> : <WhiteRight />}

                  <p className='-rotate-90 whitespace-nowrap text-2xl'>
                    Popular course
                  </p>
                  {isOpen ? <BlueBack /> : <WhiteRight />}
                </div>
                {isOpen && (
                  <div
                    className={`flex flex-col justify-center ${
                      isOpen ? 'transition_all ' : ''
                    }`}
                  >
                    <div className='relative'>
                      <div className='bg-[#FCFCFC] absolute top-0 p-3 rounded-br-3xl '>
                        <button className='px-8 py-4 price rounded-3xl text-white lg:text-5xl'>
                          $ 45
                        </button>
                      </div>
                      <div>
                        <Image
                          src={StudentImage2}
                          alt='Student Image'
                          className='rounded-3xl w-[524px] h-[461px] object-cover'
                          placeholder='blur'
                        />
                      </div>
                    </div>
                    <div className='mt-10'>
                      <h3 className=' lg:text-5xl text-primary font-medium'>
                        UI/UX training
                      </h3>
                      <div className='flex gap-5 '>
                        <div className='mt-3'>
                          <p className='text-[#363636] text-lg'>
                            Look for courses that cover the fundamental
                            principles of UI/UX design, including user research,
                            information architecture, wireframing, prototyping,
                            usability testing, and visual design. <br /> Courses
                            may also cover specific tools and software used in
                            the industry, such as <b>Adobe XD, Sketch</b>, or{' '}
                            <b>Figma</b>.
                          </p>
                          <div className='flex items-center mt-4'>
                            <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold '>
                              10k
                            </div>
                            <div className='-ml-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold '>
                              30k
                            </div>
                            <div className='-ml-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold '>
                              30k
                            </div>
                            <div className='-ml-2 w-10 h-10 top_curcal_gradient rounded-full flex items-center justify-center text-black font-semibold shadow-lg border-4 border-white'>
                              20k
                            </div>
                          </div>
                          <div className='flex items-center gap-3'>
                            <Rating
                              name='half-rating-read'
                              defaultValue={5}
                              precision={4.5}
                              size='large'
                              sx={{ opacity: 0.7 }}
                            />
                            <h2 className='text-7xl text-primary font-bold'>
                              4.5 <span className='text-lg'>/5</span>
                            </h2>
                          </div>
                        </div>
                        <div>
                          <div className='w-28 h-28 week_box relative rounded-lg'>
                            <div className='py-2 shadow-lg px-10 font-bold text-8xl text-primary text-center week_text absolute top-0 right-0 -translate-y-16 rounded-2xl border-4 border-white translate-x-14'>
                              3<span className='text-xl block '>week</span>
                            </div>
                          </div>
                          <div className='w-28 h-28 lessons_bg relative rounded-lg mt-32'>
                            <div className='py-2 shadow-lg px-7 font-bold text-8xl text-primary text-center week_text absolute top-0 right-0 -translate-y-16 rounded-2xl border-4 border-white translate-x-14'>
                              8<span className='text-xl block '>Lessons</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Grid>
            <Grid
              item
              md={4}
            >
              <div className='flex gap-8'>
                <div className='flex justify-between flex-col h-[1000px] items-center px-8 py-12 w-20 text-primary rounded-md bg-borderColor'>
                  <WhiteRight />
                  <p className=' -rotate-90 whitespace-nowrap text-2xl'>
                    Featured course
                  </p>
                  <WhiteRight />
                </div>
                <div className='flex justify-between flex-col h-[1000px] items-center px-8 py-12 w-20 text-primary rounded-md bg-borderColor'>
                  <WhiteRight />

                  <p className=' -rotate-90 whitespace-nowrap text-2xl'>
                    Newly added
                  </p>
                  <WhiteRight />
                </div>
                <div className='flex justify-between flex-col h-[1000px] items-center px-8 py-12 w-20 text-primary rounded-md bg-borderColor'>
                  <WhiteRight />
                  <p className=' -rotate-90 whitespace-nowrap text-2xl'>
                    Top rated
                  </p>
                  <WhiteRight />
                </div>
                <div className='flex justify-between flex-col h-[1000px] items-center px-8 py-12 w-20 text-primary rounded-md bg-borderColor'>
                  <WhiteRight />
                  <p className=' -rotate-90 whitespace-nowrap text-2xl'>
                    Top sell
                  </p>
                  <WhiteRight />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
