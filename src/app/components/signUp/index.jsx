/** @format */

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
import React from 'react'
import SignUp from '../../../../public/assets/images/signup.webp'
import Image from 'next/image'
import User from '../assets/svg/user'
import Email from '../assets/svg/email'
import Select from '../assets/svg/select'

export default function index() {
  return (
    <div className='border-b border-borderColor'>
      <Container maxWidth='xl'>
        <div className='border-l border-borderColor lg:py-24 '>
          <Container>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <div className='relative'>
                  <div>
                    <Image
                      src={SignUp}
                      alt='SignUp Image'
                      className='rounded-3xl h-[527px] object-cover'
                    />
                  </div>
                  <div className='bg-white absolute bottom-0 right-0 p-5 rounded-tl-3xl '>
                    <button className='flex items-center text-start font-extralight gap-4 -mr-10 px-5 py-2 discover_more rounded-xl text-white lg:text-2xl'>
                      Send <br /> request
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
                <div className='ml-10'>
                  <h1 className='text-6xl text_color_top_bottom'>
                    Sign up for a free trail lesson
                  </h1>
                  <p className='text-[#919192] text-2xl font-extralight mt-2'>
                    Expand Your Horizons with Online Education
                  </p>
                </div>
                <div className='mt-10 ml-10'>
                  <form action=''>
                    <FormControl
                      sx={{ m: 1, width: 397 }}
                      variant='standard'
                    >
                      <Input
                        sx={{
                          p: '16px 0',
                          ':after': {
                            borderBottom: '2px solid #242D4F',
                            color: '#242D4F',
                            fontSize: 18,
                          },
                        }}
                        placeholder='Your name'
                        startAdornment={
                          <InputAdornment position='start'>
                            <IconButton>
                              <User />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormControl
                      sx={{ m: 1, width: 397 }}
                      variant='standard'
                    >
                      <Input
                        sx={{
                          p: '16px 0',
                          ':after': {
                            borderBottom: '2px solid #242D4F',
                            color: '#242D4F',
                            fontSize: 18,
                          },
                        }}
                        placeholder='Your name'
                        startAdornment={
                          <InputAdornment position='start'>
                            <IconButton>
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <Box sx={{ position: 'relative' }}>
                      <select
                        name='Select Course'
                        id=''
                        className='outline-none text-gray-400 py-5 pl-10 pr-2 border-b-2 border-gray-400 m-2  w-[397px]'
                      >
                        <option value=''>Select course</option>
                        <option value=''>CCNA 200-301</option>
                        <option value=''>CCNP Enterprise</option>
                        <option value=''>Cisco SDWAN</option>
                        <option value=''>Cisco DNAC</option>
                        <option value=''>CEH</option>
                        <option value=''>F5 LTM</option>
                        <option value=''>PALO ALTO</option>
                        <option value=''>Fortigate</option>
                        <option value=''>AWS Assocaite</option>
                        <option value=''>AWS Professional</option>
                        <option value=''>AWS Security</option>
                      </select>
                      <span className='absolute left-4 top-7'>
                        <Select />
                      </span>
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
