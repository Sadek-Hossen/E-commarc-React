import React, { useEffect, useState,useRef } from "react";


// Hero Items
const heroInfo = [
  {
    img: "hero (1).png",
    heading: "Don’t miss amazing grocery deals",
    para: "Sign up for the daily newsletter",
  },
  {
    img: "hero (2).png",
    heading: "Fresh Vegetables Big discount",
    para: "Save up to 50% off on your first order",
  },
  {
    img: "hero (3).png",
    heading: "Fresh Vegetables",
    para: "Sign up for the daily newsletter",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const emailRef = useRef()
  const textref=useRef()
  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>prev === heroInfo.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroInfo[currentIndex];

    // subscribe btn
    const HandleBtn = ()=>{
    const emailInfo = emailRef.current.value.trim()
    if (emailInfo === "") {
       textref.current.value="Please write you email"
    } else {
      alert("Subscribe Succes")
      emailRef.current.value=""
      textref.current.value=""


    }
    }

  return (
    <section className=" md:py-0  mt-10 md:mt-20   transition-opacity duration-1000 z-0 ease-in-out ">
      {/* relative container */}
      <div className="relative w-full md:h-[400px] h-[200px] overflow-hidden ">
        {/* background image */}
        <img
          src={currentSlide.img}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay text */}
        <div className="absolute inset-0 flex-col gap-4 flex items-center justify-center">
          <div className=" mt-5 bg-black bg-opacity-60 text-white p-3 md:p-6 rounded-md text-center max-w-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">{currentSlide.heading}</h1>
            <p className="text-[15px] text-gray-500 md:text-lg">{currentSlide.para}</p>

          </div>
          <input type="text" ref={textref}  className="text-red-600"/>
          <div className="  mx-auto flex justify-between items-center bg-white rounded-full mb-5  pl-5 pr-0 ">
            <input ref={emailRef} className="border-none outline-none " type="text" placeholder="Enter your email " /> <button onClick={HandleBtn} className="bg-green-400 md:py-4 py-2  rounded-full mr-0 px-5 md:px-10 opacity-100 hover:opacity-80 cursor-pointer transition-all hover:text-gray-600 hover:shadow-blue-900 shadow-xl shadow-fuchsia-800 font-semibold">Subscribe</button>
          </div>
        </div>
      </div>



    </section>
  );
}

export default Hero;