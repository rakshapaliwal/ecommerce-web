import FooterListTitle from "./FooterList";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  const [subscription, setSubscription] = useState(false);
  return (
    <>
      <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 gap-10">
          {/* fist column in footer */}
          <div className="flex flex-col">
            <FooterListTitle title="Shop" />
            <ul className="flex flex-col gap-2">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Accesories
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Clothes
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Electronics
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Home appliances
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                New Arrivals
              </li>
            </ul>
          </div>

          {/* second column in footer */}

          <div className="flex flex-col">
            <FooterListTitle title="Shop" />
            <ul className="flex flex-col gap-2">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Profile
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Orders
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Addresses
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Account Details
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Payment Options
              </li>
            </ul>
          </div>

          {/* third column in footer */}
          <div className="flex flex-col">

            


        
            <FooterListTitle title="Shop" />
                <div className="flex py-10 gap-4">

                <input type="email" className="h-8 w-[200px]"></input>
            <button type="submit" className="bg-primeColor text-white rounded-md py-1 px-1"> Subscribe</button>

                </div>
        
            <ul className="flex gap-2">
              <a
                href="https://www.youtube.com/@reactjsBD"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/noorjsdivs"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com/Noorlalu143/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F3] group">
        <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
          <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
            <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
              <AiOutlineCopyright />
            </span>
            Copyright 2022 | Orebi shopping | All Rights Reserved |
            <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
              <span className="ml-1 font-medium group-hover:text-primeColor">
                Powered by OILab.com
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
