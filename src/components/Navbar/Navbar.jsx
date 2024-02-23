import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa';




const NavBar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  }

  // Dropdown button
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
    
  };






  return (
    
    <div className='text-primeColor font-bold flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-2xl  tracking-[5px] font-bold  text-primeColor'><Link to="/">ECOMMERCE</Link></h1>
      <ul className='hidden md:flex'>
      <li className='p-4 text-gray-400 hover:text-[#000000] transition duration-500 cursor-pointer'><Link to="/">Home</Link></li>

      {/* Categories with Dropdown */}
      <li className='relative'>
        <div className='flex items-center p-4 text-gray-400 hover:text-[#000] transition duration-500 cursor-pointer' onClick={handleDropdownToggle}>
          Categories
          <FaAngleDown className='ml-2' />
        </div>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <ul className='absolute mt-2 space-y-1 bg-white border rounded-md'>
            <li className='p-2 text-gray-600 hover:bg-gray-200'><Link to="/categiors/male">Male</Link></li>
            <li className='p-2 text-gray-600 hover:bg-gray-200'><Link to="/categiors/female">Female</Link></li>
            <li className='p-2 text-gray-600 hover:bg-gray-200'><Link to="/categiors/kids">Kids</Link></li>
            <li className='p-2 text-gray-600 hover:bg-gray-200'><Link to="/wishlistpage">Kids</Link></li>


            {/* Add more categories as needed */}
          </ul>
        )}
      </li>

      <li className='p-4 text-gray-400 hover:text-[#000] transition duration-500 cursor-pointer'><Link to="/orderdetails">Product</Link></li>
      <li className='p-4 text-gray-400 hover:text-[#000] transition duration-500 cursor-pointer'><Link to="/orderdetails">Orders</Link></li>
      <li className='p-4 text-gray-400 hover:text-[#000] transition duration-500 cursor-pointer'><Link to="/contact">Contact</Link></li>
      <li className='p-4 font-semibold whitespace-nowrap'>
        <button className='rounded-md border border-[#c4bfbf] hover:bg-[#000] hover:text-white p-4 py-3 mt-[-14px] transition duration-500 ease-out hover:ease-in text-gray-400'>
          <Link to="/login">Login / Sign Up</Link>
        </button>
       
      </li>
    </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div className={!nav ? 'fixed top-0 h-full w-[60%] left-[-100%] ease-in-out duration-700' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#06555b] backdrop-blur-sm bg-gradient-to-l from-[#00956630] to-[#00df9800] ease-in-out duration-700 '}>
        <ul className='pt-20' >
          <li className='p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>About</li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Contact</li>
          <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border border-[#00df9a] hover:bg-[#00df98f3] hover:text-gray-900 p-4 py-3 mt-[-14px]  transition duration-500 ease-out hover:ease-in'>Get Started</button></li>
          
        </ul>
      </div>
    </div>
  )
}

export default NavBar