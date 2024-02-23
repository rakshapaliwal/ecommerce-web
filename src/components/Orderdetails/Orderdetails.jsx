import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";




function Orderdetails() {
  return (
    <div>
      <div className=' ml-3 flex'>
        <Link to= "/" className=' flex items-center'>Home <IoIosArrowForward /></Link>
        <Link className='flex items-center'>My Account <IoIosArrowForward /></Link>
        <Link className=' flex items-center'>My Orders </Link>
      </div>

      {/* search bar */}

      <div className=' flex items-center justify-center'>
      <input
              type="text"
              id="name"
              name="name"
              className="w-1/2 px-3 py-2 mt-3 border focus:outline-none focus:border-primeColor"
              placeholder="Search Your Orders Here"
            />
        <button
              className=" bg-black text-white p-2 mt-3 hover:bg-black-600"
            // onClick={handleAddToCart}
            >Search Orders</button>
      </div>

      {/* order details */}
      <div className=' flex ml-[12%] mr-[5%] items-center border shadow mt-3 mb-3 cursor-pointer'>
      <div className="flex mb-2 ml-3">
      <img src='https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_4_a8583478-7568-4ece-8dd3-4f75c0d128a5.jpg?v=1707915475&width=823' className=' w-20 h-20 mt-4'></img>
      </div>
      <div className=' ml-[8%]'>
        <span>
          Just Fab Casual Solid Women Green Shirt
        </span>
        <div>
        <span className=' text-gray-400'>
          Color : Green Size : L
        </span>
      </div>
    </div>
       <div className=' ml-[8%] mb-5'>
        <span>$20.00</span>
      </div>
      <div className=' ml-[8%] mt-3'>
        <span className='flex items-center gap-2'>
        <GoDotFill />Delivered on Jun 23, 2024
        </span>
        <div>
        <span className=' text-gray-400'>
          Your item has been delivered        
        </span>
      </div>
      <div>
        <span className=' text-blue-400 flex items-center gap-2'>
        <FaStar /><Link>Rate & Review Product</Link>       
        </span>
      </div>
      </div>
      </div>
     
{/* Second Item */}

      <div className=' flex ml-[12%] mr-[5%] items-center border shadow mt-3 mb-3 cursor-pointer'>
      <div className="flex mb-2 ml-3">
      <img src='https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_4_a8583478-7568-4ece-8dd3-4f75c0d128a5.jpg?v=1707915475&width=823' className=' w-20 h-20 mt-4'></img>
      </div>
      <div className=' ml-[8%]'>
        <span>
          Just Fab Casual Solid Women Green Shirt
        </span>
        <div>
        <span className=' text-gray-400'>
          Color : Green Size : L
        </span>
      </div>
    </div>
       <div className=' ml-[8%] mb-5'>
        <span>$20.00</span>
      </div>
      <div className=' ml-[8%] mt-3'>
        <span className='flex items-center gap-2'>
        <GoDotFill />Delivered on Jun 23, 2024
        </span>
        <div>
        <span className=' text-gray-400'>
          Your item has been delivered        
        </span>
      </div>
      <div>
        <span className=' text-blue-400 flex items-center gap-2'>
        <FaStar /><Link>Rate & Review Product</Link>       
        </span>
      </div>
      </div>
      </div>
     

    </div>
      
  )
}

export default Orderdetails
