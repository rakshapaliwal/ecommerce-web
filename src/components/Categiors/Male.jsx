import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Card from '../Card/Card';


function Male() {

    const cardsData = [
        {
            image_url: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
            title: 'Shirts',
            description: 'Chambray Shirts Or Versatile Henleys.',
            payment: '$40.00',
            offer: '$15',
            off: '5 % off',
            size:  ' Size : S, M, L, XL',
        },
    ];


    return (
        <div>
            <div className=' ml-3 flex'>
                <Link to="/" className=' flex items-center'>Home <IoIosArrowForward /></Link>
                <Link className='flex items-center'>My Account <IoIosArrowForward /></Link>
                <Link className=' flex items-center'>Male Product </Link>
            </div>

            {/* main card */}


            <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">

                {cardsData.map((card, index) => (
                    <Card key={index} image_url={card.image_url} title={card.title} description={card.description} payment={card.payment} offer={card.offer} off={card.off} size={card.size} />
                ))}

            </div>

        </div>
    )
}

export default Male
