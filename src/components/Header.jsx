import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import header from '../assets/header.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow px-6 py-2 sm:px-8 fixed  z-50 flex items-center justify-between">
        {/* left links */}
        <div className="gap-6 hidden md:flex">
          <a className="text-[#050897] font-medium" href="#">Home</a>
          <a className="text-[#050897] font-medium" href="#">About</a>
          <a className="text-[#050897] font-medium" href="#">Careers</a>
        </div>

        {/* center logo */}
        <div>
          <img className="h-20 mx-auto md:mr-30" src={header} alt="logo" />
        </div>

        {/* right icons */}
        <div className="items-center gap-4 text-[#050897] hidden md:flex">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>

        {/* mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-xl text-[#050897]" />
            ) : (
              <FaBars className="text-xl text-[#050897]" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-[80px] px-6 py-4 shadow space-y-4 absolute w-full z-40 bg-white">
          <a className="block text-[#050897] font-medium" href="#">Home</a>
          <a className="block text-[#050897] font-medium" href="#">About</a>
          <a className="block text-[#050897] font-medium" href="#">Careers</a>
          <div className="flex gap-6 mt-2 text-[#050897]">
            <FaSearch className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
