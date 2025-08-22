import React from "react";
import { Link } from "react-router-dom";
const ourInfo = [
  {
    heading: "Who we are",
    paragraph:
      "We are a passionate team dedicated to delivering high-quality products and services. Our focus is on innovation, integrity, and building lasting relationships with our customers.",
  },
  {
    heading: "Our history",
    paragraph:
      "Founded with a vision to make a difference, we have grown from a small startup into a trusted brand. Over the years, we have consistently adapted to changes while staying true to our values.",
  },
  {
    heading: "Our mission",
    paragraph:
      "Our mission is to provide reliable, affordable, and innovative solutions that empower people and businesses to achieve more. We strive to create a positive impact in everything we do.",
  },
];
function ForAbout() {
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-4 ">
        {ourInfo.map((item, id) => (
          <div key={id}>
            <h1 className="md:py-3 py-1 text-2xl text-gray-700 font-semibold font-serif">
              {item.heading}
            </h1>
            <p className="text-gray-600 py-4">{item.paragraph} </p>
          </div>
        ))}
      </div>

      {/* product sels */}

      <div style={{ backgroundImage:"url('Main.png')", backgroundRepeat:"no-repeat" }} className="py-30 rounded-2xl rounded-br-2xl ">
        <div className="grid grid-cols-5 rounded-2xl">
          <div className="text-center p-3">
            <h1 className="font-bold text-white text-center  md:text-4xl">10+</h1>
            <p className="text-white">Glorious years</p>
         </div>         
          <div className="text-center p-3">
            <h1 className="font-bold text-white text-center md:text-4xl">40+</h1>
            <p className="text-white md:text-[16px] text-[12px]">Team advisor</p>
         </div>         
          <div className="text-center p-3">
            <h1 className="font-bold text-white text-center md:text-4xl">130+</h1>
            <p className="text-white md:text-[16px] text-[12px]">Products Sale</p>
         </div>         
          <div className="text-center p-3">
            <h1 className="font-bold text-white text-center md:text-4xl">90+</h1>
            <p className="text-white md:text-[16px] text-[12px]">Projects complete</p>
         </div>         
          <div className="text-center p-3">
            <h1 className="font-bold text-white text-center md:text-4xl">70+</h1>
            <p className="text-white md:text-[16px] text-[12px]">Happy clients</p>
         </div>         
                  
        </div>
      </div>

      {/* our team  */}

      <div className="py-4 ">
        <img src="Main (3).png" alt="" />

        <div className="grid md:grid-cols-3 gap-4 mx-3 py-6">
          <div>
            <span className="text-green-600 ">Our Team </span>
            <h1 className="font-semibold font-mono text-4xl py-4 text-gray-700 ">
              Meet Our Expert Team
            </h1>
            <p className="text-gray-600 py-4 text-[14px]">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequataco ngue idsem.Maecenas
              malesuada faucibus finibus.
            </p>
            <p className="text-gray-600 py-4 text-[14px]">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
         <Link to={'/Blog'}>
          <button className="text-white bg-green-700 py-3 px-3 hover:opacity-90 hover:shadow-xl shadow-blue-900   hover:-rotate-25 transition-all duration-300 hover:scale-70 rounded-xl text-center mx-auto cursor-pointer ">
              View All Members
            </button></Link>
           
          </div>
          <div className="">
            <img src="Main (4).png" alt="" className="absolute px-3" />
            <div className="bg-white rounded-2xl mx-auto w-[60%]  p-3 relative  mt-[110%]">
             
              <h1 className="text-2xl font-semibold text-center"> Dilan Specterr</h1>
             <p className="text-center text-gray-700">Head Engineer </p>
            </div>
          </div>
          <div className="">
            <img src="Main (5).png" alt="" className="absolute" />
            <div className="bg-white rounded-2xl mx-auto w-[60%]  p-3 relative  mt-[110%]">
              
             <h1 className="text-2xl font-semibold text-center"> H. Merinda</h1>
             <p className="text-center text-gray-700"> CEO & Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForAbout;
