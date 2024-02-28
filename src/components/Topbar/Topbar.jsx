import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaCartArrowDown } from "react-icons/fa6";
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function Topbar() {
  return (  
    <>
      <div className='h-14 w-full bg-slate-950 flex flex-col lg:flex-row items-center justify-between lg:justify-end gap-2 px-4 lg:px-8'>
        <div className='flex items-center gap-2'>
          {/* Search Bar */}
          {/* <input
            type='text'
            placeholder='Search...'
            className='px-2 py-1 border border-gray-300 rounded'
          /> */}
          {/* End of Search Bar */}

          <p className='text-white lg:text-left text-xl lg:text-lg'>
            Call Us On: 1201220122 |
          </p>
          <p className='text-white lg:text-left text-sm lg:text-lg'>
            Gift Certificate |
          </p>
        </div>

        <div className='flex gap-2 mt-2 lg:mt-0'>
          <Link to='addcart'>
            <FaCartArrowDown style={{ color: 'orange' }} />
          </Link>
          <Link to='wishlistpage' className='inline-block transition-transform transform hover:-translate-y-1'>
            <FaHeart style={{ color: 'orange' }} />
          </Link>
          <Link to='profile'>
            <CgProfile style={{ color: 'orange' }} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Topbar;
