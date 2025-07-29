import React from "react"

const About = () => {
  return (
    <div data-aos="zoom-in-up" className='about text-gray-800 flex items-center justify-center'>
      <div className='max-w-full rounded-2xl p-10'>
        <h1 className='text-4xl font-bold mb-6 text-center'>
          <span className='border-6 border-black px-6 py-2  inline-block'>
            About Me
          </span>
        </h1>
        <p className='text-lg leading-relaxed items-center text-center'>
          I am a graduate student from the Lebanese University with a Bachelor's
          degree in Computer Science. I specialize in web development and have
          strong skills in building and managing modern web applications. I'm
          constantly working on myself and always striving to improve and grow
          professionally.
        </p>
        <hr className='border-t-2 mt-10 border-black w-44 mx-auto mb-6' />
      </div>
      <hr />
    </div>
  )
}

export default About
