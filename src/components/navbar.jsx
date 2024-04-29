import React from 'react'
import { NavLink,Link , useNavigate } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import '../Css/nav.css'

const navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <a href="/#home">
      <div className='icon-container'>
        <IoHomeOutline />
        <div className='con'>Home</div>
      </div>
    </a>
      <a href="/#about">
        <div className='icon-container'>
          <FaRegUser />
          <div className='con'>About Me</div>
        </div>
      </a>
    <a href='/#project'>
      <div className='icon-container'>
        <MdOutlineLibraryBooks />
        <div className='con'>My Projects</div>
      </div>
      </a>
      <a href='/#contact'>
      <div className='icon-container'>
        <IoIosContact />
        <div className='con'>Contact Me</div>
      </div>
      </a>
    </nav>
  );
}

export default navbar
