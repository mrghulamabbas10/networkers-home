/** @format */
import React from 'react'

import { Container, Grid } from '@mui/material'
import SimpleSlider from './slider'

export default function Index() {
  return (
    <div className='border-b border-r border-borderColor'>
      <Container maxWidth='xl'>
        <div className='pt-20 pb-0 border-r border-borderColor'>
          <Container maxWidth='lg'>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                md={5}
                xs={12}
              >
                {' '}
                <div className='relative max-w-[530px]'>
                  <h1 className='text-7xl text_color_top_bottom py-2'>
                    Pick a course by our popular category
                  </h1>
                  <div className='right-0 bottom-0 absolute -rotate-12 -translate-x-0 translate-y-10'>
                    <svg
                      width='199'
                      height='101'
                      viewBox='0 0 199 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2.13739 30.2916C13.5427 52.9636 41.9708 85.7499 82.4711 61.56C103.426 49.0442 113.172 29.0268 81.9413 25.7304C44.1804 21.7448 57.3034 76.445 97.8661 80.5062C130.316 83.7551 177.117 71.036 196.462 64.2703'
                        stroke='url(#paint0_linear_86_580)'
                        stroke-width='3.02798'
                        stroke-linecap='round'
                      />
                      <path
                        d='M192.987 71.1213L196.484 64.4079L191.388 61.4112'
                        stroke='#FFC569'
                        stroke-width='3.02798'
                        stroke-linecap='round'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_86_580'
                          x1='138.362'
                          y1='81.9385'
                          x2='3.32616'
                          y2='48.5958'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='#FFC569' />
                          <stop
                            offset='1'
                            stop-color='#FFC569'
                            stop-opacity='0'
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                md={7}
                xs={12}
              >
                <div className='xxl:w-[115%]'>
                  <SimpleSlider />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
