import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Card from '../Card/Card';
import axios from 'axios';
import { Link } from "react-router-dom";



function Home() {

  const slides = [
    {
      url: "https://pioneer-latin.com/wp-content/uploads/revslider/melinda-shop/girl-slider-gray-900x600.jpg"
    },
    {
      url: "https://marcomoreo.com/cdn/shop/collections/SLIDER_COLLEZIONI_SLIP_ON.jpg?v=1706801166",
    },
    {
      url: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/03/Apple-iPhone-15-Pro.jpg?fit=1200%2C675&ssl=1",
    },
  ];

  // card function to show


  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.29.59:3000/product/get/8');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  {
    /*Slider function to show  */
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  {
    /*dot slide fucntion */
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // wishlist

  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (index) => {
    if (!wishlist.includes(index)) {
      setWishlist([...wishlist, index]);
    }
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto py-10 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[500px]  rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* Left Arrow */}
        <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-1">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      {/* cards */}
      {data.length > 0 ? (
        <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">
          {data.map(product => (
            <Card key={product._id} image_url={product.image_url} name={product.name} selling_price={product.selling_price} discount={product.discount} cost={product.cost} size={JSON.parse(product.size)} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
     
   
    </>
  )
}

export default Home
