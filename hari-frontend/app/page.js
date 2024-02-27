import Link from 'next/link'
import React from 'react'
import Cover from '../public/Cover.jpeg'
import Image from 'next/image'
import Latest from '@/pages/Latest'


const page = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='absolute my-4 text-[#bfe0e2]'>
        <ul className='flex lg:space-x-20 md:space-x-20 space-x-4 cursor-pointer'>
          <Link href='/'><li className='hover:text-white/60'>Home</li></Link>
          <Link href='/Recipes'><li className='hover:text-white/60'>Recipes</li></Link>
          <Link href='/'><li className='hover:text-white/60'>About</li></Link>
          <Link href='/'><li className='hover:text-white/60'>Subscribe</li></Link>
        </ul>
      </div>
     <div> <Image
      src={Cover}
      alt='No Image Found' 
      className='w-[100%] lg:h-screen md:h-screen h-screen'/>
      </div>

   <div className="absolute text-[#f2f9f9] lg:text-3xl lg:flex hidden md:text-3xl lg:w-[50%] md:w-[60%] font-serif p-10 leading-loose lg:mt-[20%] md:mt-[50%] mt-[50%] lg:left-72 border-2 border-white rounded-xl justify-between items-center mx-10">
  
        <div>To get notifications about latest recipes please subscribe </div> <Link href='/' className='bg-[#3b757f] p-2'> Subscribe </Link> 
    </div>
    <Latest />

    </div>
  )
}

export default page