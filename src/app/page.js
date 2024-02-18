/** @format */
import Hero from '@/app/components/hero'
import MarqueeSlide from '@/app/components/marquee Slide/slide1'
import MarqueeSlide2 from '@/app/components/marquee Slide/slide2'
import GrowSkills from '@/app/components/growSkills'
import AccessToLearning from '@/app/components/AccessToLearning'
import CourseSection from '@/app/components/courses'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeSlide />
      <MarqueeSlide2 />
      <GrowSkills />
      <AccessToLearning />
      <CourseSection />
    </>
  )
}
