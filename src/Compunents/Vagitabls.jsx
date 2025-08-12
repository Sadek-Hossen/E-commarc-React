import React from "react";

const topSel = [
  {
    img: "vagitabl (1).png",
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    curentPrice: "$32.85",
    prePrice: "$33.8",
  },
  {
    img: "vagitabl (2).png",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    curentPrice: "$30.85",
    prePrice: "$33.8",
  },
  {
    img: "vagitabl (3).png",
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    curentPrice: "$31.85",
    prePrice: "$33.8",
  },
];

const Trending = [
  {
    img: "vagitabl (4).png",
    heading: "Organic Cage-Free Grade A Large Brown Eggs",
    curentPrice: "$20.85",
    prePrice: "$23.8",
  },
  {
    img: "vagitabl (5).png",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    curentPrice: "$10.85",
    prePrice: "$13.8",
  },
  {
    img: "vagitabl (6).png",
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    curentPrice: "$31.85",
    prePrice: "$33.8",
  },
];

const Recently = [
  {
    img: "vagitabl (7).png",
    heading: "Pepperidge Farm Farmhouse Hearty White Bread",
    curentPrice: "$20.85",
    prePrice: "$23.8",
  },
  {
    img: "vagitabl (8).png",
    heading: "Organic Frozen Triple Berry Blend",
    curentPrice: "$10.85",
    prePrice: "$13.8",
  },
  {
    img: "vagitabl (9).png",
    heading: "Organic Frozen Triple Berry Blend",
    curentPrice: "$31.85",
    prePrice: "$33.8",
  },
];

const TopRated = [
  {
    img: "vagitabl (10).png",
    heading: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    curentPrice: "$30.85",
    prePrice: "$33.8",
  },
  {
    img: "vagitabl (11).png",
    heading: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    curentPrice: "$10.85",
    prePrice: "$13.8",
  },
  {
    img: "vagitabl (12).png",
    heading: "All Natural Italian-Style Chicken Meatballs",
    curentPrice: "$21.85",
    prePrice: "$23.8",
  },
];

function Vagitabls() {
  return (
    <section className="w-[90%] grid md:grid-cols-4 pt-10 grid-cols-1 gap-3  mx-auto">
        
      <div >
        <h1 className="font-bold text-2xl border-b-2 border-green-500 py-3">Top Selling</h1>

        <hr className="text-gray-300 py-3" />
        {topSel.map((item, id) => (
           <a href="/about">
          <div key={id} className="flex py-2 gap-3 items-center">
          
            <div>
              <img src={item.img} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-[#253D4E] text-[13px]">{item.heading} </h1>
                <div className="flex items-center gap-3 ">
                    <p className="text-[17px] text-green-600 font-semibold">{item.curentPrice}</p>
                   <del className="text-[12px] text-gray-700 font-semibold">{item.prePrice}</del>
                </div>
            </div>
         
          </div>
             </a>
        ))}
      </div>
      

      <div>
             <h1 className="font-bold text-2xl border-b-2 border-green-500 py-3">Trending Products</h1>
        <hr className="text-gray-300 py-3" />
        {TopRated.map((item, id) => (
            <a href="/about">
          <div key={id} className="flex py-2 gap-3 items-center">
            
            <div>
              <img src={item.img} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-[#253D4E] text-[13px]">{item.heading} </h1>
                <div className="flex items-center gap-3 ">
                    <p className="text-[17px] text-green-600 font-semibold">{item.curentPrice}</p>
                   <del className="text-[12px] text-gray-700 font-semibold">{item.prePrice}</del>
                </div>
            </div>
         
          </div>
             </a>
        ))}
      </div>

      <div>
           <h1 className="font-bold text-2xl border-b-2 border-green-500 py-3">Recently added</h1>

        <hr className="text-gray-300 py-3" />
        {Trending.map((item, id) => (
              <a href="/about">
          <div key={id} className="flex py-2 gap-3 items-center">
          
            <div>
              <img src={item.img} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-[#253D4E] text-[13px]">{item.heading} </h1>
                <div className="flex items-center gap-3 ">
                    <p className="text-[17px] text-green-600 font-semibold">{item.curentPrice}</p>
                   <del className="text-[12px] text-gray-700 font-semibold">{item.prePrice}</del>
                </div>
            </div>
         
          </div>
             </a>
        ))}
      </div>

      <div>
          <h1 className="font-bold text-2xl border-b-2 border-green-500 py-3">Top Rated</h1>

        <hr className="text-gray-300 py-3" />
        {Recently.map((item, id) => (
             <a href="/about">
          <div key={id} className="flex py-2 gap-3 items-center">
           
            <div>
              <img src={item.img} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-[#253D4E] text-[13px]">{item.heading} </h1>
                <div className="flex items-center gap-3 ">
                    <p className="text-[17px] text-green-600 font-semibold">{item.curentPrice}</p>
                   <del className="text-[12px] text-gray-700 font-semibold">{item.prePrice}</del>
                </div>
            </div>
           
          </div>
           </a>
        ))}
      </div>
    </section>
  );
}

export default Vagitabls;
