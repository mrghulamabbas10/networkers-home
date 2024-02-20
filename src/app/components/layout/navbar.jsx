/** @format */
'use client'
import React, { useEffect, useState } from 'react'
import ThemeSwitcher from '../themeSwitcher'
// logo
import Logo from '../../../../public/assets/images/logo.webp'
// next js
import Image from 'next/image'
import Link from 'next/link'

// icons
import { BsArrowRight } from 'react-icons/bs'
import CartIcon from '../assets/svg/cart'
import SearchIcon from '../assets/svg/search'
import { Container } from '@mui/material'

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
export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    // Set the current path when the component mounts
    const path = window.location.pathname
    setCurrentPath(path)
  }, [])

  const getLinkClassName = (path) => {
    return currentPath === path
      ? 'font-bold rounded-x-2 py-1'
      : 'text-primary  text-xl'
  }

  const renderUnderline = (path) => {
    if (currentPath === path) {
      return (
        <div>
          <svg
            width='54'
            height='2'
            viewBox='0 0 59 2'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              y1='1'
              x2='59'
              y2='1'
              stroke='url(#paint0_linear_114_1061)'
              stroke-width='2'
            />
            <defs>
              <linearGradient
                id='paint0_linear_114_1061'
                x1='46.5444'
                y1='2.00001'
                x2='3.27778'
                y2='2'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#242D4F' />
                <stop
                  offset='1'
                  stop-color='#242D4F'
                  stop-opacity='0'
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    }
    return null // Return null if not the active path
  }

  return (
    <div className='md:block xs:hidden'>
      <Container maxWidth='xl'>
        {/* <ThemeSwitcher /> */}
        <nav className='sticky w-full z-20 top-0 start-0  '>
          <div className='flex justify-between items-center h-28 '>
            <div>
              <Link
                href='/'
                className='flex items-center space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src={Logo}
                  alt='logo'
                  width={288}
                  height={72}
                />
              </Link>
            </div>
            <div>
              <div
                className='items-center justify-between md:hidden w-full lg:flex md:w-auto md:order-1'
                id='navbar-sticky'
              >
                <ul className='flex gap-8 font-medium  '>
                  {NAVBAR_LINKS.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.linkPath}
                        className={`text_color_top_bottom text-xl pb-2 ${getLinkClassName(
                          item.linkPath
                        )}`}
                      >
                        {item.Name}
                      </Link>
                      {renderUnderline(item.linkPath)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className='flex gap-5 items-center'>
                <SearchIcon />
                <CartIcon />
                <button className='button_bg text-xl w-[191px] text-white text-start relative flex'>
                  Try for free
                  <BsArrowRight
                    style={{
                      position: 'absolute',
                      top: 6,
                      right: 15,
                      zIndex: 1,
                      fontSize: 24,
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}
