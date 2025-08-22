import React from "react";
import { Link } from "react-router-dom";
import ForAbout from "./ForAbout";
const provideInfo = [
  {
    img: "provide (1).png",
    pragraph:
      "We provide the best prices in the market along with exciting offers, ensuring you get maximum value for your money.",
    heading: "Best Prices & Offers",
    learn: "Read more",
  },

  {
    img: "provide (2).png",
    pragraph:
      "Explore a wide range of products across different categories, carefully selected to meet your every need",
    heading: "Wide Assortment",
    learn: "Read more",
  },

  {
    img: "provide (3).png",
    pragraph:
      "Enjoy fast and free delivery on all your orders, right to your doorstep without any hidden charges",
    heading: "Free Delivery",
    learn: "Read more",
  },

  {
    img: "provide (4).png",
    pragraph:
      "Shop with confidence! If you're not satisfied, our hassle-free return policy makes it easy to exchange or get a refund",
    heading: "Easy Returns",
    learn: "Read more",
  },

  {
    img: "provide (5).png",
    pragraph:
      "Your satisfaction is our top priority. We guarantee high-quality products and reliable customer support",
    heading: "100% Satisfaction",
    learn: "Read more",
  },

  {
    img: "provide (6).png",
    pragraph:
      "Don’t miss out on our special daily deals and discounts that make shopping more affordable and fun.",
    heading: "Great Daily Deal",
    learn: "Read more",
  },
];

function about() {
  return (
    <>
      <section className="mb-[50px] grid md:grid-cols-2 gap-3 md:pt-30  mx-auto px-3">
        <div>
          <img src="about (2).png" alt="" />
        </div>

        <div className="px-3">
          <h1 className="text-center font-bold md:text-4xl text-xl text-gray-800 py-4 ">
            Welcome to Nest
          </h1>
          <p className="py-3 text-gray-700">
        At Nest, we believe in bringing comfort, quality, and style into your everyday life. Our goal is to provide thoughtfully designed products that combine elegance with functionality, making your home a true reflection of your personality.
          </p>
          <p className="py-6 text-gray-700">
          We take pride in our journey, built on trust, creativity, and customer satisfaction. Every product we deliver is carefully crafted with attention to detail and a passion for excellence. Whether you are looking for modern solutions or timeless classics, Nest is here to inspire and serve you.
          </p>
          <div className="grid grid-cols-3 py-10 gap-4 ">
            <img
              className="border-4 border-b-blue-600 mt-3 min-h-40 md:min-h-60 shadow-blue-950 hover:scale-105 transition-all hover:rotate-12 duration-300"
              src="about (1).png"
              alt=""
            />
            <img
              className="border-4 border-b-blue-600 mt-3 min-h-40 md:min-h-60 shadow-blue-950 hover:scale-105 transition-all hover:rotate-12 duration-300"
              src="about (4).png"
              alt=""
            />
            <img
              className="border-4 border-b-blue-600 mt-3 min-h-40 md:min-h-60 shadow-blue-950 hover:scale-105 transition-all hover:rotate-12 duration-300"
              src="about (3).png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* What We Provide? section */}
      <section className="w-[90%] mx-auto ">
        <div>
          <h1 className="font-bold md:text-4xl text-xl text-gray-800 py-4  text-center">
            What We Provide?
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5 py-4 ">
          {provideInfo.map((item, id) => (
            <div
              key={id}
              className={`border  p-4 bg-amber-100 hover:scale-105 hover:bg-amber-200 opacity-90 rounded-2xl transition-all duration-300 hover:shadow-2xl shadow-amber-950`}
            >
              <img src={item.img} alt="img" className="mx-auto p-4 w-[30%]" />
              <h1 className="text-xl font-semibold py-4"> {item.heading} </h1>
              <p className="text-center w-full  py-5">{item.pragraph} </p>

              <Link to={"/Blog"}>
                <p className="text-center font-semibold text-[19px] text-green-500 hover:text-black cursor-pointer">
                  {" "}
                  {item.learn}{" "}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* //Our performance section */}

      <section className="w-[90%] mx-auto ">
       <div className="grid md:grid-cols-2  gap-4 py-6">
         <div>
          <img src="about-5.png.png" alt="img" />
        </div>
        <div className="px-5">
          <span className="text-xl text-gray-700 font-semibold">Our performance</span>
          <h1 className="text-4xl font-semibold  md:w-[60%] font-sans text-gray-900 py-5">Your Partner for e- commerce grocery solution</h1>
          <p className="text-gray-600 py-5 ">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </p>
          <p className="text-gray-600 py-5 ">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </div>
       </div>
      </section>
      <section className="w-[90%] mx-auto ">
        <ForAbout />
      </section>
    </>
  );
}

export default about;
