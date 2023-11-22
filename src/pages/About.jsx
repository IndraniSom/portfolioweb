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
import { useTypewriter, Cursor} from 'react-simple-typewriter'


const about = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Web Developer', 'AI/ML Enthusiast', 'Competitive Coder', 'Open Source and Hackathon Enthusiast', 'Student'],
    loop: true,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <>
      <div className={`xl:mt-20 flex xl:flex-row w-full flex-col-reverse gap-10 overflow-hidden justify-center`}>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl ml-16 justify-center text-center'>
          <p className={styles.sectionSubText}>Hello I am <span className={styles.sectionHeadText}>Indrani Som</span></p>
          <p className={styles.sectionSubText}>I am a <span className={styles.sectionSubText}>{text}<Cursor cursorColor='var(--highlight)' /></span></p>
          <div className='py-10 flex flex-col'>
        <h3 className={styles.sectionHeadText}>My skills</h3>

        <div className='mt-16 flex flex-wrap gap-12 justify-center'>
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
          <h3 className={styles.sectionHeadText}>My Journey</h3>
          <div className="w-full  mt-20">
            <VerticalTimeline>
              {experiences.map((experience, index) => (<ExperienceCard key={index} experience={experience} />))}
            </VerticalTimeline>
          </div>
        </motion.div>
        {/* <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='flex-[0.75] align-right'
        >
          // <img src={Model} alt='Model' className='w-full rounded-2xl h-auto' />
        </motion.div> */}
      </div>
      <div className='flex justify-center items-center flex-col text-white'>
        <p className={styles.sectionHeadText}>Have a project in mind?</p>
        <h3 className={styles.sectionHeadText}>Let's Build something together</h3>
        <Link to="/contact" className="px-2 py-1 text-sm bg-blue-500 text-white rounded w-44 mb-9 mt-9 text-center">Let's Talk</Link>
      </div>
    </>
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
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p>{experience.company_name}</p>
      <p>{experience.points}</p>
    </div>
  </VerticalTimelineElement>
)

export default about
