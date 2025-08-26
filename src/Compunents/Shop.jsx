import React from 'react'
import { Button, Carousel } from "flowbite-react";
import RecipsShop from './RecipsShop';

function Shop() {
  return (
    <section className=" mt-20 w-[90%] mx-auto">
      {/* hero */}

    <div>
      <img src="shopHero.png" alt="" />
    </div>
   {/* marquee */}
   <div><h1 className='text-center py-6 font-bold text-2xl md:text-4xl text-gray-700'>Welcome to our Shop </h1></div>
    
    <marquee  className='border-3 rounded-2xl p-3 my-4 border-green-500'> 
      <div className=' flex gap-6 mt-4'> 
         <img src="vagitabl (1).png" alt="" />
         <img src="vagitabl (2).png" alt="" />
         <img src="vagitabl (3).png" alt="" />
         <img src="vagitabl (4).png" alt="" />
         <img src="vagitabl (5).png" alt="" />
         <img src="vagitabl (6).png" alt="" />
         <img src="vagitabl (7).png" alt="" />
         <img src="vagitabl (8).png" alt="" />
         <img src="vagitabl (9).png" alt="" />
         <img src="vagitabl (10).png" alt="" />
         <img src="vagitabl (11).png" alt="" />
         <img src="vagitabl (12).png" alt="" />
         <img src="vagitabl (2).png" alt="" />

      </div>
      </marquee>
  
    <RecipsShop />


    </section>
  );
}
export default Shop