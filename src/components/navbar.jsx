import React from 'react'

import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import '../Css/nav.css'

const navbar = () => {
  return (
    <Canvas className='bg-transparent p-0 m-0'>
      <Html>
        
    <nav>
  <a href='/'><IoHomeOutline /><div className='con'>Home</div></a >
  <a href='/about'><FaRegUser /><div className='con'>About Me</div></a >
    <a href ='/project'><MdOutlineLibraryBooks /><div className='con'>My Projects</div></a >
    <a href ='/contact'><IoIosContact /><div className='con'>ContactMe</div></a >
  </nav>
  
  </Html>
  </Canvas>   
  )
}

export default navbar
