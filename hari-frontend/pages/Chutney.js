import React, { useEffect, useState } from "react";
import Link from "next/link";
import '../app/globals.css'
import Logo from '../public/Logo.png'
import Image from "next/image";
import Search from "./Search";
import axios from "axios";

const chutneys = () => {

    const[data, setData] = useState([])

    useEffect(() =>{

        const fetchData = async () =>{

            try {
                const response = await axios.get('http://127.0.0.1:1337/api/chutneys?populate=deep')

              
                const responseData =  response.data.data[0].attributes.recipes.data;

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
            <Image
            src={Logo}
            alt="No Image Found"
            className="w-20 h-20" />
            <Link href='/' className="hover:text-white hover:scale-110">Home</Link>
    
        </div>
      <div>
        <ul className="flex space-x-10 text-white/50 font-semibold">
          <Link href='/Recipes'>
            <li className="hover:text-white hover:scale-110">Recipes</li>
            </Link>
          <Link href="/Tifins">
            <li className="hover:text-white hover:scale-110">Tiffins</li>
          </Link>
          <Link href="/Fries">
            <li className="hover:text-white hover:scale-110">Fry</li>
          </Link>
          <Link href="/Veg">
            <li className="hover:text-white hover:scale-110">Veg Curries</li>
          </Link>
          <Link href="/Non-veg">
            <li className="hover:text-white hover:scale-110">Non-veg</li>
          </Link>
          <Link href="/Chutney">
            <li className="hover:text-white hover:scale-110">Chutney</li>
          </Link>
          <Link href="/Podulu">
            <li className="hover:text-white hover:scale-110">Podulu</li>
          </Link>
          <Link href="/Sweets">
            <li className="hover:text-white hover:scale-110">Sweets</li>
          </Link>
          <Link href="/Snack">
            <li className="hover:text-white hover:scale-110">Snacks</li>
          </Link>
        </ul>
      </div>
      </div>
      <div >
        <div className="pt-20  flex justify-center"><Search/></div>
      </div>
      <div className="grid grid-cols-5">
        {data.map((chutney) =>(
             <Link href="Chutney/[chutneyslug]" as={`Chutney/${chutney.attributes.Slug}`} key={chutney.id} className="mx-10 my-6" >
                <div className="w-full">
                    <img 
                    src={`http://127.0.0.1:1337${chutney.attributes.Image.data.attributes.url}`}
                    alt="No Image found"
                    className="h-40 w-60 rounded-xl hover:scale-110 duration-300"/>
                </div>
                <div className="flex justify-center">{chutney.attributes.Title}</div>
             </Link>

     
        ))}
       
      </div>
    </div>
  );
};

export default chutneys;