/** @format */
'use client'
import React from 'react'
import ThemeSwitcher from '../themeSwitcher'
// logo
import Logo from '../../../../public/assets/images/logo.webp'
// next js
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  return (
    <Container maxWidth='xl'>
      <ThemeSwitcher />
      <nav className='sticky w-full z-20 top-0 start-0  '>
        <div className='flex justify-between items-center h-20 '>
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
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
              id='navbar-sticky'
            >
              <ul className='flex gap-8 font-medium  '>
                {NAVBAR_LINKS.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.linkPath}
                      className={` dark:text-white text-[#1C274C] text-xl${
                        router.pathname === item.linkPath ? 'font-bold' : ''
                      }`}
                    >
                      {item.Name}
                    </Link>
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
  )
}
