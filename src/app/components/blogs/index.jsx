/** @format */

import { Container, Grid } from '@mui/material'
import React from 'react'

import Blog1 from '../../../../public/assets/bloge/blog-1.avif'
import Blog2 from '../../../../public/assets/bloge/blog-2.avif'
import Image from 'next/image'

import { BsArrowUpRight } from 'react-icons/bs'
import ArrowIcon from '../assets/svg/arrow'

export default function Index() {
  return (
    <div className='border-b border-borderColor'>
      <Container maxWidth='xl'>
        <div className='py-14 border-r border-borderColor '>
          <Container>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                md={6}
              >
                <div>
                  <h1 className='text_color_top_bottom text-7xl py-4'>
                    Our latest news and up coming blogpost
                  </h1>
                  <p className='text-[#919192] text-base font-extralight mt-3 '>
                    online platforms often offer micro-courses or modules,
                    allowing learners to focus on specific topics of interest
                    and acquire targeted skills.
                  </p>
                </div>
                <div className='mt-16'>
                  <button className='flex gap-5 items-center py-3 border-b-2 border-primary text-xl text-primary '>
                    View all teachers
                    <ArrowIcon />
                  </button>
                </div>
              </Grid>
              <Grid
                item
                md={6}
              >
                <div className='flex gap-4 xxl:w-[125%]'>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      md={6}
                    >
                      <div className='relative'>
                        <Image
                          src={Blog1}
                          alt='Blog1'
                          className='h-[327px] object-cover rounded-3xl'
                        />
                        <div className='bg-white p-4 absolute top-0 left-0 rounded-br-xl'>
                          <div className='teacher p-2 text-white rounded-md '>
                            <b className='text-lg'>20</b> sep
                          </div>
                        </div>
                        <div className='bg-white p-2 absolute bottom-0 right-0 rounded-tl-xl'>
                          <button className='bg-blue-700 p-4 text-white text-5xl rounded-full'>
                            <BsArrowUpRight />
                          </button>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4 mt-4'>
                        <h3 className='text-3xl font-semibold text-primary'>
                          The quality role
                        </h3>
                        <div className='flex items-center xxl:gap-4 gap-2'>
                          <div className='flex items-center gap-1 font-extralight bg-blue-500 text-white py-1 xxl:px-5 px-3 rounded-full'>
                            <svg
                              width='15'
                              height='15'
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M7.68564 1.05908C6.11295 1.05908 4.83804 2.334 4.83804 3.90668C4.83804 5.47937 6.11295 6.75429 7.68564 6.75429C9.25833 6.75429 10.5332 5.47937 10.5332 3.90668C10.5332 2.334 9.25833 1.05908 7.68564 1.05908ZM5.73728 3.90668C5.73728 2.83064 6.60959 1.95832 7.68564 1.95832C8.76169 1.95832 9.634 2.83064 9.634 3.90668C9.634 4.98273 8.76169 5.85504 7.68564 5.85504C6.60959 5.85504 5.73728 4.98273 5.73728 3.90668Z'
                                fill='white'
                              />
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M7.68564 7.65353C6.46307 7.65353 5.33413 7.93574 4.49521 8.41512C3.66902 8.88723 3.03955 9.60797 3.03955 10.5011C3.03955 11.3943 3.66902 12.115 4.49521 12.5871C5.33413 13.0665 6.46307 13.3487 7.68564 13.3487C8.90821 13.3487 10.0371 13.0665 10.8761 12.5871C11.7023 12.115 12.3317 11.3943 12.3317 10.5011C12.3317 9.60797 11.7023 8.88723 10.8761 8.41512C10.0371 7.93574 8.90821 7.65353 7.68564 7.65353ZM3.93879 10.5011C3.93879 10.0699 4.24874 9.59167 4.94136 9.19588C5.62127 8.80737 6.59057 8.55277 7.68564 8.55277C8.78071 8.55277 9.75001 8.80737 10.4299 9.19588C11.1225 9.59167 11.4325 10.0699 11.4325 10.5011C11.4325 10.9323 11.1225 11.4106 10.4299 11.8064C9.75001 12.1949 8.78071 12.4495 7.68564 12.4495C6.59057 12.4495 5.62127 12.1949 4.94136 11.8064C4.24874 11.4106 3.93879 10.9323 3.93879 10.5011Z'
                                fill='white'
                              />
                            </svg>
                            By admin
                          </div>
                          <div className='flex items-center gap-2 bg-orange-600 text-white py-1 xxl:px-5 px-2 rounded-full font-extralight'>
                            <svg
                              width='16'
                              height='15'
                              viewBox='0 0 16 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M6.18758 3.4917C6.89497 2.05152 8.37657 1.05908 10.0909 1.05908C12.4913 1.05908 14.4372 3.00501 14.4372 5.40542C14.4372 6.04814 14.2975 6.65942 14.0462 7.20951C13.9806 7.35307 13.9678 7.48867 13.997 7.59763L14.0734 7.88302C14.3178 8.79655 13.482 9.6323 12.5685 9.38787L12.2831 9.31151C12.202 9.28981 12.1062 9.29134 12.0033 9.32057C11.6975 11.9264 9.48168 13.9482 6.79368 13.9482C5.98438 13.9482 5.2167 13.7646 4.53112 13.4364C4.3954 13.3715 4.26177 13.3583 4.15185 13.3877L3.41684 13.5843C2.50331 13.8288 1.66756 12.993 1.91199 12.0795L2.10865 11.3445C2.13806 11.2346 2.12488 11.1009 2.0599 10.9652C1.73168 10.2796 1.5481 9.51195 1.5481 8.70265C1.5481 6.01058 3.57603 3.79217 6.18758 3.4917ZM7.2343 3.47531C9.827 3.69093 11.8842 5.79216 12.0309 8.40386C12.1883 8.38886 12.3518 8.39903 12.5155 8.44283L12.8009 8.51919C13.046 8.58477 13.2702 8.36054 13.2047 8.11545L13.1283 7.83006C13.0341 7.47796 13.0955 7.12646 13.2282 6.83588C13.427 6.40072 13.538 5.91664 13.538 5.40542C13.538 3.50164 11.9947 1.95833 10.0909 1.95833C8.90276 1.95833 7.85431 2.55952 7.2343 3.47531ZM6.79368 4.35631C4.39326 4.35631 2.44734 6.30223 2.44734 8.70265C2.44734 9.37471 2.59956 10.01 2.87099 10.5769C3.01211 10.8717 3.07129 11.2258 2.97733 11.5769L2.78067 12.3119C2.71509 12.557 2.93932 12.7812 3.18441 12.7157L3.91942 12.519C4.27056 12.425 4.62465 12.4842 4.91943 12.6253C5.48637 12.8968 6.12162 13.049 6.79368 13.049C9.1941 13.049 11.14 11.1031 11.14 8.70265C11.14 6.30223 9.1941 4.35631 6.79368 4.35631Z'
                                fill='white'
                              />
                              <path
                                d='M5.29494 8.70265C5.29494 9.03374 5.02654 9.30214 4.69545 9.30214C4.36435 9.30214 4.09595 9.03374 4.09595 8.70265C4.09595 8.37156 4.36435 8.10315 4.69545 8.10315C5.02654 8.10315 5.29494 8.37156 5.29494 8.70265Z'
                                fill='white'
                              />
                              <path
                                d='M7.39318 8.70265C7.39318 9.03374 7.12477 9.30214 6.79368 9.30214C6.46259 9.30214 6.19418 9.03374 6.19418 8.70265C6.19418 8.37156 6.46259 8.10315 6.79368 8.10315C7.12477 8.10315 7.39318 8.37156 7.39318 8.70265Z'
                                fill='white'
                              />
                              <path
                                d='M9.49141 8.70265C9.49141 9.03374 9.22301 9.30214 8.89191 9.30214C8.56082 9.30214 8.29242 9.03374 8.29242 8.70265C8.29242 8.37156 8.56082 8.10315 8.89191 8.10315C9.22301 8.10315 9.49141 8.37156 9.49141 8.70265Z'
                                fill='white'
                              />
                            </svg>
                            2 comments
                          </div>
                        </div>
                        <p className='text-xl'>
                          Organizing and structuring information to create
                          logical and user-friendly interfaces.
                        </p>
                      </div>
                    </Grid>
                    <Grid
                      item
                      md={6}
                    >
                      <div className='relative'>
                        <Image
                          src={Blog2}
                          alt='Blog1'
                          className='h-[327px] object-cover rounded-3xl'
                        />
                        <div className='bg-white p-4 absolute top-0 left-0 rounded-br-xl'>
                          <div className='teacher p-2 text-white rounded-md '>
                            <b className='text-lg'>20</b> sep
                          </div>
                        </div>
                        <div className='bg-white p-2 absolute bottom-0 right-0 rounded-tl-xl'>
                          <button className='bg-blue-700 p-4 text-white text-5xl rounded-full'>
                            <BsArrowUpRight />
                          </button>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4 mt-4'>
                        <h3 className='text-3xl font-semibold text-primary'>
                          The quality role
                        </h3>
                        <div className='flex items-center xxl:gap-4 gap-2'>
                          <div className='flex items-center gap-1 font-extralight bg-blue-500 text-white py-1 xxl:px-5 px-3 rounded-full'>
                            <svg
                              width='15'
                              height='15'
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M7.68564 1.05908C6.11295 1.05908 4.83804 2.334 4.83804 3.90668C4.83804 5.47937 6.11295 6.75429 7.68564 6.75429C9.25833 6.75429 10.5332 5.47937 10.5332 3.90668C10.5332 2.334 9.25833 1.05908 7.68564 1.05908ZM5.73728 3.90668C5.73728 2.83064 6.60959 1.95832 7.68564 1.95832C8.76169 1.95832 9.634 2.83064 9.634 3.90668C9.634 4.98273 8.76169 5.85504 7.68564 5.85504C6.60959 5.85504 5.73728 4.98273 5.73728 3.90668Z'
                                fill='white'
                              />
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M7.68564 7.65353C6.46307 7.65353 5.33413 7.93574 4.49521 8.41512C3.66902 8.88723 3.03955 9.60797 3.03955 10.5011C3.03955 11.3943 3.66902 12.115 4.49521 12.5871C5.33413 13.0665 6.46307 13.3487 7.68564 13.3487C8.90821 13.3487 10.0371 13.0665 10.8761 12.5871C11.7023 12.115 12.3317 11.3943 12.3317 10.5011C12.3317 9.60797 11.7023 8.88723 10.8761 8.41512C10.0371 7.93574 8.90821 7.65353 7.68564 7.65353ZM3.93879 10.5011C3.93879 10.0699 4.24874 9.59167 4.94136 9.19588C5.62127 8.80737 6.59057 8.55277 7.68564 8.55277C8.78071 8.55277 9.75001 8.80737 10.4299 9.19588C11.1225 9.59167 11.4325 10.0699 11.4325 10.5011C11.4325 10.9323 11.1225 11.4106 10.4299 11.8064C9.75001 12.1949 8.78071 12.4495 7.68564 12.4495C6.59057 12.4495 5.62127 12.1949 4.94136 11.8064C4.24874 11.4106 3.93879 10.9323 3.93879 10.5011Z'
                                fill='white'
                              />
                            </svg>
                            By admin
                          </div>
                          <div className='flex items-center gap-2 bg-orange-600 text-white py-1 xxl:px-5 px-2 rounded-full font-extralight'>
                            <svg
                              width='16'
                              height='15'
                              viewBox='0 0 16 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M6.18758 3.4917C6.89497 2.05152 8.37657 1.05908 10.0909 1.05908C12.4913 1.05908 14.4372 3.00501 14.4372 5.40542C14.4372 6.04814 14.2975 6.65942 14.0462 7.20951C13.9806 7.35307 13.9678 7.48867 13.997 7.59763L14.0734 7.88302C14.3178 8.79655 13.482 9.6323 12.5685 9.38787L12.2831 9.31151C12.202 9.28981 12.1062 9.29134 12.0033 9.32057C11.6975 11.9264 9.48168 13.9482 6.79368 13.9482C5.98438 13.9482 5.2167 13.7646 4.53112 13.4364C4.3954 13.3715 4.26177 13.3583 4.15185 13.3877L3.41684 13.5843C2.50331 13.8288 1.66756 12.993 1.91199 12.0795L2.10865 11.3445C2.13806 11.2346 2.12488 11.1009 2.0599 10.9652C1.73168 10.2796 1.5481 9.51195 1.5481 8.70265C1.5481 6.01058 3.57603 3.79217 6.18758 3.4917ZM7.2343 3.47531C9.827 3.69093 11.8842 5.79216 12.0309 8.40386C12.1883 8.38886 12.3518 8.39903 12.5155 8.44283L12.8009 8.51919C13.046 8.58477 13.2702 8.36054 13.2047 8.11545L13.1283 7.83006C13.0341 7.47796 13.0955 7.12646 13.2282 6.83588C13.427 6.40072 13.538 5.91664 13.538 5.40542C13.538 3.50164 11.9947 1.95833 10.0909 1.95833C8.90276 1.95833 7.85431 2.55952 7.2343 3.47531ZM6.79368 4.35631C4.39326 4.35631 2.44734 6.30223 2.44734 8.70265C2.44734 9.37471 2.59956 10.01 2.87099 10.5769C3.01211 10.8717 3.07129 11.2258 2.97733 11.5769L2.78067 12.3119C2.71509 12.557 2.93932 12.7812 3.18441 12.7157L3.91942 12.519C4.27056 12.425 4.62465 12.4842 4.91943 12.6253C5.48637 12.8968 6.12162 13.049 6.79368 13.049C9.1941 13.049 11.14 11.1031 11.14 8.70265C11.14 6.30223 9.1941 4.35631 6.79368 4.35631Z'
                                fill='white'
                              />
                              <path
                                d='M5.29494 8.70265C5.29494 9.03374 5.02654 9.30214 4.69545 9.30214C4.36435 9.30214 4.09595 9.03374 4.09595 8.70265C4.09595 8.37156 4.36435 8.10315 4.69545 8.10315C5.02654 8.10315 5.29494 8.37156 5.29494 8.70265Z'
                                fill='white'
                              />
                              <path
                                d='M7.39318 8.70265C7.39318 9.03374 7.12477 9.30214 6.79368 9.30214C6.46259 9.30214 6.19418 9.03374 6.19418 8.70265C6.19418 8.37156 6.46259 8.10315 6.79368 8.10315C7.12477 8.10315 7.39318 8.37156 7.39318 8.70265Z'
                                fill='white'
                              />
                              <path
                                d='M9.49141 8.70265C9.49141 9.03374 9.22301 9.30214 8.89191 9.30214C8.56082 9.30214 8.29242 9.03374 8.29242 8.70265C8.29242 8.37156 8.56082 8.10315 8.89191 8.10315C9.22301 8.10315 9.49141 8.37156 9.49141 8.70265Z'
                                fill='white'
                              />
                            </svg>
                            2 comments
                          </div>
                        </div>
                        <p className='text-xl'>
                          Organizing and structuring information to create
                          logical and user-friendly interfaces.
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
