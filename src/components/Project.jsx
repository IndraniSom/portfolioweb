import React,{useRef} from 'react'

import {motion} from 'framer-motion';
import {github} from '../assets';
import {linkedin} from '../assets';
import {play} from '../assets';
import { SparklesCore } from './ui/sparkles';
import {projects} from '../constants';
import { styles } from "../styles";
import {fadeIn,textVariant} from '../utils/motion'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Star from "./Star";
import { PinContainer } from './ui/3d-pin';
import { HoverBorderGradient } from "./ui/Hover-bordergradient";
import { FiArrowRight } from 'react-icons/fi';
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
    <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Slider>

    </div>

  );
};
const project = () => {
  const containerRef = useRef(null);
  const scrollToNextCard = () => {
    if (containerRef.current) {
      // Adjust the value 300 based on the width of your cards + gap to scroll exactly to the next card
      containerRef.current.scrollLeft += 400;
    }
  };
  return (
    <>
    
    <div id='project'>
    <div
      className={` w-full min-h-screen xl: flex xl:flex flex-col px-2 md:px-10 gap-10 overflow-hidden pl-0 md:pl-20`}
    >
      <div className='pb-5 '> 
      {/* bg-paper bg-cover bg-no-repeat */}
      <motion.div variants={textVariant()}
    
    className='flex-[0.75] bg-transparent py-8 rounded-2xl mt-16 pl-10 '>
      <p className={`${styles.sectionSubText} `}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText}`}> MY Projects.</h2>
     
    </motion.div>
    <div className="flex flex-col">
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-2 pl-10 text-white dark:text-black-500 text-[17px] max-w-3xl leading-[30px]   "> 
     Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </motion.p>

      </div>
      </div>
      <div ref={containerRef} className=" h-[900px] relative z-10 flex felx-wrap gap-7 overflow-x-auto scrollbar-hide ">
        {projects.map((project,index)=>(
          <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
      <div className="flex justify-center items-center z-50 -mt-56 ">
      <HoverBorderGradient
        onClick={scrollToNextCard}
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-black-500 text-black dark:text-black-500 flex space-x-2 items-center justify-center"
      >
        Scroll Here to see more projects
        <FiArrowRight className="ml-2" />
        </HoverBorderGradient>
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
    
    <PinContainer
        title={live_link}
        href={live_link}
        
      >
        
  <div className='w-full h-[13rem]'><img src={image} alt={name} className="w-full h-full object-cover" /></div>
  <div className="flex basis-full w-full flex-col tracking-tight text-white dark:text-black-500 sm:basis-1/2 h-full justify-center px-5 ">
  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-[#FFFFEA] dark:text-white  pt-2">
    {name}
  </h3>
  <div className="text-base !m-0 !p-0 font-normal">
    <span className="text-black-500 dark:text-blackbg">
      {description}
              <br/>
              {/* <div className='font-extrabold text-2xl pt-5 text-black'>Tech stacks Used</div><br/>
              <div className=' flex flex-wrap gap-2 '>
                
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-black-500 text-[14px] font-sans text-xl font-bold ${tag.color}`}
            >
              • {tag.name}
            </p>
          ))}
        </div> */}
            </span>
            <div className='font-extrabold text-2xl pt-2 text-[#FFFFEA] dark:text-blackbg'>Links</div>
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
          </div>
          
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
        </div>
      </PinContainer>
   
   
  );
};


export default project;
