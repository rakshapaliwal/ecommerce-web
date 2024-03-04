import React, { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeSharp } from 'react-icons/io5';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

  const [validationErrors, setValidationErrors] = useState({});


  // API calling for a form 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    message: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiResponse = {
      statusCode: 401,
      errors: {
        mobile_number: "Phone number should contain at least 10 digits",
      },
    };

    if (apiResponse.statusCode === 401 && apiResponse.errors) {
      // Update the state with validation errors
      setValidationErrors(apiResponse.errors);
    } else {
      // Reset validation errors
      setValidationErrors({});

      // Proceed with the rest of your form submission logic
      // ...
    }

    axios.post('http://192.168.29.59:3000/contact', formData)
      .then(response => {
        // Show success message in the toaster
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 3000, // milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch(error => {
        // Show error message in the toaster
        toast.error(error.response.data.errors, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
    setFormData({
      name: '',
      email: '',
      mobile_number: '',
      message: '',
    });
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-around gap-4 md:gap-20 mt-5'>
        <p className='text-4xl font-bold ml-2 md:ml-12 font-serif'>Get In Touch</p>
        <p className='text-4xl font-bold mr-2 md:mr-40 font-serif'>Contact US</p>
      </div>

      <div className='ml-4'>
      
        <form className='mt-5' onSubmit={handleSubmit}>
          <p className='text-light ml-2 font-serif'>Fill up a form</p>
          <div className='mb-4 flex flex-col md:flex-row'>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none ${validationErrors.name ? 'border-red-500' : 'focus:border-primeColor'
                }`}
              placeholder='Enter your name' required
            />
            {validationErrors.name && (
              <p className="text-red-500 text-sm">{validationErrors.name}</p>
            )}
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <MdEmail className='text-3xl' />
              <p className='ml-2 md:ml-5'>info@gmail.com</p>
            </div>
          </div>

          <div className='mb-4 flex flex-col md:flex-row'>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none ${validationErrors.email ? 'border-red-500' : 'focus:border-primeColor'
            }`}
            placeholder='Enter your email' required
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm">{validationErrors.email}</p>
            )}
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <FaPhoneAlt className='text-3xl' />
              <p className='ml-2 md:ml-5'>(+91) 125845545</p>
            </div>
          </div>

          <div className='mb-4 flex flex-col md:flex-row'>
            <input
              type='text'
              id='number'
              name='mobile_number'
              value={formData.mobile_number}
              onChange={handleInputChange}
              className={`w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none ${validationErrors.mobile_number ? 'border-red-500' : 'focus:border-primeColor'
            }`}             
            placeholder='Enter your number' required
            />
            {/* {validationErrors.mobile_number && (
              <p className="text-red-500 text-sm">{validationErrors.mobile_number}</p>
            )} */}
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <FaLocationDot className='text-3xl' />
              <p className='ml-2 md:ml-5'>
                CYB-I, STPI Cyber Park, RIICO Heavy Industrial Area,
                <br /> Heavy Industrial Area Phase II, Jodhpur, Rajasthan 342003
              </p>
            </div>
          </div>

          <div className='mb-4 flex flex-col md:flex-row'>
            <textarea
              type='text'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full md:w-1/2 px-3 py-2 mt-3 md:mr-20 border rounded-md focus:outline-none ${validationErrors.message ? 'border-red-500' : 'focus:border-primeColor'
            }`}  
             placeholder='Enter your message'
            />
            {validationErrors.message && (
              <p className="text-red-500 text-sm">{validationErrors.message}</p>
            )}
            <div className='flex mt-3 md:mt-0 ml-0 md:ml-20'>
              <IoGlobeSharp className='text-3xl mt-2' />
              <p className='ml-2 md:ml-5'>www.oilab.com</p>
            </div>
          </div>

          <button
            type='submit'
            className='w-full md:w-40 mb-5 bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300'
          >
            Submit
          </button>
        </form>
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
    </>
  );
}

export default Contact;
