import React from 'react'
import Model from '../assets/about.png'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

import { styles } from "../styles";
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div className='felx flex-row'>
    <div
    className={`bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 xl: flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='mt-20 ml-24 flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Hello I am </p>
      <h3 className={styles.sectionHeadText}>Indrani Som</h3>
      </motion.div>
      
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
<img src={Model} alt='Connect Image' className='w-full h-auto' />
      </div>
    </div>
    </div>
  )
}

export default About
