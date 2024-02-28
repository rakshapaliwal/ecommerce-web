import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

import { IoGlobeSharp } from 'react-icons/io5';

function Contact() {
  return (
    <>
      {/* heading */}
      <div className='flex flex-col md:flex-row justify-around gap-4 md:gap-20 mt-5'>
        <p className='text-4xl font-bold ml-2 md:ml-12 font-serif'>Get In Touch</p>
        <p className='text-4xl font-bold mr-2 md:mr-40 font-serif'>Contact US</p>
      </div>

      <div className='ml-4'>
        {/* form */}
        <form className='mt-5'>
          <p className='text-light ml-2 font-serif'>Fill up a form</p>
          <div className='mb-4 flex flex-col md:flex-row'>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none focus:border-primeColor'
              placeholder='Enter your name'
            />
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <MdEmail className='text-3xl' />
              <p className='ml-2 md:ml-5'>info@gmail.com</p>
            </div>
          </div>

          <div className='mb-4 flex flex-col md:flex-row'>
            <input
              type='text'
              id='email'
              name='email'
              className='w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none focus:border-primeColor'
              placeholder='Enter your email'
            />
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <FaPhoneAlt className='text-3xl' />
              <p className='ml-2 md:ml-5'>(+91) 125845545</p>
            </div>
          </div>

          <div className='mb-4 flex flex-col md:flex-row'>
            <input
              type='text'
              id='number'
              name='number'
              className='w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none focus:border-primeColor'
              placeholder='Enter your number'
            />
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <FaLocationDot className='text-3xl' />
              <p className='ml-2 md:ml-5'>
                CYB-I, STPI Cyber Park, RIICO Heavy Industrial Area,
                <br /> Heavy Industrial Area Phase II, Jodhpur, Rajasthan 342003
              </p>
            </div>
          </div>

          <div className='mb-4 flex flex-col md:flex-row'>
            <textarea
              type='text'
              id='message'
              name='message'
              className='w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none focus:border-primeColor'
              placeholder='Enter your message'
            />
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <IoGlobeSharp className='text-3xl mt-2' />
              <p className='ml-2 md:ml-5'>www.oilab.com</p>
            </div>
          </div>

          <button
            type='submit'
            className='w-full md:w-40 mb-5 bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
