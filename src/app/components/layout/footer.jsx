/** @format */

import { Container, Grid, IconButton } from '@mui/material'
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

export default function Footer() {
  return (
    <div>
      <Container maxWidth='xl'>
        <div>
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
              >
                <div className='py-10  selection: flex gap-10 items-center w-full justify-between border-b border-borderColor'>
                  <h3 className='text_color_top_bottom text-3xl text-primary whitespace-nowrap '>
                    Main links
                  </h3>
                  <ArrowIcon />
                  <ul className='flex gap-7  font-medium  '>
                    {NAVBAR_LINKS.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.linkPath}
                          className={`  text_color_top_bottom text-xl`}
                        >
                          {item.Name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
