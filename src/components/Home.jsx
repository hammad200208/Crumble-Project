import React from 'react';
import home from '../assets/home.jpg';

const Home = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img 
        src={home} 
        alt="home img" 
        className="w-full h-full object-cover opacity-50" 
      />

      {/*Content on img */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-2">
        <h1 className="font-bold text-[#050897] text-2xl sm:text-3xl md:text-4xl mb-4 mt-20">
          Cookies Itni Soft, Toot Jaye Dil!
        </h1>
        <p className="text-[#050897] text-sm sm:text-base md:text-lg text-left md:text-center">
          Freshly baked har roz, with love aur asli ingredients—every cookie is soft, chunky, and full of <br className="hidden lg:inline" /> flavor. Straight from our oven to your doorstep, ready to win hearts one bite at a time.
        </p>
        <div className="md:pt-20 pt-5">
          <button className="text-white bg-[#050897] h-10 px-6 rounded-[10px] hover:bg-[#030670] transition">
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
