import React from 'react';

const Card = () => {
  return (
    <div className="bg-white py-10">
      {/* Main blue container */}
      <div className="relative w-[60%] max-w-[1000px] h-80 bg-[#9eb5ed] mx-auto rounded-[40px] overflow-hidden">
        
        {/* Left circular cutout */}
        <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full z-20"></div>
        
        {/* Right circular cutout */}
        <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full z-10"></div>
      
        {/* Add your cards or content here */}
      </div>
    </div>
  );
};

export default Card;
