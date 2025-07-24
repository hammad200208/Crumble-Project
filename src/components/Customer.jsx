import React from 'react'
import id from '../assets/id.png'

const Customer = () => {
  return (
    <div className='bg-[#FFF3E0] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex justify-center py-6'>
        <h1 className='text-[#050897] font-bold text-2xl md:text-3xl text-center'>
          Happy Customers
        </h1>
      </div>

      <div className='flex flex-col md:flex-row items-center border border-[#050897] rounded-[30px] md:rounded-[100px] py-4 px-4 md:px-6 gap-4 max-w-[700px] mx-auto mb-10'>
        <div className='w-full md:w-1/5 flex justify-start pl-2 md:pl-4'>
          <img src={id} alt="Customer" className='h-32 w-auto object-contain' />
        </div>
        <div className='w-full md:w-4/5 text-left'>
          <h2 className='font-semibold text-lg text-[#050897] mb-1'>Zara A., Islamabad</h2>
          <p className='text-black text-sm'>
            Bas ek cookie khaai thi… and now I can’t stop. The packaging,<br className='hidden md:flex' /> the taste, the vibe — sab kuch 10/10.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Customer
