import Header from '@/app/Header'
import Header2 from '@/app/Header2'
import React from 'react'
import '../app/globals.css'
import { useState } from 'react'
import axios from 'axios'

const Subscribe = () => {

  const [email, setEmail] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  const onChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') setEmail(value);
      if (name === 'Firstname') setFirstName(value);
      if (name === 'Lastname') setLastName(value);
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://127.0.0.1:1337/api/subscribers', {
            data :{
              FirstName,
              LastName,
              email
          }

          });
          alert('Thank you for Subscribing');
          setEmail('');
          setFirstName('');
          setLastName('');

          console.log(setEmail)
      } catch (error) {
          alert('Please enter valid details')
          console.error('Error submitting subscriber:', error);
      }
  }


  return (
    <div className='flex bg-[#bfe0e2]'>
      <div><Header /></div>
      <div className='w-[80%] flex flex-col items-center pt-40 space-y-10'>
      <div className=' text-4xl font-bold '>Subscriber Details</div>
            <form className='flex flex-col text-lg space-y-10 pb-36 mx-10 ' onSubmit={onSubmit}>
                <div>
                    <div>First Name:</div> <input type='text' name='Firstname' placeholder='First Name' value={FirstName} onChange={onChange} className='w-96 h-14 rounded-md px-4' />
                </div>
                <div>
                    <div>Last Name:</div> <input type='text' name='Lastname' placeholder='Last Name' value={LastName} onChange={onChange} className='w-96 h-14 rounded-md px-4' />
                </div>
                <div>
                    <div>Email address:</div> <input type='email' name='email' placeholder='Email address' value={email} onChange={onChange} className='w-96 h-14 rounded-md px-4' />
                </div>
                <div className='p-2 bg-[#FFA2A6] h-12 w-44 text-center flex justify-center rounded-2xl hover:text-white'>
                    <button type='submit'>Subscribe</button>
                </div>
            </form>
            </div>
      <div><Header2 /></div>
    </div>
  )
}

export default Subscribe