import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";



const ProductDetails = () => {

 
  return (
    <div className="container mx-auto p-8 flex flex-wrap">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <img
          className="mb-4 rounded-lg w-full"
          src="http://192.168.29.59:3000/images/92657_360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
          alt="Product Image"
        />
      </div>

      {/* Product Content */}
      <div className="w-full md:w-1/2 md:pl-8">
        <div className="max-w-2xl bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-2">
            Men Slim Fit Striped Spread Collar Casual Shirt
          </h1>
          <p className="text-green-500 mt-3">In Stock</p>
          <div className="flex mt-3">
            <p className="text-gray-400">
              <span>₹</span> 2000
            </p>
            <p className="text-red-400 line-through ml-2">
              <span>₹</span> 500
            </p>
            <p className="text-green-400 ml-2 font-serif">
              <span>₹</span> 10 % off
            </p>
          </div>

          {/* description */}
          <div className="mt-3">
            <p>
              Shirts design :- <br />
              Ethnic motifs embroidered Anarkali shape Regular style Round
              neck, three-quarter no sleeves Thread work detail Above knee
              length with flared hem Viscose rayon machine weave fabric.
            </p>
          </div>

          {/* Size Option */}
          <div className="mb-4 mt-3">
            <label className="text-gray-600">Size:</label>
            <select className="ml-2 p-2 border rounded">
              <option value="xl">small</option>
              <option value="l">medium</option>
              <option value="m">large</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <Link to="/addcart">
              <button className="text-white bg-black p-2 px-4 flex gap-2">
                <FaCartArrowDown className="mt-1" /> Go to Cart
              </button>
            </Link>
            <Link to="/checkout">
              <button className="text-white bg-black p-2 px-4 flex gap-2">
                <AiFillThunderbolt className="mt-1" /> Buy Now
              </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
