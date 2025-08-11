import React from 'react';

const CardInfo = [
  {
    img: '/card (1).png',
    heading: "Everyday Fresh & Clean with Our Products",
    button: "Shop now",
  },
  {
    img: 'card (2).png',
    heading: "Make your Breakfast Healthy and Easy",
    button: "Shop now",
  },
  {
    img: 'card (3).png',
    heading: "The best Organic Products Online",
    button: "Shop now",
  },
];

function Card() {
  return (
    <section className="w-[90%] mx-auto grid grid-cols-1 mb-10 md:grid-cols-3 gap-6">
      {CardInfo.map((item, id) => (
        <div
          key={id}
          className=" p-4 rounded-lg gap-4 md:flex flex-col "
         
        >
          <div className="  p-2 md:p-4 rounded hover:shadow-2xl shadow-2xs transition-all hover:scale-105" >
            <div>
              <img className='absolute md:w-[350px] w-[300px] ' src={item.img} alt="card image" />
            </div>
          <div className='relative '>
              <h1 className="text-[16px] md:text-xl pt-3 pl-2 md:pl-5  font-semibold mb-3">{item.heading}</h1>
            <button className="bg-green-600 mt-16 hover:-rotate- mb-3 hover:-rotate-10 ml-4 md:ml-7 py-2 hover:px-3 hover:py-1  px-4 rounded text-white transition-all duration-300 hover:shadow-blue-600 shadow-lg shadow-yellow-800 hover:bg-blue-950">
              {item.button}
            </button>
        
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Card;