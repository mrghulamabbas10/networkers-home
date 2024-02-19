/** @format */

import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import StudentImage from '../../../../public/assets/images/student-2.webp'
import StudentImage2 from '../../../../public/assets/images/student3.webp'

export default function index() {
  return (
    <div className='xl:border-b border-borderColor'>
      <Container maxWidth='xl'>
        <div className='xl:border-r border-borderColor lg:pb-16'>
          <Container maxWidth='lg'>
            <Grid
              container
              spacing={8}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <div className='flex flex-col gap-4 mb-32'>
                  <h1 className='text-6xl text_color_top_bottom'>
                    Access to learning anytime any ware
                  </h1>
                  <p className='text-[#919192] text-2xl font-extralight'>
                    Guaranteed Success: 100% Placement Programs
                  </p>
                </div>
                <div className='relative'>
                  <div>
                    <Image
                      src={StudentImage}
                      alt='Student Image'
                      className='rounded-3xl'
                    />
                  </div>
                  <div className='bg-white absolute bottom-0 right-0 p-5 rounded-tl-3xl '>
                    <button className='flex items-center text-start font-light gap-4 -mr-10 px-5 py-2 discover_more rounded-xl text-white lg:text-2xl'>
                      Discover <br /> more
                      <svg
                        width='40'
                        height='40'
                        viewBox='0 0 69 67'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M23.3285 8.37785C26.8448 -2.44279 42.1552 -2.4428 45.6715 8.37785V8.37785C47.244 13.2169 51.7544 16.4939 56.8425 16.4941V16.4941C68.2202 16.4945 72.9513 31.0555 63.7469 37.7435V37.7435C59.6306 40.7344 57.9078 46.0367 59.4799 50.8758V50.8758C62.9954 61.6968 50.609 70.696 41.4041 64.0087V64.0087C37.2876 61.0181 31.7124 61.0181 27.5959 64.0087V64.0087C18.391 70.696 6.00461 61.6968 9.52009 50.8758V50.8758C11.0922 46.0367 9.36938 40.7344 5.25313 37.7435V37.7435C-3.95132 31.0555 0.779844 16.4945 12.1575 16.4941V16.4941C17.2456 16.4939 21.756 13.2169 23.3285 8.37785V8.37785Z'
                          fill='#FDFDFD'
                        />
                        <path
                          d='M42.3736 28C42.3736 27.5175 41.9825 27.1264 41.5 27.1264L33.6377 27.1264C33.1552 27.1264 32.7641 27.5175 32.7641 28C32.7641 28.4825 33.1552 28.8736 33.6377 28.8736L40.6264 28.8736L40.6264 35.8623C40.6264 36.3448 41.0175 36.7359 41.5 36.7359C41.9825 36.7359 42.3736 36.3448 42.3736 35.8623L42.3736 28ZM27.6177 43.1177L42.1177 28.6177L40.8823 27.3823L26.3823 41.8823L27.6177 43.1177Z'
                          fill='#232D4F'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <div className='relative'>
                  <div className='bg-white absolute top-0 -left-8 p-5 rounded-br-3xl '>
                    <button className='flex items-end gap-4 -ml-6 px-5 py-6 experience rounded-3xl text-white lg:text-7xl'>
                      12{' '}
                      <div className='text-lg text-left'>
                        Year <br /> Experience
                      </div>
                    </button>
                  </div>
                  <div>
                    <Image
                      src={StudentImage2}
                      alt='Student Image'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
                <div className='mt-16'>
                  <p className='text-lg text-[#919192]'>
                    Online education has gained significant popularity and
                    importance in recent years, especially with the advancements
                    in technology and increased accessibility to the internet.
                  </p>
                  <div>
                    <div className='flex items-center gap-4 mt-8'>
                      <div className='flex items-center gap-4'>
                        <svg
                          width='41'
                          height='37'
                          viewBox='0 0 41 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            opacity='0.5'
                            d='M0 6.69612C0 2.99795 2.99795 0 6.69612 0L33.4806 0C37.1787 0 40.1767 2.99795 40.1767 6.69612V30.3039C40.1767 34.002 37.1787 37 33.4806 37H6.69612C2.99796 37 0 34.002 0 30.3039L0 6.69612Z'
                            fill='url(#paint0_linear_0_1)'
                          />
                          <path
                            d='M27.5865 14.4129C28.1378 13.8609 28.1378 12.966 27.5865 12.414C27.0352 11.862 26.1413 11.862 25.59 12.414L17.1765 20.8376L14.41 18.0678C13.8587 17.5158 12.9648 17.5158 12.4135 18.0678C11.8622 18.6198 11.8622 19.5148 12.4135 20.0668L16.1782 23.836C16.7295 24.388 17.6234 24.388 18.1747 23.836L27.5865 14.4129Z'
                            fill='#1C274C'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_0_1'
                              x1='10.9475'
                              y1='-1.25033'
                              x2='37.2446'
                              y2='35.8047'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop stop-color='#8687FF' />
                              <stop
                                offset='1'
                                stop-color='#9798F3'
                                stopOpacity='0'
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className='text-primary text-2xl'>Expert Training</p>
                      </div>
                      <div className='flex items-center gap-4'>
                        <svg
                          width='41'
                          height='37'
                          viewBox='0 0 41 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            opacity='0.5'
                            d='M0 6.69612C0 2.99795 2.99795 0 6.69612 0L33.4806 0C37.1787 0 40.1767 2.99795 40.1767 6.69612V30.3039C40.1767 34.002 37.1787 37 33.4806 37H6.69612C2.99796 37 0 34.002 0 30.3039L0 6.69612Z'
                            fill='url(#paint0_linear_86_628)'
                          />
                          <path
                            d='M27.5865 14.4129C28.1378 13.8609 28.1378 12.966 27.5865 12.414C27.0352 11.862 26.1413 11.862 25.59 12.414L17.1765 20.8376L14.41 18.0678C13.8587 17.5158 12.9648 17.5158 12.4135 18.0678C11.8622 18.6198 11.8622 19.5148 12.4135 20.0668L16.1782 23.836C16.7295 24.388 17.6234 24.388 18.1747 23.836L27.5865 14.4129Z'
                            fill='#1C274C'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_86_628'
                              x1='10.9475'
                              y1='-1.25033'
                              x2='37.2446'
                              y2='35.8047'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop stop-color='#86DBFF' />
                              <stop
                                offset='1'
                                stop-color='#97F3EE'
                                stopOpacity='0'
                              />
                            </linearGradient>
                          </defs>
                        </svg>

                        <p className='text-primary text-2xl'>Online learning</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4 mt-8'>
                      <div className='flex items-center gap-4'>
                        <svg
                          width='41'
                          height='37'
                          viewBox='0 0 41 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            opacity='0.5'
                            d='M0 6.69612C0 2.99795 2.99795 0 6.69612 0L33.4806 0C37.1787 0 40.1767 2.99795 40.1767 6.69612V30.3039C40.1767 34.002 37.1787 37 33.4806 37H6.69612C2.99796 37 0 34.002 0 30.3039L0 6.69612Z'
                            fill='url(#paint0_linear_86_625)'
                          />
                          <path
                            d='M27.5865 14.4129C28.1378 13.8609 28.1378 12.966 27.5865 12.414C27.0352 11.862 26.1413 11.862 25.59 12.414L17.1765 20.8376L14.41 18.0678C13.8587 17.5158 12.9648 17.5158 12.4135 18.0678C11.8622 18.6198 11.8622 19.5148 12.4135 20.0668L16.1782 23.836C16.7295 24.388 17.6234 24.388 18.1747 23.836L27.5865 14.4129Z'
                            fill='#1C274C'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_86_625'
                              x1='10.9475'
                              y1='-1.25033'
                              x2='37.2446'
                              y2='35.8047'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop stop-color='#FD86FF' />
                              <stop
                                offset='1'
                                stop-color='#F397DF'
                                stopOpacity='0'
                              />
                            </linearGradient>
                          </defs>
                        </svg>

                        <p className='text-primary text-2xl'>Lifetime access</p>
                      </div>
                      <div className='flex items-center gap-4'>
                        <svg
                          width='41'
                          height='37'
                          viewBox='0 0 41 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            opacity='0.5'
                            d='M0 6.69612C0 2.99795 2.99795 0 6.69612 0L33.4806 0C37.1787 0 40.1767 2.99795 40.1767 6.69612V30.3039C40.1767 34.002 37.1787 37 33.4806 37H6.69612C2.99796 37 0 34.002 0 30.3039L0 6.69612Z'
                            fill='url(#paint0_linear_86_631)'
                          />
                          <path
                            d='M27.5865 14.4129C28.1378 13.8609 28.1378 12.966 27.5865 12.414C27.0352 11.862 26.1413 11.862 25.59 12.414L17.1765 20.8376L14.41 18.0678C13.8587 17.5158 12.9648 17.5158 12.4135 18.0678C11.8622 18.6198 11.8622 19.5148 12.4135 20.0668L16.1782 23.836C16.7295 24.388 17.6234 24.388 18.1747 23.836L27.5865 14.4129Z'
                            fill='#1C274C'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_86_631'
                              x1='10.9475'
                              y1='-1.25033'
                              x2='37.2446'
                              y2='35.8047'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop stop-color='#FFB186' />
                              <stop
                                offset='1'
                                stop-color='#F3D497'
                                stopOpacity='0'
                              />
                            </linearGradient>
                          </defs>
                        </svg>

                        <p className='text-primary text-2xl'>Great Results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
