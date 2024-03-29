import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import Card from '../Card/Card';


function Female() {

    const cardsData = [
        {
            image_url: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
            description: 'Women Red Heal',
            payment: '$40.00',
            offer: '$15',
            off: '5 % off',
            size:  ' Size : 3, 4, 5, 6',
            // iconUrl: <FaHeart /> ,
        },
    ];



  return (
<>
<div>
            <div className=' ml-3 flex'>
                <Link to="/" className=' flex items-center'>Home <IoIosArrowForward /></Link>
                <Link className='flex items-center'>My Account <IoIosArrowForward /></Link>
                <Link className=' flex items-center'>Female Product </Link>
            </div>

            {/* main card */}


            <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">

                {cardsData.map((card, index) => (
                    <Card key={index} image_url={card.image_url} title={card.title} description={card.description} payment={card.payment} offer={card.offer} off={card.off} size={card.size} iconUrl={card.iconUrl} />
                ))}

            </div>

        </div>


</>



   
  )
}

export default Female
