/** @format */
import Hero from './components/hero'
import MarqueeSlide from './components/marquee Slide/slide1'
import MarqueeSlide2 from './components/marquee Slide/slide2'
import GrowSkills from './components/growSkills'
import AccessToLearning from './components/accessToLearning'
import CourseSection from './components/courses'
import PikCourse from './components/pikCourse'
import SignUp from './components/signUp'
import Teachers from './components/teachers'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeSlide />
      <MarqueeSlide2 />
      <GrowSkills />
      <AccessToLearning />
      <CourseSection />
      <PikCourse />
      <SignUp />
      <Teachers />
    </>
  )
}
