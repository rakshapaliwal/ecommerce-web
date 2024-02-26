import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';




function Topbar() {
  return (
    <>
   <div className='h-14 w-full bg-slate-950 flex items-center justify-end gap-2'>
    <p className=' text-white font-size: 1.125rem;'>Call Us On : 1201220122 | </p>
    <p className='text-white font-size: 1.125rem;'>Gift Certificate | </p>
    <div className=' flex gap-2 mr-2'>
    <Link to="addcart"><FaShoppingCart style={{color: 'orange'}} /></Link>
    <Link to="wishlistpage"><FaHeart style={{color: 'orange'}} /></Link>
    <Link to="profile"><CgProfile style={{color: 'orange'}} /></Link>

    </div>
   
    </div>

    </>
   
  )
}

export default Topbar
