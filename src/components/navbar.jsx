import React from 'react'
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>IS</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-white" : "text-purple-600" }>
          About
        </NavLink>
        <NavLink to='/project' className={({ isActive }) => isActive ? "text-white" : "text-purple-600"}>
          MyProjects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-white" : "text-purple-600"}>
          Contact Me
        </NavLink>
        </nav>
    </header>
  )
}

export default navbar
