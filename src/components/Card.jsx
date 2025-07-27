import React, { useState } from 'react';
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import cardbg from '../assets/cardbg.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

const Card = () => {
  const products = [
    {
      img: card1,
      name: "Classic Chocolate Chip",
      price: 'Rs. 1,950',
      rating: 4.9,
    },
    {
      img: card2,
      name: 'Double Chocolate',
      price: 'Rs. 1,950',
      rating: 4.7,
    },
    {
      img: card3,
      name: "Chocolate Chip Walnut",
      price: 'Rs. 1,950',
      rating: 5.0,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleLeftClick = () => {
    setSelectedIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setSelectedIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative py-10 px-4 sm:px-10 lg:px-20">
      {/* Desktop background image */}
      <div className="relative w-full h-100 hidden sm:block">
        <img
          src={cardbg}
          alt="Card Background"
          className="w-full h-100 object-cover rounded-[40px] z-0"
        />
      </div>

      {/* Mobile blue background with stacked cards */}
      <div className="sm:hidden bg-[#d1dbfb] rounded-[40px] py-15 px-4 mb-6 flex flex-col items-center justify-center space-y-15">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg w-60 pt-16 pb-6 px-4 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-10 bg-[#e5e8ff] rounded-full p-2">
              <img
                src={product.img}
                alt={product.name}
                className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
            <h3 className="text-lg text-[#000996] font-semibold mt-2">{product.name}</h3>
            <p className="text-[#000996]">{product.price}</p>
            <div className="flex items-center justify-between w-full mt-4 px-1">
              <button className="bg-[#000996] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                order now
              </button>
              <div className="flex items-center gap-1">
                <AiFillStar className="text-[#000996] w-5 h-5" />
                <span className="text-sm text-[#000996] font-medium">{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows – only on desktop */}
      <div
        onClick={handleLeftClick}
        className="z-20 absolute top-1/2 left-4 sm:left-20 transform -translate-y-1/2 bg-[#000996] rounded-full shadow-md p-3 sm:p-5 cursor-pointer hover:scale-105 transition hidden sm:block"
      >
        <AiOutlineLeft className="text-white w-6 h-6" />
      </div>

      <div
        onClick={handleRightClick}
        className="z-20 absolute top-1/2 right-4 sm:right-20 transform -translate-y-1/2 bg-[#000996] rounded-full shadow-md p-3 sm:p-5 cursor-pointer hover:scale-105 transition hidden sm:block"
      >
        <AiOutlineRight className="text-white w-6 h-6" />
      </div>

      {/* Cards – desktop layout */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full max-w-6xl hidden sm:flex flex-wrap lg:flex-nowrap justify-center gap-6 px-4 z-10">
        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg w-64 pt-16 pb-6 px-4 flex-shrink-0 flex flex-col items-center text-center relative transition-all duration-300
              ${
                selectedIndex === index
                  ? 'scale-105 border-2 border-[#000996]'
                  : 'opacity-80'
              }`}
          >
            <div className="absolute -top-10 bg-[#e5e8ff] rounded-full p-2">
              <img
                src={product.img}
                alt={product.name}
                className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
            <h3 className="text-lg text-[#000996] font-semibold mt-2">{product.name}</h3>
            <p className="text-[#000996]">{product.price}</p>
            <div className="flex items-center justify-between w-full mt-4 px-1">
              <button className="bg-[#000996] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                order now
              </button>
              <div className="flex items-center gap-1">
                <AiFillStar className="text-[#000996] w-5 h-5" />
                <span className="text-sm text-[#000996] font-medium">{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
