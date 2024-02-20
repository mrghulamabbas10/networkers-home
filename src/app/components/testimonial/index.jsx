/** @format */

import { Container } from '@mui/material'
import React from 'react'
import TestimonialSlider from './slider'

export default function Index() {
  return (
    <div className='border-b border-borderColor testimonial_bg_elips '>
      <Container>
        <div className='border-l border-borderColor py-14 '>
          <Container maxWidth='md'>
            <h1 className='text_color_top_bottom text-7xl text-center'>
              What they{`’`}re saying about our course
            </h1>
            <p className='text-[#919192] text-base font-extralight text-center'>
              online platforms often offer micro-courses or modules, allowing
              learners to focus on specific topics of interest and acquire
              targeted skills.
            </p>
          </Container>

          <Container maxWidth='lg'>
            <TestimonialSlider />
          </Container>
        </div>
      </Container>
    </div>
  )
}
