import React from 'react'
import { NavLink,Link , useNavigate } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import '../Css/nav.css'

const navbar = () => {
  const navigate = useNavigate()
  const scrollElement = (ele) => {
    navigate('/')
    ele.current.scrollIntoView({behaviour: 'smooth'})
  }
  return (
    
  // Ekhane either ekta <a> or <button> use kore ekta onclick event generete kor then
  //oi scrollElement er function ta de
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
