import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Card from '../Card/Card';
import { FaHeart } from "react-icons/fa";
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

  const cardsData = [
    {
      image_url: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      description: 'Women Red Heal',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <Link to="/wishlistpage"><FaHeart /></Link>
    },
    {
      image_url: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
      description: 'Boys Shirts',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },
    {
      image_url: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      description: 'Women Red Heal',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },
    {
      image_url: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
      description: 'Boys Shirts',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },
    {
      image_url: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      description: 'Women Red Heal',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },
    {
      image_url: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
      description: 'Boys Shirts',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },
    {
      image_url: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      description: 'Women Red Heal',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },
    {
      image_url: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
      description: 'Boys Shirts',
      payment: '$40.00',
      offer: '$15',
      off: '5 % off',
      size: ' Size : 3, 4, 5, 6',
      // iconUrl: <FaHeart />,
    },



  ];

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

      <div className="flex justify-center items-start flex-wrap bg-gray-100 gap-4 my-3">

        {cardsData.map((card, index) => (
          <Card key={index} image_url={card.image_url} title={card.title} description={card.description} payment={card.payment} offer={card.offer} off={card.off} size={card.size} iconUrl={card.iconUrl} onAddToWishlist={() => handleAddToWishlist(index)}
          />
        ))}

      </div>

    </>
  )
}

export default Home
