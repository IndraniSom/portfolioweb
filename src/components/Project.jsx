import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {github} from '../assets';
import {linkedin} from '../assets';
import {play} from '../assets';

import {projects} from '../constants';
import { styles } from "../styles";
import {fadeIn,textVariant} from '../utils/motion'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Star from "./Star";
const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show on larger screens
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of slides to show on medium-sized screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Number of slides to show on small screens
        },
      },
    ],
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Slider>

    </div>

  );
};
const project = () => {
  return (
    <>
    
    <div id='project'>
    <div
      className={` min-h-screen xl: flex xl:flex flex-col px-10 gap-10 overflow-hidden`}
    ><motion.div variants={textVariant()}
    className='flex-[0.75] bg-black-100 p-8 rounded-2xl mt-16 ml-24'>
      <p className={`${styles.sectionSubText} `}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText}`}> MY Projects.</h2>
    </motion.div>
    <div className="flex flex-col">
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-2 ml-24 text-white text-[17px] max-w-3xl leading-[30px]"> 
     Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </motion.p>

      </div>
      <div className="mt-20 mb-6 flex felx-wrap gap-7 overflow-x-auto">
        {projects.map((project,index)=>(
          <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
      
      </div>
      
      </div>
      </>
  )
}
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  linkedin_code_link,
  live_link,
}) => {
  return (
    <div >
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-5 rounded-2xl sm:w-[360px] w-full ml-24 bg-white'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          

          
          
        </div>
        

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-white mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-white text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className='flex flex-row'>
        <div className=' flex flex-row'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className='flex flex-row'>
            <div
              onClick={() => window.open(linkedin_code_link, "_blank")}
              className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className='flex flex-row'>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={play}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          </div>
      </Tilt>
    </motion.div>
   
    </div>
  );
};


export default project;
