import React from 'react'
import instaLogo from '../assets/insta.png'
import gfgLogo from '../assets/gfg.png'
import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github.png'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  text-white py-10 px-5'>
      <div className='flex justify-center space-x-10'>
        <a href='https://www.insta.com/yourusername' target='_blank' rel='noreferrer'>
          <img src={instaLogo} alt='insta' className='h-6 w-6'/>
        </a>
        <a href='https://www.gfg.com/yourusername' target='_blank' rel='noreferrer'>
          <img src={gfgLogo} alt='gfg' className='h-6 w-6'/>
        </a>
        <a href='https://www.linkedin.com/in/yourusername' target='_blank' rel='noreferrer'>
          <img src={linkedinLogo} alt='LinkedIn' className='h-6 w-6'/>
        </a>
        <a href='https://www.github.com/yourusername' target='_blank' rel='noreferrer'>
          <img src={githubLogo} alt='GitHub' className='h-6 w-6'/>
        </a>
      </div>
      <div className='mt-5 text-center'>
        <h4>Made with<span></span> ❤️ by Indrani Som </h4>
      </div>
    </footer>
  )
}

export default Footer