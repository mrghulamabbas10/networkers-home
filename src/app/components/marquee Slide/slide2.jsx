/** @format */

import React from 'react'

export default function Slide2() {
  return (
    <div className='-rotate-6 -mx-4 -mt-32'>
      <marquee
        className='marq h-36 bg-primary text-white pt-12'
        bgcolor='Green'
        direction='right'
        loop=''
      >
        <div className='flex items-center gap-10'>
          <div className='flex gap-5 '>
            <div className='text-5xl font-bold'>✸</div>
            <div className='text-5xl font-bold AeonikLightItalic tracking-wide'>
              Best online course
            </div>
          </div>
          <div className='flex gap-5 '>
            <div className='text-5xl font-bold'>✸</div>
            <div className='text-5xl font-bold AeonikLightItalic tracking-wide'>
              Flat discount on all courses
            </div>
          </div>
          <div className='flex gap-5 '>
            <div className='text-5xl font-bold'>✸</div>
            <div className='text-5xl font-bold AeonikLightItalic tracking-wide'>
              Summer collection sale
            </div>
          </div>
        </div>
      </marquee>
    </div>
  )
}
