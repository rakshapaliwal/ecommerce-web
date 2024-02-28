import React from 'react';



const Card = (props) => {
  const { image_url, title, description, payment, offer, off, size, iconUrl, iconUrl1, onAddToWishlist } = props;

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

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2 text-orange-500">{title}</h2>

        {/* Description */}
        <p className="text-gray-700 font-bold">{description}</p>

        {/* Pricing */}
        <div className='flex'>
          <p className='text-gray-400'>{payment}</p>
          <p className='text-red-400 line-through ml-2'>{offer}</p>
          <p className='text-green-400 ml-2 font-serif'>{off}</p>
        </div>

        {/* Size */}
        <div className=' flex'>
          <p className='text-gray-400'>{size}</p>
          <div className=' flex justify-end gap-3 text-xl text-gray-700 ml-[100px]'>
          <p>{iconUrl}</p>
          <p>{iconUrl1}</p>
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
