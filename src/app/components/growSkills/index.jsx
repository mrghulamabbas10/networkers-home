/** @format */

import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import ArrowIcon from '../assets/svg/arrow'
// images
import Box1Image from '../../../../public/assets/images/box-1.svg'
import BoxArrow1 from '../../../../public/assets/images/arrow-box-1.png'
import Box2Image from '../../../../public/assets/images/box-2.svg'
import BoxArrow2 from '../../../../public/assets/images/box-arrow-2.png'
import Box3Image from '../../../../public/assets/images/box-3.svg'
import BoxArrow3 from '../../../../public/assets/images/box-arrow-3.png'
import ScrollDown from '../../../../public/assets/images/Scroll-down.png'
import ArrowImage from '../../../../public/assets/images/arrow-img.png'

import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <div className=' mt-32 '>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={10}
        >
          <Grid
            item
            md={8}
            xs={12}
          >
            <div className='relative max-w-[660px]'>
              <h1 className='text-7xl text_color_top_bottom'>
                Grow your skills learn with us from anywhere
              </h1>
              <Image
                src={ArrowImage}
                alt='Arrow Image'
                className='right-0 top-0 absolute rotate-6 translate-x-0 -translate-y-6'
              />
            </div>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <button className='flex gap-5 items-center py-3 border-b-2 border-primary text-xl text-primary dark:text-white'>
              Explore now
              <ArrowIcon />
            </button>
            <p className='mt-8 text-gray-500 dark:text-white text-lg'>
              Online education has made quality education more accessible to a
              wider range of learners. It removes barriers such as geographical
              limitations.
            </p>
          </Grid>
        </Grid>
      </Container>
      <div className='lg:border-t border-borderColor lg:my-16 relative'>
        <Link
          href='#'
          className='xl:block lg:hidden'
        >
          <Image
            src={ScrollDown}
            alt='ScrollDown'
            className='absolute translate-x-10 translate-y-[70%] top-0 left-0'
          />
        </Link>
        <Container maxWidth='xl'>
          <div className='xl:border-l xl:border-b border-borderColor lg:py-32'>
            <Container maxWidth='lg'>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <section className='flex flex-col justify-center text-blue-950'>
                    <article className='flex overflow-hidden relative flex-col pb-12 pl-7 w-full aspect-[1.14]'>
                      <Image
                        loading='lazy'
                        src={Box1Image}
                        alt='A visual representation of flexibility in education'
                        className='object-cover absolute inset-0 size-full'
                      />
                      <header className='flex relative gap-5 justify-between text-4xl whitespace-nowrap'>
                        <h1 className='flex-auto self-end mt-12'>
                          Flexibility
                        </h1>
                        <Link href='#'>
                          <Image
                            loading='lazy'
                            src={BoxArrow1}
                            alt='Decorative'
                            className='max-w-full bg-yellow-200 rounded-full aspect-square w-[100px]'
                          />
                        </Link>
                      </header>
                      <p className='relative mt-16 mb-9 text-lg leading-6'>
                        Students can access learning materials and participate
                        in classes at their own pace and schedule, allowing for
                        a personalized learning experience.
                      </p>
                    </article>
                  </section>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <section className='flex flex-col justify-center   text-blue-950'>
                    <article className='flex overflow-hidden relative flex-col pt-12 pl-7 w-full aspect-[1.14]'>
                      <Image
                        loading='lazy'
                        src={Box2Image}
                        alt='Secondary course imagery'
                        className='object-cover absolute inset-0 size-full'
                      />
                      <p className='relative mt-10 px-2 text-lg leading-6'>
                        Students can access courses and programs offered by
                        institutions from around the world, regardless of their
                        physical location.
                      </p>
                      <div className='flex relative gap-5 justify-between mt-9 text-4xl whitespace-nowrap'>
                        <h2 className='flex-auto self-start mt-4'>
                          Accessibility
                        </h2>
                        <Link href='#'>
                          <Image
                            loading='lazy'
                            src={BoxArrow2}
                            alt='Accessibility emblem'
                            className='max-w-full bg-green-300 rounded-full aspect-square w-[100px]'
                          />
                        </Link>
                      </div>
                    </article>
                  </section>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <section className='flex flex-col justify-center max-w-[388px] text-blue-950'>
                    <div className='flex overflow-hidden relative flex-col pb-12 pl-7 w-full aspect-[1.14]'>
                      <Image
                        loading='lazy'
                        src={Box3Image}
                        alt='Interactive Learning Visual Representation'
                        className='object-cover absolute inset-0 size-full'
                      />
                      <header className='flex relative gap-5 justify-between items-start text-4xl'>
                        <h1 className='mt-11'>Interactive Learning</h1>
                        <Link href='#'>
                          <Image
                            loading='lazy'
                            src={BoxArrow3}
                            alt='Interactive Learning Emblem'
                            className='self-start max-w-full bg-purple-200 rounded-full aspect-square w-[140px]'
                          />
                        </Link>
                      </header>
                      <p className='relative mt-10 mb-10 text-lg leading-6'>
                        These can include discussion forums, virtual classrooms,
                        video conferences, multimedia resources, and interactive
                        assessments.
                      </p>
                    </div>
                  </section>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  )
}
