import React from 'react'
import 'animate.css'
import instaLogo from '../assets/insta.png'
import gfgLogo from '../assets/gfg.png'
import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github.png'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  text-white py-10 px-5 animate__animated animate__fadeInUp'>
      <div className='flex justify-center space-x-10'>
        <a href='https://instagram.com/404_coder_not_found?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={instaLogo} alt='insta' className='h-6 w-6'/>
        </a>
        <a href='https://auth.geeksforgeeks.org/user/indranik9zw' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={gfgLogo} alt='gfg' className='h-6 w-6'/>
        </a>
        <a href='https://www.linkedin.com/in/indrani-som-258498248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={linkedinLogo} alt='LinkedIn' className='h-6 w-6'/>
        </a>
        <a href='https://github.com/IndraniSom' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={githubLogo} alt='GitHub' className='h-6 w-6'/>
        </a>
      </div>
      <div className='mt-5 text-center'>
        <h4 className='animate__animated animate__pulse'>Made with<span></span> ❤️ by Indrani Som </h4>
      </div>
    </footer>
  )
}

export default Footer