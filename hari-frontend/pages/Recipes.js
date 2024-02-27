import React, { useEffect, useState } from "react";
import Link from "next/link";
import '../app/globals.css'
import Logo from '../public/Logo.png'
import Image from "next/image";
import Search from "./Search";
import axios from "axios";
import { useRouter } from "next/router";

const Recipes = () => {

    const[data, setData] = useState([])
  
    const router = useRouter();

    useEffect(() =>{

        const fetchData = async () =>{

            try {
                const response = await axios.get('http://127.0.0.1:1337/api/recipes?populate=deep')

              
                const responseData = response.data.data

                setData(responseData)

               
            } catch (error) {
                
            }
        }
        fetchData()
    },[])
  return (
    <div className="bg-[#bfe0e2] min-h-screen max-h-full">
        <div className="bg-[#3b757f] flex items-center justify-between px-10 fixed w-screen">
        <div className="flex items-center text-white/50 gap-4">
           <Link href='/'> <Image
            src={Logo}
            alt="No Image Found"
            className="w-20 h-20" />
            </Link>
           
            <Link href='/' className="hover:text-white hover:scale-110 duration-300">Home</Link>

            <Link href='/Subscribe' className="bg-[#bfe0e2] p-2 rounded-xl text-black hover:scale-110 duration-500">Subscribe</Link>
           
        </div>
      <div className="relative">
        <ul className="flex space-x-10 text-white/50 font-semibold">
          <Link href='/Recipes'>
            <li className={`hover:text-white hover:scale-110 duration-300 ${router.pathname === '/Recipes' ? 'text-white' : ''}`}>Recipes</li>
            </Link>
          <Link href="/Tifins">
            <li className="hover:text-white hover:scale-110 duration-300">Tiffins</li>
          </Link>
          <Link href="/Fries">
            <li className="hover:text-white hover:scale-110 duration-300">Fry</li>
          </Link>
          <Link href="/Veg">
            <li className="hover:text-white hover:scale-110 duration-300">Veg Curries</li>
          </Link>
          <Link href="/Non-veg">
            <li className="hover:text-white hover:scale-110 duration-300">Non-veg</li>
          </Link>
          <Link href="/Chutney">
            <li className="hover:text-white hover:scale-110 duration-300">Chutney</li>
          </Link>
          <Link href="/Podulu">
            <li className="hover:text-white hover:scale-110 duration-300">Podulu</li>
          </Link>
          <Link href="/Sweets">
            <li className="hover:text-white hover:scale-110 duration-300">Sweets</li>
          </Link>
          <Link href="/Snack">
            <li className="hover:text-white hover:scale-110 duration-300">Snacks</li>
          </Link>
        </ul>
      </div>
      </div>
      <div >
        <div className="pt-20 flex justify-center"><Search/></div>
      </div>
      <div className="grid grid-cols-5">
        {data.map((recipe) =>(
             <Link href="Recipe/[recipeslug]" as={`Recipe/${recipe.attributes.Slug}`} key={recipe.id} className="mx-10 my-6" >
                <div className="w-full">
                    <img 
                    src={`http://127.0.0.1:1337${recipe.attributes.Image.data.attributes.url}`}
                    alt="No Image found"
                    className="h-40 w-60 rounded-xl hover:scale-110 duration-300"/>
                </div>
                <div className="flex justify-center">{recipe.attributes.Title}</div>
             </Link>

     
        ))}
       
      </div>
    </div>
  );
};

export default Recipes;
