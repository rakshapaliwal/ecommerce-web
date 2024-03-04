import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircleMinus } from "react-icons/fa6";


function Addcart() {
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
    <div className='p-4 md:p-8'>
      <div className='text-3xl font-bold font-serif mb-4'>Shopping Cart:</div>

      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col w-full md:w-1/2'>
          <img src='https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_4_a8583478-7568-4ece-8dd3-4f75c0d128a5.jpg?v=1707915475&width=823' width="150px" height="100px" className=' h-40 mb-4 md:mb-0' alt='product' />

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

        <div className='border p-4 mt-4 md:mt-0 md:w-1/2 md:ml-4'>
          <p className='text-lg font-semibold mb-2'>Price Details</p>
          <div className='flex justify-between mb-2'>
            <span>Price ({quantity} Items):</span>
            <span>₹{itemPrice * quantity}</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Discount:</span>
            <span className='text-green-500'>₹{discount}</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Total Amount:</span>
            <span>{totalAmount > 0 ? `₹${totalAmount}` : 'No discount applied'}</span>
          </div>
          <Link to='/checkout'>
            <button className='bg-black text-white p-2 hover:bg-black-600 w-50 mt-4' onClick={handleRemoveProduct}>PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Addcart;
