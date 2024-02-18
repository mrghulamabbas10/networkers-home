/** @format */

import { Container, Divider, Grid, button, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

// images
import ArrowImage from '../../../../public/assets/images/arrow-img.png'
import StarIcon from '../../../../public/assets/images/Star-icon.png'
import Certification from '../../../../public/assets/images/Certification.png'
import Student from '../../../../public/assets/images/student.webp'
import { MdArrowOutward } from 'react-icons/md'

export default function Index() {
  return (
    <div className='md:my-32'>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <div>
              <div className='relative'>
                <h1
                  className={`text-[120px] text_color font-extrabold blod uppercase dark:text-white `}
                >
                  Online learning
                </h1>
                <span className='absolute bottom-0 right-0 -translate-x-16 -translate-y-0 text-2xl py-2 px-6 rounded-full rotate-12 text-white bg-orange-500 font-bold '>
                  7$/m
                </span>
                <Image
                  src={ArrowImage}
                  alt='Arrow Image'
                  className='right-0 top-0 absolute translate-x-0 translate-y-10'
                />
              </div>
              <div className='mt-10'>
                <Divider />
              </div>
              <div className='mt-10 flex flex-col gap-9 w-[570px] relative'>
                <p className='text-primary text-3xl leading-6 dark:text-white'>
                  <b>100% </b>Written Placement guarantee
                </p>
                <Stack
                  className='flex-wrap gap-3'
                  direction='row'
                >
                  <button className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'>
                    Web development
                  </button>
                  <button className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'>
                    Designing
                  </button>
                  <button
                    color='primary'
                    className='flex items-center gap-2 px-7 py-3 text-xl capitalize rounded-full !bg-perpal text-white '
                  >
                    <MdArrowOutward />
                    UI/UX Designing
                  </button>{' '}
                  <button className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'>
                    Ai
                  </button>{' '}
                  <button className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'>
                    Machine learning
                  </button>
                  <button className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'>
                    Wordpress development
                  </button>
                </Stack>
                <Image
                  src={StarIcon}
                  alt='Arrow Image'
                  className='right-0 top-0 absolute -translate-x-[0%] translate-y-[30%]'
                />
                <Image
                  src={StarIcon}
                  alt='Arrow Image'
                  className='right-0 top-0 translate-x-[200%] translate-y-[500%] absolute w-8'
                />
                <Image
                  src={StarIcon}
                  alt='Arrow Image'
                  className='right-0 bottom-0 absolute w-8 -translate-x-[100%] translate-y-[150%]'
                />
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <section className='flex flex-col'>
              <div className='self-center px-5  max-md:max-w-full'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
                  <section className='flex flex-col w-[65%] max-md:ml-0 max-md:w-full'>
                    <p className='mt-10 text-xl leading-6 text-neutral-700 max-md:mt-10 dark:text-white'>
                      20,000+ Placements in 250 MNC Giants.22 Awards of
                      Excellence. Top MNC Brand placements. Lifetime access to
                      Videos
                    </p>
                  </section>
                  <div className='flex flex-col grow text-xl leading-6 text-center text-neutral-700 max-md:mt-10'>
                    <div className='flex items-center'>
                      <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-semibold '>
                        10k
                      </div>
                      <div className='-ml-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-semibold '>
                        30k
                      </div>
                      <div className='-ml-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-semibold '>
                        30k
                      </div>
                      <div className='-ml-6 w-20 h-20 top_curcal_gradient rounded-full flex items-center justify-center text-black font-semibold shadow-lg border-4 border-white'>
                        20k
                      </div>
                    </div>
                    <p className='mt-4 dark:text-white'>students passed</p>
                  </div>
                </div>
              </div>
              <div className='mt-9 w-full max-md:max-w-full'>
                <div className='relative flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
                  <div className='absolute w-[200px] h-[200px] rounded-full left-0 top-0 -translate-x-[50%] translate-y-[80%]'>
                    <Image
                      src={Certification}
                      alt='Certification'
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <Image
                      src={Student}
                      alt='Student'
                      className='rounded-md shadow-lg  '
                    />
                  </div>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
