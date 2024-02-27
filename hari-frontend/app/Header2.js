import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF, FaYoutube} from 'react-icons/fa'
import Link from 'next/link'

const Header2 = () => {
    return (
      <div className='bg-[#3b757f] lg:flex lg:flex-col md:hidden hidden  cursor-pointer items-center justify-center gap-32 w-16 h-screen'>
        <Link 
        href ='https://www.instagram.com/hariscookbook/?hl=en'
        target='_blank'>
          <AiOutlineInstagram 
          size={30}
          className='text-white hover:text-pink-500' />
        </Link>

          <Link 
          href='https://www.facebook.com/hariscookbook/'
          target='_blank'>
          <FaFacebookF 
          size={30}
          className='text-white hover:text-blue-700' />
          </Link>
          <Link 
          href='https://www.youtube.com/@hariscookbook'
          target="_blank">
          <FaYoutube 
          size={30}
          className='text-white hover:text-red-700' />
          </Link>
          </div>
    )
}

export default Header2