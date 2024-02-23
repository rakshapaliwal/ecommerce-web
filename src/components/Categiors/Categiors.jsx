import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Card from '../Card/Card';





function Categiors() {

    const cardsData = [
        {
            imageUrl: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
            title: 'Male Products',
        },
        {
            imageUrl:' https://img.joomcdn.net/3f181fd074adaf4a3b4f04fe04da04a68ab882db_original.jpeg',
            title: 'Female Products',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg',
            title: 'Kids',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
            title: 'Electronis Items',
        },
    ];


    return (
        <>
            <div>
                <div className=' ml-3 flex'>
                    <Link to="/" className=' flex items-center'>Home <IoIosArrowForward /></Link>
                    <Link className='flex items-center'>My Account <IoIosArrowForward /></Link>
                    <Link className=' flex items-center'>Categiors </Link>
                </div>

                {/* card */}

                <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">

                    {cardsData.map((card, index) => (
                        <Card key={index} imageUrl={card.imageUrl} title={card.title} />
                    ))}

                </div>

            </div>
            


        </>

    )
}

export default Categiors
