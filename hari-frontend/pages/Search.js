"use client"
import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import axios from 'axios';
import Link from 'next/link';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:1337/api/recipes?populate=deep'
        );
        const responseData = response.data.data;
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 0) {
      const query = event.target.value.toLowerCase();
      setSuggestions(
        data
          .filter((recipe) =>
            recipe.attributes.Title.toLowerCase().includes(query)
          )
      );
    } else {
      setSuggestions([]);
    }
  };
  

  return (
    <div className=" sticky flex items-center justify-center my-2 gap-2">
      <div className="">
        <input
          type="text"
          placeholder="search your recipe here"
          className="p-4 lg:w-[500px] md:w-[500px] w-40 h-12 rounded-lg"
          value={searchTerm}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
  <div className="absolute top-full lg:w-[500px] flex flex-col bg-white/70 border border-gray-300 rounded-b-lg shadow-md lg:text-lg text-[10px]">
    {suggestions.map((suggestion, i) => (
      <Link
        href="/Recipe/[recipeslug]"
        as={`/Recipe/${suggestion.attributes.Slug}`}
        key={i}
        className="p-2 cursor-pointer relative"
      >
        {suggestion.attributes.Title}
      </Link>
    ))}
  </div>
)}
      </div>
      <div>
        <IoSearchSharp
          size={25}
          className="hover:text-[#FFA2A6] cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default Search;