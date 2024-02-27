"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { LuArrowRightSquare } from "react-icons/lu";


const Latest = () => {
  const [data, SetData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:1337/api/latests?populate=deep');
        const responseData = response.data.data[0].attributes.recipes.data;
        SetData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextRecipes = () => {
    const nextIndex = currentIndex + 4;
    setCurrentIndex(nextIndex >= data.length ? 0 : nextIndex);
  };

  return (
    <div className="lg:flex hidden gap-6 absolute right-20 text-white bottom-4 items-center  ">
    {data.slice(currentIndex, currentIndex + 4).map((latests) => (
      <Link href="latest/[latestslug]" as={`latest/${latests.attributes.Slug}`}  key={latests.id} className='flex flex-col'> 
      <div> 
        <img
        src={`http://127.0.0.1:1337${latests.attributes.Image.data.attributes.url}`}
        alt="No Image Found" 
        className='w-52 h-52 rounded-xl hover:scale-110 duration-300'/>
      </div>
      <div className='flex justify-center'>
         {latests.attributes.Title}
      </div>
      <div>
        </div>

      </Link>
    ))}
      <LuArrowRightSquare
          size={40}
          onClick={handleNextRecipes}
          className='cursor-pointer'/>
  </div>
  
  );
};

export default Latest;
