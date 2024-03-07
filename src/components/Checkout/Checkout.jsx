import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircleMinus } from "react-icons/fa6";


function Checkout() {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);


    const handleDeliveryAddressClick = () => {
        // Toggle the visibility of the form
        setIsFormVisible(!isFormVisible);
    };

    const handleOrderSummaryClick = () => {
        setShowOrderSummary(!showOrderSummary);
    };

    const [itemPrice, setItemPrice] = useState(200);
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(50);

    const totalAmount = (itemPrice * quantity) - discount;

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const handleRemoveProduct = () => {
        console.log('Product removed!');
    };

    return (
        <>
            <div className=' ml-3 mb-3 mt-3 flex'>
                <Link to="/" className=' flex items-center'>Cart <IoIosArrowForward /></Link>
                <Link className='flex items-center'>Information <IoIosArrowForward /></Link>
                <Link className='flex items-center'>Shipping <IoIosArrowForward /></Link>
                <Link className=' flex items-center'>Payment </Link>
            </div>

            {/*cart information  */}
            <button
                className="bg-gray-500 text-white p-2 mt-6 hover:bg-gray-500 h-11 ml-4 w-1/2 flex justify-start"
                onClick={handleDeliveryAddressClick}>
                <p className=' font-semibold text-md'>DELIVERY ADDRESS</p></button>


            {/* form */}
            {isFormVisible && (
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <p className=' font-mono text-gray-500 font-bold text-2xl flex ml-3'>INFORMATION :-</p>
                    <div className=' ml-3 mt-3'>

                        <form>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className=" w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className='my-4'>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className='my-4'>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    className="w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                    placeholder="Enter your number"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-40 bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
                            >SAVE
                            </button>

                            {/* SHIPPING */}

                            <div>
                                <div>
                                    <p className=' font-mono text-gray-500 font-bold text-2xl flex ml-3 mt-3'>SHIPPING :-</p>
                                </div>
                                <div className='my-4 flex gap-3'>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className=" px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="text"
                                        id="number"
                                        name="number"
                                        className=" px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="10-digit-mobile number"
                                    />

                                </div>
                                <div className='my-4 flex gap-3'>
                                    <input
                                        type="text"
                                        id="pincode"
                                        name="pincode"
                                        className=" px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="Pincode"
                                    />
                                    <input
                                        type="text"
                                        id="locality"
                                        name="locality"
                                        className="px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="Locality"
                                    />
                                </div>
                                <div className='my-4 gap-3'>
                                    <textarea
                                        type='text'
                                        id='message'
                                        name='message'
                                        className='w-96  px-3 py-2 md:mr-20 border rounded-md focus:outline-none focus:border-primeColor'
                                        placeholder='Address'
                                    />
                                </div>
                                <div className='my-4 flex gap-3'>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className=" px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="City/District/Town"
                                    />
                                    <select
                                        id="state"
                                        name="state"
                                        className="w-48 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                    >
                                        <option value="" disabled selected>Select State</option>
                                        <option value="state1">Rajasthan</option>
                                        <option value="state2">Utrakhand</option>
                                        <option value="state3">Haryana</option>
                                    </select>
                                </div>
                                <div className='my-4 flex gap-3'>
                                    <input
                                        type="text"
                                        id="landmark"
                                        name="landmark"
                                        className=" px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="Landmark (Optional)"
                                    />
                                    <input
                                        type="text"
                                        id="alternatenumber"
                                        name="alternatenumber"
                                        className="px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                                        placeholder="Alternate Phone (Optional)"
                                    />
                                </div>
                                <div>
                                    <p className=' ml-3 text-gray-500'>Address type</p>
                                </div>
                                <div className=' flex ml-4 mt-4 gap-4 text-gray-500 font-semibold'>
                                    <label>
                                        <input type="radio" name="addressType" value="option1" />
                                        Home (All day delivery)
                                    </label>
                                    <label>
                                        <input type="radio" name="addressType" value="option2" />
                                        Work (Delivery between 10 AM - 5 PM)
                                    </label>
                                </div>

                                <div className='flex my-3 gap-3'>
                                    <button
                                        type="submit"
                                        className=" w-64 bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
                                    >SAVE AND DELIVER HERE
                                    </button>
                                    <button
                                        type="submit"
                                        className=" w-64 bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
                                    >CANCEL
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )};

            <button
                className="bg-gray-500 text-white p-2 mt-4 hover:bg-gray-500 h-11 ml-4 w-1/2 flex justify-start"
                onClick={handleOrderSummaryClick}>
                <p className=' font-semibold text-md'>ORDER SUMMARY</p></button>
            {showOrderSummary && (
                <div className=' mx-5 my-5'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <img src='https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_4_a8583478-7568-4ece-8dd3-4f75c0d128a5.jpg?v=1707915475&width=823' width="100px" height="80px" className=' h-30 mb-4 md:mb-0' alt='product' />

                        <div className='flex justify-between items-center mb-2'>
                            <p className='text-gray-400 font-bold'>
                                U TURN Men Striped Casual Light Green, White Shirt<br /> Size: L <br />Seller: INTERNNATIOANL COTFAB <br />
                                <div className=' flex'>
                                    <span className='block mt-2'>₹ {itemPrice}</span>
                                    <span className='line-through text-red-300  font-mono block mt-2 ml-3'>₹ {discount}</span>
                                    <span className='text-green-500 font-serif block mt-1 ml-3'>10% off</span>
                                </div>

                            </p>

                            <div className='flex space-x-2'>
                                <button onClick={increaseQuantity}><FaPlusCircle /></button>

                                <input
                                    className='border p-2 w-12 text-center'
                                    type='number'
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                                <button onClick={decreaseQuantity}><FaCircleMinus /></button>

                            </div>
                        </div>

                        <div className='flex space-x-2'>
                            <button className='bg-black text-white p-2 hover:bg-black-600 mt-2 w-1/2'>SAVE FOR LATER</button>
                            <button className='bg-black text-white p-2 hover:bg-black-600 mt-2 w-1/2' onClick={handleRemoveProduct}>REMOVE</button>

                        </div>
                    </div>
                </div>
            )};

            <button
                className="bg-gray-500 text-white p-2 mt-6 hover:bg-gray-500 h-11 ml-4 w-1/2 flex justify-start">
                <p className=' font-semibold text-md'>PAYMENT OPTIONS</p></button>

            <div>
                <label className=' flex'>
                    <input type="radio" name="addressType" value="option1" className='ml-4'  />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqo1Kt6T0rrnQYWzGF9I2hlcO4J-dVtzAPDx3zMo7pTg&s' width={40} className=' ml-3 mt-3'/> 
                </label>
                <label className=' flex'>
                    <input type="radio" name="addressType" value="option1" className='ml-4'  />
                    <img src='https://avatars.githubusercontent.com/u/7713209?s=280&v=4' width={40} className=' ml-3 mt-3'/> 
                </label>
                <label className=' flex'>
                    <input type="radio" name="addressType" value="option1" className='ml-4'  />
                   <p className=' text-md font-semibold ml-3'>CASH ON </p>
                </label>
            </div>



            {/* payment */}

            <div className='flex flex-col mt-5'>

                {/* price box */}

                <div className="border p-6 mt-3 ml-auto w-full md:w-96">
                    <p className="text-lg font-semibold mb-2">Price Details</p>
                    <div className="flex justify-between mb-2">
                        <span>Price (10 Items) :-</span>
                        <span>$102.99</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Discount :-</span>
                        <span className='text-green-500'>$50.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Total Amount :-</span>
                        <span>-$200.00</span>
                    </div>
                    <button
                        className="bg-black text-white p-2 mt-4 hover:bg-black-600"
                    // onClick={handleAddToCart}
                    >SUBMIT</button>
                </div>

            </div>





        </>
    )
}

export default Checkout
