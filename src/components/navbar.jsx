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
  <a href='src\pages\Home.jsx'><IoHomeOutline /><div className='con'>Home</div></a >
  <a href='src\pages\About.jsx'><FaRegUser /><div className='con'>About Me</div></a >
    <a href ='src\pages\Project.jsx'><MdOutlineLibraryBooks /><div className='con'>My Projects</div></a >
    <a href ='src\pages\Contact.jsx'><IoIosContact /><div className='con'>ContactMe</div></a >
  </nav>
  
  </Html>
  </Canvas>   
  )
}

export default navbar
