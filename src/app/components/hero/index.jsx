/** @format */

import { Container, Divider, Grid, Button, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

// images
import ArrowImage from '../../../../public/assets/images/arrow-img.png'
import StarIcon from '../../../../public/assets/images/Star-icon.png'
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
                <span className='absolute -bottom-2 right-24 text-2xl py-2 px-6 rounded-full rotate-12 text-white bg-orange-500 font-bold '>
                  7$/m
                </span>
                <Image
                  src={ArrowImage}
                  alt='Arrow Image'
                  className='right-0 top-12 absolute'
                />
              </div>
              <div className='mt-10'>
                <Divider />
              </div>
              <div className='mt-10 flex flex-col gap-9 w-[570px] relative'>
                <p className='text-primary text-2xl leading-6 dark:text-white'>
                  More than <b>26,000+</b> <br />
                  courses from us
                </p>
                <Stack
                  className='flex-wrap gap-3'
                  direction='row'
                >
                  <Button
                    variant='outlined'
                    className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'
                  >
                    Web development
                  </Button>
                  <Button
                    variant='outlined'
                    className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'
                  >
                    Designing
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    className='px-7 py-3 text-xl capitalize rounded-full !bg-perpal text-white '
                    startIcon={<MdArrowOutward />}
                  >
                    UI/UX Designing
                  </Button>{' '}
                  <Button
                    variant='outlined'
                    className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'
                  >
                    Ai
                  </Button>{' '}
                  <Button
                    variant='outlined'
                    className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'
                  >
                    Machine learning
                  </Button>
                  <Button
                    variant='outlined'
                    className='px-7 py-3 text-xl capitalize rounded-full text-gray-700 dark:text-white border !border-borderColor'
                  >
                    Wordpress development
                  </Button>
                </Stack>
                <Image
                  src={StarIcon}
                  alt='Arrow Image'
                  className='-right-16 top-8 absolute'
                />
                <Image
                  src={StarIcon}
                  alt='Arrow Image'
                  className='-right-[40%] top-[70%] absolute w-8'
                />
                <Image
                  src={StarIcon}
                  alt='Arrow Image'
                  className='-right-16 -bottom-20 absolute w-8'
                />
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            1
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
