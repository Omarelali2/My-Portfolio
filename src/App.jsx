import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

import Home from "./pages/Home"
import AllProjects from "./pages/AllProjects"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true      
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllProjects' element={<AllProjects />} />
      </Routes>
    </div>
  )
}

export default App
