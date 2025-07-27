import React, { useState } from 'react';
import id from '../assets/id.png';

const customers = [
  {
    name: 'Zara A., Islamabad',
    message:
      'Bas ek cookie khaai thi… and now I can’t stop. The packaging, the taste, the vibe — sab kuch 10/10.',
    img: id,
  },
  {
    name: 'Ali B., Lahore',
    message:
      'I tried one for fun and ended up ordering a dozen. These cookies hit the sweet spot!',
    img: id,
  },
  {
    name: 'Sara K., Karachi',
    message:
      'Every bite tastes like love and chocolate. Highly recommend their walnut variant!',
    img: id,
  },
  {
    name: 'Omar R., Faisalabad',
    message:
      'Delivered fresh, super soft, and perfectly sweet. I’ll be ordering again soon!',
    img: id,
  },
  {
    name: 'Nida M., Rawalpindi',
    message:
      'Even my parents loved them — and they’re hard to impress. These cookies are next level.',
    img: id,
  },
];

const Customer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
  <div className="bg-[#FFF3E0] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
    {/* Heading */}
    <div className="flex justify-center mb-6">
      <h1 className="text-[#050897] font-bold text-2xl md:text-3xl text-center">
        Happy Customers
      </h1>
    </div>

    {/* Testimonial Card */}
    <div className="flex flex-col border border-[#050897] rounded-[30px] md:rounded-[100px] py-6 px-4 md:px-8 gap-4 max-w-[700px] mx-auto bg-white shadow-md transition-all duration-300">
      {/* Image + Feedback Row */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Customer Image */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start">
          <img
            src={customers[activeIndex].img}
            alt={customers[activeIndex].name}
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Customer Feedback */}
        <div className="w-full md:w-4/5 text-left">
          <h2 className="font-semibold text-lg text-[#050897] mb-2">
            {customers[activeIndex].name}
          </h2>
          <p className="text-black text-sm leading-relaxed">
            {customers[activeIndex].message}
          </p>
        </div>
      </div>

      {/* Dots Centered Inside Card */}
      <div className="flex justify-center mt-4 space-x-2">
        {customers.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${
              index === activeIndex
                ? 'bg-[#050897] scale-110'
                : 'bg-[#d1d1f0] hover:bg-[#050897]'
            }`}
          ></button>
        ))}
      </div>
    </div>
  </div>
);
};

export default Customer;
