import {React,useState} from 'react'
import { NavLink,Link , useNavigate } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Themetogglebutton from './Themetogglebutton';
import '../Css/nav.css'

const navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsActive(!isActive);
    // Apply the 3D transformation to each card
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.classList.toggle("show", isActive);
    });
  };

  
  return (
    <nav>
       <div className='hidden md:flex w-25 h-20 pl-1 md:pl-10 pt-[1rem] md:pt-[0.2rem] bg-[url("/logo.png")] dark:bg-[url("/whitelogo.png")] bg-no-repeat bg-contain bg-center' alt='logo'></div>
      <div className='flex pl-1 md:pl-40 '>
      <a href="/#home" className='text-white dark:text-black-500'>
      <div className='icon-container'>
        <IoHomeOutline />
        <div className='con'>Home</div>
      </div>
    </a>
      <a href="/#about" className='text-white dark:text-black-500' >
        <div className='icon-container'>
          <FaRegUser />
          <div className='con'>About Me</div>
        </div>
      </a>
    <a href='/#project' className='text-white dark:text-black-500'>
      <div className='icon-container'>
        <MdOutlineLibraryBooks />
        <div className='con'>My Projects</div>
      </div>
      </a>
      <a href='/#contact' className='text-white dark:text-black-500'>
      <div className='icon-container'>
        <IoIosContact />
        <div className='con'>Contact Me</div>
      </div>
      </a>
      </div>
      <div className=' pl-1 md:pl-40 pt-[1rem]'>
      <Themetogglebutton />
      </div>
   
    </nav>
  );
}

export default navbar
