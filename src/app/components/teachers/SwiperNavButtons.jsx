/** @format */

import React, { useState, useEffect } from 'react'
import { useSwiper } from 'swiper/react'

import { LuMoveLeft, LuMoveRight } from 'react-icons/lu'

export const SwiperNavButtons = () => {
  const swiper = useSwiper()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    const checkSwiperState = () => {
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    }

    // Initial check
    checkSwiperState()

    // Subscribe to slide change events
    swiper.on('slideChange', checkSwiperState)

    // Cleanup
    return () => {
      swiper.off('slideChange', checkSwiperState)
    }
  }, [swiper])

  return (
    <div className='swiper-nav-btns float-end gap-2 flex mt-10 z-50'>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        style={{
          opacity: isBeginning ? 0.5 : 1,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <LuMoveLeft style={{ fontSize: 28, color: '#242D4F' }} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        style={{ opacity: isEnd ? 0.5 : 1 }}
      >
        <LuMoveRight
          style={{
            fontSize: 28,
            color: '#242D4F',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      </button>
    </div>
  )
}
