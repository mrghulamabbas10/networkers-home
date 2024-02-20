/** @format */

import React from 'react'

import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from '@mui/material'
import ArrowIcon from '../assets/svg/arrow'
import Teachers from './slider'

export default function index() {
  return (
    <div className='border-b border-borderColor'>
      <Container maxWidth='xl'>
        <div className='border-r border-borderColor lg:pt-24 '>
          <Container>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                md={5}
                xs={12}
              >
                <div className='mt-28'>
                  <h1 className='text-6xl text_color_top_bottom'>
                    Meet the teacher who teaches you online
                  </h1>
                  <p className='text-[#919192] text-lg font-extralight mt-4'>
                    online platforms often offer micro-courses or modules,
                    allowing learners to focus on specific topics of interest
                    and acquire targeted skills.
                  </p>
                  <div className='mt-16'>
                    <button className='flex gap-5 items-center py-3 border-b-2 border-primary text-xl text-primary '>
                      View all teachers
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                md={7}
                xs={12}
              >
                <div className='xxl:w-[115%]'>
                  <Teachers />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
