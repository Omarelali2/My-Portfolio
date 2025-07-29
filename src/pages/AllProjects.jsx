import React from "react"
import Navbar from "../components/Navbar"
import Projectors from "../components/projects"
const AllProjects = () => {
  return (
    <div className='bg-gray-500 shadow-lg py-4'>
      <Navbar  />
      <br />
      <br />
      <Projectors />
    </div>
  )
}

export default AllProjects
