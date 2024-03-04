import React from 'react';
import { RiWallet3Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

import { Link } from 'react-router-dom';


function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://placekitten.com/200/200"
            alt="Profile"
          />
          <div className=''>
            <p className="text-lg font-semibold">Hello,</p>
            <p className="text-gray-500">John</p>
          </div>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />

        <div className="mt-2"> {/* Updated margin-top */}
          <div className=' flex gap-2'>
          <RiWallet3Fill className=' text-2xl' />
            <Link to="/oredrdetails"><p className='text-xl font-bold text-gray-400'>MY ORDERS</p></Link>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />

          <div className='flex gap-2'>
          <MdAccountCircle className=' text-2xl' />
            <p className='text-xl font-bold text-gray-400' >ACCOUNT SETTING</p>
          </div>
          <div className=' mx-[50px] my-[10px] text-base font-semibold text-gray-400'>
            <p>Profile Information</p>
            <p>Manage Addresses</p>
            <p>Pan Card Information</p>
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />

            <div className='flex gap-5'>
            <IoIosLogOut className='text-2xl' />
            <Link><p className='text-xl font-bold text-gray-400' >LOGOUT</p></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;




<div className=' flex justify-between'>
<p className=' font-mono text-gray-500 font-bold text-2xl flex ml-3'>INFORMATION :-</p>
<div className=' ml-3 mt-3'>
    <form>
        <div>
            <input
                type="text"
                id="name"
                name="name"
                className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                placeholder="Enter your name"
            />
        </div>
        <div className='my-4'>
            <input
                type="text"
                id="email"
                name="email"
                className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                placeholder="Enter your email"
            />
        </div>
        <div className='my-4'>
            <input
                type="text"
                id="number"
                name="number"
                className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                placeholder="Enter your number"
            />
        </div>
        <button
            type="submit"
            className="w-[20%] bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
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
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                    placeholder="Name"
                />
                <input
                    type="text"
                    id="number"
                    name="number"
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                    placeholder="10-digit-mobile number"
                />

            </div>
            <div className='my-4 flex gap-3'>
                <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                    placeholder="Pincode"
                />
                <input
                    type="text"
                    id="locality"
                    name="locality"
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                    placeholder="Locality"
                />
            </div>
            <div className='my-4 gap-3'>
                <textarea
                    type='text'
                    id='message'
                    name='message'
                    className='w-[51%]  px-3 py-2 md:mr-20 border rounded-md focus:outline-none focus:border-primeColor'
                    placeholder='Address'
                />
            </div>
            <div className='my-4 flex gap-3'>
                <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                    placeholder="City/District/Town"
                />
                <select
                    id="state"
                    name="state"
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
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
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                    placeholder="Landmark (Optional)"
                />
                <input
                    type="text"
                    id="alternatenumber"
                    name="alternatenumber"
                    className="w-[25%] px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
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

            <div  className='flex my-3 gap-3'>
                <button
                    type="submit"
                    className="w-[20%] bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
                >SAVE AND DELIVER HERE
                </button>
                <button
                    type="submit"
                    className="w-[20%] bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
                >CANCEL
                </button>
               
            </div>
        </div>
    </form>
</div>

<div>
    <h1>jdsfueyfhjxhcu</h1>
</div>     
</div>
