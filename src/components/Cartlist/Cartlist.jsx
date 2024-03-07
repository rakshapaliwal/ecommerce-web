import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircleMinus } from "react-icons/fa6";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cartlist({ items }) {
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


  const handleRemoveProduct = (cart_id) => {
    console.log('Removing product with cart_id:', cart_id);

    const requestData = {
      id: cart_id,
    };
  
    axios.post('http://192.168.29.59:3000/cart/remove', requestData)
    .then(response => {
      // Check if response status is success
      if (response.status === 200) {
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 3000,  
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        window.location.reload();
      } else {
        // Show error message in the toaster
        toast.error("Unexpected response from server", {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    })
    .catch(error => {
      // Show error message in the toaster
      if (error.response) {
        toast.error(error.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        toast.error("Something went wrong", {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.29.59:3000/cart/list');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='p-4 md:p-8'>
      <div className='text-3xl font-bold font-serif mb-4'>Shopping Cart:</div>

      {data.map((cartGroup, index) => (
        <div key={index}>

          {cartGroup.products.map((product) => (
            <div className='flex flex-col md:flex-row'>
              <div key={product._id} className='flex flex-col w-full md:w-1/2'>
                <img src={product.image_url} width="150px" height="100px" className=' h-40 mb-4 md:mb-0' alt='product' />

                <div className='flex justify-between items-center mb-2'>
                  <p className='text-gray-400 font-bold'>
                    {product.name}
                    <div className=' flex'>
                      <span className='block mt-2'>₹ {product.cost}</span>
                      <span className='line-through text-red-300  font-mono block mt-2 ml-3'>₹ {product.selling_price}</span>
                      <span className='text-green-500 font-serif block mt-1 ml-3'>{product.discount}</span>
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
                  <button className='bg-black text-white p-2 hover:bg-black-600 mt-2 w-1/2'  onClick={() => handleRemoveProduct(cartGroup.cart_id)}>REMOVE</button>

                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className='border p-4 mt-4 md:mt-0 md:w-1/2 md:ml-4' style={{ marginLeft: 'auto' }}>
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
          <button className='bg-black text-white p-2 hover:bg-black-600 w-50 mt-4'>PLACE ORDER</button>
        </Link>
      </div>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>



  );
}

export default Cartlist; 
