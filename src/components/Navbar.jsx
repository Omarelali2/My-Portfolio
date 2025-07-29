import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"
import logo from "../assets/logos.png"
import logo1 from "../../public/logo.png"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        sticky ? "bg-black shadow-md" : "bg-transparent"
      } `}
    >
      <div className='md:w-full w-[100%] flex items-center justify-between px-4 md:px-6 py-3 md:py-4'>
        <div className='relative z-50'>
          <NavLink to='/' smooth={true} offset={0} duration={500}>
            <img
              src={sticky ? logo1 : logo}
              className='h-10 w-auto md:ml-10'
              alt='Logo'
            />
          </NavLink>
        </div>

        <ul className='hidden md:flex space-x-6 text-white font-medium'>
          <li>
            <Link
              to='about'
              smooth={true}
              offset={-150}
              duration={500}
              className='cursor-pointer hover:text-gray-600'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              smooth={true}
              offset={-100}
              duration={500}
              className='cursor-pointer hover:text-gray-600'
            >
              Skills
            </Link>
          </li>
          <li>
            <NavLink
              to='/AllProjects'
              className='cursor-pointer hover:text-gray-600'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              offset={-60}
              duration={500}
              className='cursor-pointer bg-white text-black px-4 py-2 rounded hover:text-white hover:bg-gray-700 duration-500'
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <ul className='md:hidden bg-white px-6 py-6 space-y-5 text-black font-semibold shadow-lg absolute top-full left-0 w-full z-40'>
          <li>
            <Link
              onClick={toggleMenu}
              to='skills'
              smooth={true}
              offset={-100}
              duration={500}
              className='block hover:text-red-600 transition'
            >
              Skills
            </Link>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to='/AllProjects'
              className='block hover:text-red-600 transition'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to='about'
              smooth={true}
              offset={-150}
              duration={500}
              className='block hover:text-red-600 transition'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to='contact'
              smooth={true}
              offset={-60}
              duration={500}
              className='block bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
