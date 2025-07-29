import React from "react"
import Projects from "../components/projects"
import Navbar from "../components/Navbar"

const AllProjects = () => {
  return (
    <div className='bg-gray-500 shadow-lg py-4'>
      <Navbar  />
      <br />
      <br />
      <Projects />
    </div>
  )
}

export default AllProjects
