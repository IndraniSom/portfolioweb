import React from 'react'
import {motion} from 'framer-motion';
import { styles } from "../styles";
import {fadeIn,textVariant} from '../utils/motion'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Model from '../assets/me.png'
const Home = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Web Developer', ' Hackathon Enthusiast', 'Competitive Coder', 'Open Source Contributor', 'Student'],
    loop: true,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (

   <div id='home' className='w-full h-max items-center justify-center'>
    <motion.div variants={textVariant()}
    className='flex bg-black-100 p-8 rounded-2xl mt-16 items-center justify-center'>
      <div className='flex flex-row'>
      <div className='flex flex-col'>
      <p className={`${styles.sectionSubText} `}>Hi There</p>
      <h2 className={`${styles.sectionHeadText}`}> I am Indrani Som  </h2>
      
      <p className={styles.sectionSubText}>I am a <span className={styles.sectionSubText}>{text}<Cursor cursorColor='var(--highlight)' /></span></p>
      <div className='flex flex-row'>
      <a href="mailto:indranisomofficial@gmail.com"><button className='bg-black-100 text-white p-2 rounded-lg mt-4 bg-black-500 px-10'>Get in touch</button></a>
      <a href="src/assets/CV.pdf" download><button className='bg-black-100 text-white p-2 rounded-lg mt-4 ml-4 bg-black-500 px-10'>Download My CV</button></a>
      </div>
      </div>
      
      <img src={Model}/>
      </div>
     
    </motion.div>
   </div>
  )
}

export default Home