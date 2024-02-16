import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Home() {
  const slides = [
    {
      url: "https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.jpg?s=612x612&w=is&k=20&c=r8QVpgXLRdV81AW4hnZXMHompxh43RLhbY-7EIQPGWg=",
    },
    {
      url: "https://media.istockphoto.com/id/511594766/photo/person-shopping-making-mobile-payment-with-telephone.jpg?s=612x612&w=is&k=20&c=DdMsoLBq3gF7oDdNB89furR30W_o6JqI1DaIgK7t-sk=",
    },
    {
      url: "https://media.istockphoto.com/id/838048444/photo/influencer-marketing-concept.jpg?s=612x612&w=is&k=20&c=YN9yzQKAeptsMtFioRaQVHtSUq6bssbOWWQG_vgayS8=",
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

  return (
    <>
      <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/*Left Arow  */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/*right Arow  */}

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
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
    </>
  );
}

export default Home;
