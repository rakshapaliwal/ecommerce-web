import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Card from '../Card/Card';
import axios from 'axios';




function Product() {

    // All images to show

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.29.59:3000/product/get');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [visibleProducts, setVisibleProducts] = useState(8); // Set the initial number of products to display
    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };







    return (
        <div>
            <div>
                <div className=' ml-3 flex'>
                    <Link to="/" className=' flex items-center'>Home <IoIosArrowForward /></Link>
                    <Link className='flex items-center'>My Account <IoIosArrowForward /></Link>
                    <Link className=' flex items-center'> Product </Link>
                </div>

                {/* Product */}
                {data.length > 0 ? (
                    <>
                        <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">
                            {data.slice(0, visibleProducts).map(product => (
                                <Card key={product._id} image_url={product.image_url} name={product.name} selling_price={product.selling_price} discount={product.discount} cost={product.cost} size={JSON.parse(product.size)} />
                            ))}
                        </div>
                        {visibleProducts < data.length && (
                            <div className=' flex justify-center'>
                                <button onClick={handleShowMore} className="bg-black text-white px-4 py-2 rounded-md mt-2 ml-8 mb-4">
                                    Show More
                                </button>
                            </div>

                        )}
                    </>
                ) : (
                    <p>Loading...</p>
                )}

            </div>
        </div>
    )
}

export default Product
