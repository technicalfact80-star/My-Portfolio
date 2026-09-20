import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        {/* Centered Dynamic Logo */}
        <div className='w-max mx-auto mb-4'>
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            width={120}
            height={40}
            priority
            className="w-28 sm:w-32 cursor-pointer object-contain"
          />
        </div>

        {/* Email with Dark Mode Icon & Colors */}
        <div className='w-max flex items-center gap-2 mx-auto text-gray-600 dark:text-white/80 text-sm'>
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt='mail' 
            width={24} 
            height={24} 
            className='w-5'
          />
          technicalfact80@gmail.com
        </div> 
      </div>

      {/* Bottom Bar */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-white/10 mx-[10%] mt-12 py-6 text-sm text-gray-500 dark:text-white/60'>
        <p>© Sangam Verma 2026. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-8 mt-4 sm:mt-0'>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/technicalfact80-star' className='hover:text-black dark:hover:text-white transition-colors'>
              GitHub
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/-sangam-verma-/' className='hover:text-black dark:hover:text-white transition-colors'>
              LinkedIn
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://twitter.com' className='hover:text-black dark:hover:text-white transition-colors'>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer