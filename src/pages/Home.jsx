import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projectors from "../components/Product"
const Home = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <Projectors />
      <About />
      <Skills />
      <Contact />
      <hr className='border-t-2 mt-10 border-black w-[80%] mx-auto mb-6' />
      <Footer/>
    </div>
  )
}

export default Home