import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Projects from '../components/projects'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <hr className='border-t-2 mt-10 border-black w-[80%] mx-auto mb-6' />
      <Footer/>
    </div>
  )
}

export default Home