import React from 'react'
import { Link } from 'react-router-dom';
import { FaWallet } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";





function Profile() {
    return (
      <>
        <div className=' flex justify-around'>

            {/* First Card */}
            <div className=' border ml-4 shadow w-[25%] cursor-pointer'>
                <div className=' flex ml-8 justify-between'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className=' mt-3' width="40px" height="40px"></img>
                    <p className=' flex items-center mr-[65%] text-gray-400 font-bold'>Hello,</p>
                </div>
                <div className=' flex ml-[28%] mb-2 text-gray-400 font-bold'>
                    <p>Raksha Paliwal</p>
                </div>
                <hr className='border-b my-4' />

            </div>


            {/* Second Card */}

            <div className='border ml-4 mt-3 shadow w-[25%]'>
                <div className='flex ml-[50px] gap-5 mt-4 cursor-pointer'>
                    <FaWallet className='text-xl' />
                    <Link to="orderdetails">
                        <h1 className='text-gray-400 font-bold text-lg'>MY ORDERS</h1>
                    </Link>
                </div>
                <hr className='border-b my-4' />

                <div className=' flex gap-5'>
                    <CgProfile className='text-2xl font-bold ml-[45px]' />
                    <h1 className='text-gray-400 font-bold text-lg'>ACCOUNT SETTING</h1>
                </div>
                <div className=' text-gray-400 font-semibold ml-[25%] mt-4 gap-4'>
                    <p className=' mt-3'>Profile Information</p>
                    <p className=' mt-3'>Manage Addresses</p>
                    <p className=' mt-3'>Pan Card Information</p>
                </div>
                <hr className='border-b my-4' />


                <div className=' flex gap-5 mt-5'>
                    <MdOutlinePayment className='text-2xl font-bold ml-[45px]' />
                    <h1 className='text-gray-400 font-bold text-lg'>PAYMENTS</h1>
                </div>
                <div className=' text-gray-400 font-semibold ml-[25%] mt-4 gap-4'>
                    <p className=' mt-3'>Gift Cards</p>
                    <p className=' mt-3'>Saved UPI</p>
                    <p className=' mt-3'>Saved Cards</p>
                </div>
                <hr className='border-b my-4' />

                <div className=' flex gap-5 mt-5'>
                    <IoIosWallet className='text-2xl font-bold ml-[45px]' />
                    <h1 className='text-gray-400 font-bold text-lg'>MY STUFF</h1>
                </div>
                <div className=' text-gray-400 font-semibold ml-[25%] mt-4 gap-4'>
                    <p className=' mt-3'>My Coupons</p>
                    <p className=' mt-3'>My Review & Ratings</p>
                    <p className=' mt-3'>All Notifications</p>
                    <p className=' mt-3'>My Wishlist</p>
                </div>
                <hr className='border-b my-4' />

                <div className=' flex gap-5 mt-5 mb-4'>
                    <IoIosWallet className='text-2xl font-bold ml-[45px]' />
                    <h1 className='text-gray-400 font-bold text-lg'>LOGOUT</h1>
                </div>

            </div>

            <div className=' border ml-4 shadow w-[25%] mt-4'>
                
                <div className=' flex ml-[15%] mb-2 mt-4 text-gray-400 font-bold'>
                    <p>Frequently Visited:</p>
                </div>
                <div className=' flex mt-3 gap-6'>
                    <p className=' ml-7 text-gray-400 font-semibold cursor-pointer'>Track Order</p>
                    <p className=' text-gray-400 font-semibold cursor-pointer'>Help Center</p>
                </div>
                <hr className='border-b my-4' />

            </div>

        </div>


      </>  
    )
}

export default Profile
