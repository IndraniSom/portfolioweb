import React from 'react'
import {motion} from 'framer-motion';
import { styles } from "../styles";
import {fadeIn,textVariant} from '../utils/motion'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Model from '../assets/me.png'
import Marquee from "react-fast-marquee";
import Navbar from './navbar';
import { SparklesCore } from './ui/sparkles';
import { FlipWords } from './ui/flip-words';

const Home = () => {
  
    const words =  ['Full Stack Web Developer', ' Hackathon Enthusiast', 'Competitive  Coder', 'Open Source Contributor'];
    
  return (
    <>
   <div id='home' className='w-full bg-no-repeat max-h-screen items-center justify-center'>
    
    <motion.div variants={textVariant()}
    className='flex flex-col pb-0 rounded-2xl pt-[2rem]'>
      <div className='flex flex-row items-center justify-center '>
        <div className='items-start justify-start'>
    <img src="/homeme.png" alt="model" className='hidden md:flex w-100 h-100'/>
    </div>
      <div className='flex flex-col items-end justify-end pt-9 md:px-20 px-10 '>
      <p className="text-[#131842] text-3xl md:text-7xl font-dreamavenue font-semibold">HELLO THERE👋<br/> I AM INDRANI</p>
      {/* <h2 className="text-white text-8xl font-dreamavenue font-semibold"> I am Indrani Som  </h2> */}
      
      {/* <div className='flex font-dreamavenue2 text-2xl '><p className="text-white text-2xl font-dreamavenue2 font-normal pr-64">I am a </p> <FlipWords className="text-white" words={words} /></div> */}
      <div className='flex flex-row pr-0 md:pr-60 gap-2'>
      <a href="mailto:indranisomofficial@gmail.com"><button className=' text-black-500 p-1.5 md:p-3 rounded-md mt-4 bg-green '>Get in touch</button></a>
      <a href="src/assets/Resume.pdf" download><button className=' text-black-500 p-1.5 md:p-3 rounded-md mt-4 ml-4 bg-green '>Download Resume</button></a>
      </div>
      </div>
      
      
      </div>
      
      
    </motion.div>
    
   </div>
   
   </>
  )
}

export default Home