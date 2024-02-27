import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";



const Header = () => {



  return (
   
    <div className=" bg-[#3b757f] lg:w-80 md:w-80 w-56 h-screen">
      <div>
        <Image 
        src={Logo}
        alt="No Logo Found"
        />
      </div>
      <div className="flex flex-col items-center text-xl lg:mt-10 md:mt-56  text-white/80">
        <ul className="">
            <Link href='/'><li className="lg:my-4 md:my-10 my-14 lg:m-0 md:m-0 m-4 hover:text-white" >Home</li></Link>
            <Link href='/Recipes'><li className="lg:my-4 md:my-10 my-14 lg:m-0 md:m-0 m-4 hover:text-white">Recipes</li></Link>
            <Link href='/About'><li className="lg:my-4 md:my-10 my-14 lg:m-0 md:m-0 m-4 hover:text-white">About</li></Link>
            <Link href='/Subscribe'><li className="lg:my-4 md:my-10 my-14 lg:m-0 md:m-0 m-4 hover:text-white">Subscribe</li></Link>
        </ul>
      </div>

      <div className="lg:flex lg:m-20 md:m-10 md:mt-64 m-6 gap-4 cursor-pointer">
        <Link
         href='https://www.instagram.com/hariscookbook/?hl=en'
         target="_blank">
            <AiOutlineInstagram
            size={30}
            className="text-white hover:text-pink-500 md:my-6 lg:my-0 my-4" />
            </Link>
            <Link 
            href='https://www.facebook.com/hariscookbook/'
            target="_blank">
                <FaFacebookF 
                size={30}
                className="text-white hover:text-blue-700 md:my-6 lg:my-0 my-4"/>
            </Link>
            <Link
            href='https://www.youtube.com/@hariscookbook'
            target="_blank">
            <FaYoutube
            size={30}
            className="text-white hover:text-red-600 md:my-6 lg:my-0 my-4"/>
            </Link>
        
      </div>

      <div className="text-white lg:flex hidden justify-center ">&copy; Created with Love By Bharat</div>

    </div>
  );
};

export default Header;
