import React from 'react';

const Card = (props) => {
  const { imageUrl, title, description, payment, offer, off, size, iconUrl } = props;


  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-md overflow-hidden cursor-pointer">
      <p className='text-gray-300 text-2xl flex absolute md:ml-[19.5%] md:sm-[19.5%] md:xl-[19.5%] md:2xl-[19.5%]'>{iconUrl}</p>

      <img
        className="object-cover w-full h-48"
        src={imageUrl}
        alt="Card Image"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-orange-500">{title}</h2>
        <p className="text-gray-700 font-bold">{description}</p>
        <div className='flex'>
        <p className='text-gray-400'>{payment}</p>
        <p className='text-red-400 line-through ml-2'>{offer}</p>
        <p className='text-green-400 ml-2 font-serif'>{off}</p>
        </div>
        <div>
        <p className='text-gray-400'>{size}</p>

        </div>
      </div>
    </div>
  );
};

export default Card;
