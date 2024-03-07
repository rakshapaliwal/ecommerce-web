import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = (props) => {

  const handleAddToCart = (id) => {
    // Update state with product ID
    setProductId(id);
    console.log(id);
    // Perform other actions, e.g., navigate to a new URL
    window.location.href = `/productdetails/${id}`;
  };
 

  const { image_url, name, selling_price, discount, cost, size, cartIcon, heartIcon, onAddToWishlist } = props;

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">


      {/* Image */}
      <img
        className="object-cover w-full h-48"
        src={image_url}
        alt="Card Image"
        onClick={onAddToWishlist}
      />

      {/* Content */}
      <div className="p-4">


        {/* Description */}
        <p className="text-gray-700 font-bold">{name}</p>

        {/* Title */}
        {/* <h2 className="text-xl font-semibold mb-2 text-orange-500">{selling_price}</h2> */}

        {/* Pricing */}
        <div className='flex'>
          <p className='text-gray-400'> <span>₹</span> {selling_price}</p>
          <p className='text-red-400 line-through ml-2'> <span>₹</span> {cost}</p>
          <p className='text-green-400 ml-2 font-serif'><span>₹</span> {discount} % off</p>
        </div>

        {/* Size */}
        <div className=' flex'>
          <p className='text-gray-400'>  {size}</p>
          <div className=' flex justify-end gap-3 text-xl text-gray-700 ml-[100px]'>
            <p className="cursor-pointer">
              {cartIcon}
              </p>
            <p>{heartIcon}</p>
          </div>



          {/* Icon */}
          {/* <p className='text-gray-300 text-2xl flex ml-[80%]  md:left-1/5 lg:left-1/4 xl:left-1/5 2xl:left-1/5'> */}
          {/* </p> */}

        </div>

      </div>
    </div>
  );
};

export default Card;
