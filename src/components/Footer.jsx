import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='relative w-full  bg-opacity-80 py-10 px-6 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
        <div className='mb-8 md:mb-0 text-center md:text-left'>
          <h2 className='text-3xl font-bold'>
            <span className='text-red-600'>O-</span>Elali
          </h2>
          <hr className='border-t-4 border-red-600 w-24 mx-auto md:mx-0 my-4' />
          <h3 className='text-xl md:text-2xl font-medium'>
            Full-stack developer based in Akkar, Lebanon
          </h3>
        </div>

        <div className='text-center md:text-right'>
          <h1 className='text-2xl font-bold mb-4 md:mr-6'>Media</h1>
          <div className='flex gap-4 justify-center md:justify-end'>
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
              className='bg-blue-700 hover:bg-blue-600 transition flex items-center justify-center w-12 h-12 rounded-md'
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className='mt-10 text-center text-sm '>© 2025. Made by O-Elali</div>
    </div>
  )
}

export default Footer
