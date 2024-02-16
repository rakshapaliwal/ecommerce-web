import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";





function Contact() {
  return (
    <>
    {/* heading */}
<div className='flex justify-between gap-20 mt-5'>
      <p className='text-4xl font-bold ml-12  font-serif'>Get In Touch</p>
      <p className='text-4xl font-bold mr-40 font-serif'>Contact US</p>
      {/* <p className='text-4xl font-bold mr-6  font-serif'>Contact US</p> */}
</div>
     

    <div className=' ml-4'>
     {/* form */}

      <form className=' mt-5'>
      <p className='text-light ml-2 font-serif'>Fill up a from</p>
      <div className="mb-4 flex">
           
            <input
              type="text"
              id="name"
              name="name"
              className="w-1/2 px-3 py-2 mt-3 mr-20 border rounded-md focus:outline-none focus:border-primeColor"
              placeholder="Enter your name"
            />

            {/* contact us */}
            <div className='flex ml-20'>
            <MdEmail className='text-3xl' />
              <p className=' ml-5'>info@gmail.com</p>
            </div>
            

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.301758072646!2d72.99547457448004!3d26.251868088179304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c365cb5d90d%3A0x2ad7f35af09d6131!2sOpen%20Innovations%20Lab!5e0!3m2!1sen!2sin!4v1708079149005!5m2!1sen!2sin"   allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    */}
          </div>

          <div className="mb-4 flex">
           
            <input
              type="text"
              id="email"
              name="email"
              className="w-1/2 px-3 py-2 mt-3 mr-20 border rounded-md focus:outline-none focus:border-primeColor"
              placeholder="Enter your email"
            />

            {/* contact us */}
            <div className='flex ml-20'>
            <FaPhoneAlt className='text-3xl' />
            <p className=' ml-5'>(+91) 125845545</p>

            </div>
           

          </div>
          <div className="mb-4 flex">
           
            <input
              type="text"
              id="number"
              name="number"
              className="w-1/2 px-3 py-2 mt-3 mr-20 border rounded-md focus:outline-none focus:border-primeColor"
              placeholder="Enter your number"
            />
            <div className='flex ml-20'>
            <FaLocationDot className='text-3xl' />
            <p className=' ml-5'>CYB-I, STPI Cyber Park, RIICO Heavy Industrial Area,<br/>  Heavy Industrial Area Phase II, Jodhpur, Rajasthan 342003</p>
            </div>
           


          </div>
          <div className="mb-4 flex">
           
            <textarea
              type="text"
              id="message"
              name="message"
              className="w-1/2 px-3 py-2 mt-3 mr-20 border rounded-md focus:outline-none focus:border-primeColor"
              placeholder="Enter your message"
            />
            <div className='flex ml-20'>
            <IoGlobeSharp className='text-3xl mt-2' />
            <p className=' ml-5'>www.oilab.com</p>
            </div>
       
          </div>
          <button
            type="submit"
            className=" w-40 mb-5 bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
          >
            Submit
          </button>
      </form>
    </div>

  </>
  )
}

export default Contact
