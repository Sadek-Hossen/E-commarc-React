import React, { useEffect, useState } from "react";

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

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroInfo.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroInfo[currentIndex];

  return (
    <section className="mt-20  transition-opacity duration-1000 ease-in-out ">
      {/* relative container */}
      <div className="relative w-full h-[500px] overflow-hidden ">
        {/* background image */}
        <img
          src={currentSlide.img}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-60 text-white p-6 rounded-md text-center max-w-xl">
            <h1 className="text-3xl font-bold mb-4">{currentSlide.heading}</h1>
            <p className="text-lg">{currentSlide.para}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;