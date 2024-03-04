import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
     // Split the input value into words
     const words = value.split(/\s+/);

     // Call the onSearch function with each word
     onSearch(words);
   };
  

  const handleSearchClick = () => {
    // You can perform additional actions here if needed
    alert('Search button clicked');
  };

  

  return (
    <>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          className="border p-2 rounded w-[50%] ml-8"
          onChange={handleSearchChange}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
