import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out bg-black p-4 rounded-full text-white focus:outline-none`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
