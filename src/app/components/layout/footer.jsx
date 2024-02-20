/** @format */

import {
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import NextLink from 'next/link'
import React from 'react'

// images
import Logo from '../../../../public/assets/images/logo.webp'
// icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { PiPhoneCall } from 'react-icons/pi'
import Internet from '../assets/svg/internet'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import Linkedin from '../assets/svg/linkedin'
import ArrowIcon from '../assets/svg/arrow'
import User from '../assets/svg/user'
import Email from '../assets/svg/email'

const LOCATION_DATA = [
  {
    title: ' 5/E9, Durham Rd, Chester le Street, UK - DH3 2QZ',
    icon: <HiOutlineLocationMarker className='text-primary' />,
  },
  {
    title: 'www.edumate.com',
    icon: <PiPhoneCall className='text-primary' />,
    linkPath: '#',
  },
  {
    title: '0191 410 4155',
    icon: <Internet />,
    linkPath: '#',
  },
]

// navlinks
const NAVBAR_LINKS = [
  {
    linkPath: '/',
    Name: 'Home',
  },
  {
    linkPath: '#',
    Name: 'About',
  },
  {
    linkPath: '#',
    Name: 'Courses',
  },
  {
    linkPath: '#',
    Name: 'Teachers',
  },
  {
    linkPath: '#',
    Name: 'Blogs',
  },
  {
    linkPath: '#',
    Name: 'Contact',
  },
]

// explore
const EXPLORE_DATA = [
  {
    linkPath: '/',
    Name: 'Sign In / Registration',
  },
  {
    linkPath: '#',
    Name: 'Investor',
  },
  {
    linkPath: '#',
    Name: 'Careers',
  },
  {
    linkPath: '#',
    Name: 'Help and support',
  },
  {
    linkPath: '#',
    Name: 'affilate',
  },
]

export default function Footer() {
  return (
    <>
      <div className='border-b border-borderColor'>
        <Container maxWidth='xl'>
          <div className=''>
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
                  <div className='border-r border-borderColor p-5 flex flex-col gap-4'>
                    <Link
                      href='/'
                      className='w-[240px]'
                    >
                      <Image
                        src={Logo}
                        alt='logo'
                        className='object-cover'
                      />
                    </Link>
                    <p className='text-lg text-[#A6A6A6]'>
                      Get 25M best online course
                    </p>
                    <div>
                      {LOCATION_DATA.map((item, idx) => (
                        <div
                          className='flex gap-2 items-center'
                          key={idx}
                        >
                          <IconButton aria-label=''>{item.icon}</IconButton>
                          <Link
                            href={`${item.linkPath}`}
                            className='text-primary'
                          >
                            {item.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className='flex items-center'>
                      <IconButton
                        LinkComponent={NextLink}
                        href={''}
                      >
                        <FaFacebook className='text-primary text-[26px]' />
                      </IconButton>
                      <IconButton
                        LinkComponent={NextLink}
                        href={''}
                      >
                        <AiFillTwitterCircle className='text-primary text-[28px]' />
                      </IconButton>
                      <IconButton
                        LinkComponent={NextLink}
                        href={''}
                      >
                        <Linkedin />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  lg={8}
                  p={0 + '!important'}
                >
                  <div className='pt-16 pb-10 xxl:w-[120%] flex items-center gap-14'>
                    <div className='flex items-center gap-2'>
                      <h3 className='text_color_top_bottom text-3xl text-primary whitespace-nowrap px-6'>
                        Main links
                      </h3>
                      <ArrowIcon />
                    </div>

                    <ul className='flex gap-7  font-medium  '>
                      {NAVBAR_LINKS.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.linkPath}
                            className={`  text_color_top_bottom text-base`}
                          >
                            {item.Name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className='  border-borderColor w-[150%]' />
                  <div className=' py-10 w-[120%] flex items-center gap-16'>
                    <div className='flex items-center gap-6'>
                      <h3 className='text_color_top_bottom text-3xl text-primary whitespace-nowrap px-6'>
                        Explore
                      </h3>
                      <ArrowIcon />
                    </div>
                    <ul className='flex gap-7  font-medium  '>
                      {EXPLORE_DATA.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.linkPath}
                            className={`  text_color_top_bottom text-base`}
                          >
                            {item.Name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className='border-borderColor w-[150%]' />
                  <div className='flex items-center gap-5 '>
                    <h3 className='text_color_top_bottom text-3xl text-primary whitespace-nowrap px-6 py-3'>
                      Subscribe for newsletter
                    </h3>
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
                        placeholder='Email address'
                        startAdornment={
                          <InputAdornment position='start'>
                            <IconButton>
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton>
                              <ArrowIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Container>
      </div>
      <div className='py-4'>
        <p className='text-[#A6A6A6] text-base text-center m-auto'>
          Copyright © 2023 Networkers Home, All rights reserved. . Terms &
          Conditions . Privacy Policy
        </p>
      </div>
    </>
  )
}
