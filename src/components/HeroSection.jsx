import React, { useEffect, useState } from "react"
import omar from "../assets/WhatsApp Image 2025-07-28 at 13.44.49_9a8ce2da.jpg"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        data-aos='zoom-out'
        className='absolute inset-0 bg-black'
        style={{
          clipPath: isDesktop
            ? "polygon(50% 0, 100% 0, 100% 100%, 40% 100%)"
            : "none",
        }}
      >
        <img
          src={omar}
          alt='omar'
          className='w-full h-full md:w-auto md:ml-220 md:h-auto md:translate-y-20 md:max-w-full md:max-h-full '
        />
      </div>

      <div className='absolute bottom-0 left-0 w-full z-20 md:hidden'>
        <div
          className='w-full h-60 bg-gray-800 text-white flex flex-row items-center justify-end md:px-6 pt-6'
          style={{
            clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div
            data-aos='fade-down'
            className=' w-full flex flex-col  justify-start pl-2 pt-5'
          >
            <h1 className='text-lg font-semibold mb-1'>Hi, I am</h1>
            <h2 className='text-2xl font-bold'>Omar Elali</h2>
            <p className='text-sm font-medium tracking-widest mb-3'>
              Full Stack Web Development
            </p>
          </div>
          <div data-aos='fade-left' className=' flex gap-3 pr-3 flex-col'>
            <a
              href='https://github.com/Omarelali2'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-900 hover:bg-gray-700 transition w-9 h-9 flex items-center justify-center rounded-md'
            >
              <FaGithub size={18} color='white' />
            </a>
            <a
              href='https://www.linkedin.com/in/omar-elali-28aaa1312/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-700 hover:bg-blue-600 transition w-9 h-9 flex items-center justify-center rounded-md'
            >
              <FaLinkedin size={18} color='white' />
            </a>
            <a
              href='https://www.instagram.com/omarelali1'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-pink-600 hover:bg-pink-500 transition w-9 h-9 flex items-center justify-center rounded-md'
            >
              <FaInstagram size={18} color='white' />
            </a>
            <a
              href='https://wa.me/70259020'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-green-600 hover:bg-green-500 transition w-9 h-9 flex items-center justify-center rounded-md'
            >
              <FaWhatsapp size={18} color='white' />
            </a>
          </div>
        </div>
      </div>

      <div className='hidden md:flex relative z-10 flex-row justify-between p-10 h-full text-black'>
        <div
          data-aos='fade-right'
          className='flex-1 flex flex-col  md:justify-center  mt-60'
        >
          <h1 className='text-4xl font-semibold mb-4'>Hi, I am</h1>
          <h2 className='text-5xl font-bold tracking-wide'>Omar Elali</h2>
          <p className='text-xl font-bold tracking-widest mt-3'>
            Full Stack Web Development
          </p>

          <div className='flex gap-4 mt-6'>
            <a
              href='https://github.com/Omarelali2'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-900 hover:bg-gray-700 transition w-12 h-12 flex items-center justify-center rounded-md'
            >
              <FaGithub size={24} color='white' />
            </a>
            <a
              href='https://www.linkedin.com/in/omar-elali-28aaa1312/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-700 hover:bg-blue-600 transition w-12 h-12 flex items-center justify-center rounded-md'
            >
              <FaLinkedin size={24} color='white' />
            </a>
            <a
              href='https://www.instagram.com/omarelali1'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-pink-600 hover:bg-pink-500 transition w-12 h-12 flex items-center justify-center rounded-md'
            >
              <FaInstagram size={24} color='white' />
            </a>
            <a
              href='https://wa.me/70259020'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-green-600 hover:bg-green-500 transition w-12 h-12 flex items-center justify-center rounded-md'
            >
              <FaWhatsapp size={24} color='white' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
