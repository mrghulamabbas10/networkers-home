/** @format */

import React from 'react'

export default function Slide1() {
  return (
    <div className='rotate-6 -mx-4 -mt-16'>
      <marquee
        className='marq h-36 bg-[#5E378F] text-white pt-12'
        bgcolor='Green'
        direction='left'
        loop=''
      >
        <div className='flex items-center gap-10'>
          <div className='text-5xl font-bold'>CCNA 200-301</div>
          <div className='text-5xl font-bold'>CCNP Enterprise</div>
          <div className='text-5xl font-bold'>Cisco SDWAN</div>
          <div className='text-5xl font-bold'>Cisco DNAC</div>
          <div className='text-5xl font-bold'>CEH</div>
          <div className='text-5xl font-bold'>F5 LTM</div>
          <div className='text-5xl font-bold'>PALO ALTO</div>
          <div className='text-5xl font-bold'>Fortigate</div>
          <div className='text-5xl font-bold'>AWS Assocaite</div>
          <div className='text-5xl font-bold'>AWS Professional</div>
          <div className='text-5xl font-bold'>AWS Security</div>
        </div>
      </marquee>
    </div>
  )
}
