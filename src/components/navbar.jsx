import React from 'react'
import { NavLink,Link , useNavigate } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import '../Css/nav.css'

const navbar = () => {
  const navigate = useNavigate()
  const scrollElement = (ele) => {
    navigate('/')
    ele.current.scrollIntoView({behaviour: 'smooth'})
  }
  return (
    
 
  <nav>
  <NavLink to='/'>
    <div className='icon-container'>
      <IoHomeOutline />
      <div className='con'>Home</div>
    </div>
  </NavLink>
  <Link to="/#about">
    <div className='icon-container'>
      <FaRegUser />
      <div className='con'>About Me</div>
    </div>
  </Link>
  <NavLink to ='/Project'>
    <div className='icon-container'>
      <MdOutlineLibraryBooks />
      <div className='con'>My Projects</div>
    </div>
  </NavLink>
  <NavLink to ='/Contact'>
    <div className='icon-container'>
      <IoIosContact />
      <div className='con'>Contact Me</div>
    </div>
  </NavLink>
</nav>
  

  
  )
}

export default navbar
