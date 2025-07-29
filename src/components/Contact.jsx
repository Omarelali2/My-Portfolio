import React from "react"
import { IoMdMail } from "react-icons/io"
import { FaMessage } from "react-icons/fa6"

const Contact = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      className='contact py-12 px-6 bg-white text-black'
    >
      <div className='px-6 py-8 flex items-center'>
        <h1 className='text-2xl font-bold w-full text-black md:w-40'>
          # Contact
        </h1>
        <hr className='border-t-2 ml-5 border-black w-44 mt-2' />
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='md:w-1/2'>
          <p className='text-lg leading-relaxed font-semibold'>
            I'm currently seeking internship or job opportunities. However, if
            you have any other requests or questions, feel free to reach out —
            I'd be happy to connect!
          </p>
        </div>

        <div className='md:w-1/2 border-2 border-black p-6 flex flex-col gap-6'>
          <h2 className='text-xl font-bold mb-2  border-b border-black pb-2'>
            Message Me Here
          </h2>

          <div className='flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer'>
            <IoMdMail className='text-3xl' />
            <a
              href='mailto:elaliomar30@gmail.com'
              className='text-md font-medium hover:underline'
            >
              elaliomar30@gmail.com
            </a>
          </div>

          <div className='flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer'>
            <FaMessage className='text-2xl' />
            <a
              href='tel:+96170259020'
              className='text-md font-medium hover:underline'
            >
              70-25-90-20
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
