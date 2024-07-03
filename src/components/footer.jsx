import React from 'react'
import 'animate.css'
import instaLogo from '../assets/insta.png'
import gfgLogo from '../assets/gfg.png'
import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github.png'
import leetcodeLogo from '../assets/leetcode.png'
import codechefLogo from '../assets/codechef.png'
import hackerrankLogo from '../assets/hackerrank.png'
const Footer = () => {
  return (
    <footer className='bg-green text-white py-10 px-5 animate__animated animate__fadeInUp'>
      <div className='flex justify-center space-x-10 '>
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
        <a href='https://www.codechef.com/users/indrani0' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={codechefLogo} alt='Codechef' className='h-6 w-6'/>
        </a>
        <a href='https://leetcode.com/indrani0/' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={leetcodeLogo} alt='Leetcode' className='h-6 w-6'/>
        </a>
        <a href='https://www.hackerrank.com/profile/indranisom39' target='_blank' rel='noreferrer' className='animate__animated animate__bounce'>
          <img src={hackerrankLogo} alt='Hackedrrank' className='h-6 w-6'/>
        </a>
      </div>
      <div className='mt-5 text-center font-semibold'>
        <h4 className='animate__animated animate__pulse'>Connect with<span></span> Me </h4>
      </div>
      <div className='mt-5 text-center font-semibold'>
        <h4 className='animate__animated animate__pulse '>Made with<span></span> ❤️ by Indrani Som </h4>
      </div>
    </footer>
  )
}

export default Footer