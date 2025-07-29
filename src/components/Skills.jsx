import React from "react"

const skills = {
  Languages: ["JavaScript", "Java"],
  Tools: ["VSCode", "Postman", "Git & GitHub"],
  Frameworks: ["React", "Express"],
  Databases: ["MongoDB", "SQL"],
  Other: ["HTML", "CSS", "TailwindCSS", "Node.js"],
}

const SkillBox = ({ title, items }) => (
  <div className='border border-gray-600 w-full md:w-[300px]'>
    <h3 className='text-2xl border-b-2 p-2 border-black font-bold'>{title}</h3>
    <ul className='flex flex-wrap list-none gap-x-4 gap-y-2 text-gray-400 p-2 text-lg'>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)

const Skills = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='3000'
      className=' skills py-3 px-6 mb-8'
    >
      <div className='px-6 py-12 flex items-center text-black'>
        <h1 className='text-2xl font-bold mb-10 w-full text-black md:w-40'>
          # My Skills{" "}
        </h1>{" "}
        <hr className='border-t-3  md:ml-5 border-black w-44 mb-8' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <SkillBox title='Languages' items={skills.Languages} />
        <SkillBox title='Tools' items={skills.Tools} />
        <SkillBox title='Frameworks' items={skills.Frameworks} />
        <SkillBox title='Databases' items={skills.Databases} />
        <SkillBox title='Other' items={skills.Other} />
      </div>
    </div>
  )
}

export default Skills
