import React, { Suspense } from 'react'
import Model from '../assets/model.png'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { Link } from 'react-router-dom'
import { styles } from "../styles";
import { Canvas } from '@react-three/fiber';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { skills } from "../constants";
import {fadeIn,textVariant} from '../utils/motion'
import { Loader } from '@react-three/drei'
import {experiences} from '../constants';
import { Spotlight } from './ui/spotlight'
import Star from "./Star";
import Marquee from 'react-fast-marquee'
const about = () => {
  const slideIn = (direction = "left", type = "tween", duration = 0.2, delay = 1) => {
    return {
      initial: { x: direction === "left" ? -100 : 100, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { type: type, duration: duration, delay: delay } },
    };
  };
  return (
    <div id ='about' >
      <div className={` flex xl:flex-row w-full flex-col-reverse gap-2 md:gap-10  justify-center`}>
      <motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  initial="initial"
  animate="animate"
  className='flex-[0.75] bg-transparent p-8 rounded-2xl justify-center text-center'
>
       
            
          
          <div className='py-10 flex flex-col'>
         
        <h3 className={styles.sectionHeadText}>My skills</h3>
        
        <div className='w-full mt-16 flex flex-wrap md:gap-12 gap-10 justify-center mb-20'>
          {skills.map((skills) => (
            <div className='block-container w-20 h-20' key={skills.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skills.icon}
                  alt={skills.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
          
        </motion.div>
       
      </div>
      
      
    </div>
  )
}

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{background:'linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129))',color:'white'}}
    contentArrowStyle={{borderRight:'7px linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129))'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-white dark:text-black-500 text-[24px] font-bold'>{experience.title}</h3>
      <p>{experience.company_name}</p>
      <p>{experience.points}</p>
    </div>
  </VerticalTimelineElement>
)

export default about;
