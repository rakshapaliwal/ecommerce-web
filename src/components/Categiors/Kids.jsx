import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Card from '../Card/Card';

function Kids() {

    const cardsData = [
        {
            imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/SN/PU/NA/3769275/whatsapp-image-2022-12-24-at-9-51-01-am-500x500.jpeg',
            title: 'Kids Pent',
            description: ' Pants and Trousers',
            payment: '$40.00',
            offer: '$15',
            off: '5 % off',
            size: ' Size : S, M, L, XL',
        },

       
    ];



    return (
        <>
            <div className=' ml-3 flex'>
                <Link to="/" className=' flex items-center'>Home <IoIosArrowForward /></Link>
                <Link className='flex items-center'>My Account <IoIosArrowForward /></Link>
                <Link  className=' flex items-center'>Kids Product </Link>
            </div>

            <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">

                {cardsData.map((card, index) => (
                    <Card key={index} imageUrl={card.imageUrl} title={card.title} description={card.description} payment={card.payment} offer={card.offer} off={card.off} size={card.size} />
                ))}
                
               

            </div>

            

        </>
    )
}

export default Kids
