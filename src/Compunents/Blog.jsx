import React from "react";
import CommentForm from "./CommentForm";
import {Link} from 'react-router-dom'

function Blog() {
  return (
    <section className="mt-30 w-[90%] mx-auto">
      <div className=" py-4">
        <h1 className="text-2xl font-semibold ">
          Best smartwatch 2025: the top wearables you can buy today
        </h1>
      </div>

      <div className="grid w-[95%] md:grid-cols-3 mx-auto mt-4  justify-around items-center">
        <div className="col-span-2 px-4">
          <img src="hero (3).png" alt="blog hero" />
          <div>
            <p className="py-6 text-gray-500 ">
              Helping everyone live happier, healthier lives at home through
              their kitchen. Kitchn is a daily food magazine on the Web
              celebrating life in the kitchen through home cooking and kitchen
              intelligence.
            </p>
            <p className="py-6 text-gray-500 ">
              We've reviewed and ranked all of the best smartwatches on the
              market right now, and we've made a definitive list of the top 10
              devices you can buy today. One of the 10 picks below may just be
              your perfect next smartwatch.
            </p>
            <p className="py-6 text-gray-500 ">
              Those top-end wearables span from the Apple Watch to Fitbits,
              Garmin watches to Tizen-sporting Samsung watches. There's also
              Wear OS which is Google's own wearable operating system in the
              vein of Apple's watchOS - you’ll see it show up in a lot of these
              devices.
            </p>
            <p className="text-2xl font-semibold py-2">Our main aim </p>
            <p className="py-6 text-gray-500 ">
              Throughout our review process, we look at the design, features,
              battery life, spec, price and more for each smartwatch, rank it
              against the competition and enter it into the list you'll find
              below.
            </p>

            <img className=" py-3" src="blog.png" alt="blog image" />
          </div>
          <div className="flex items-center my-4 gap-3 ">
          <Link  to={"/Contruct"}>
          <button className="py-4 cursor-pointer px-8 shadow-2xl shadow-blue-900 hover:shadow-blue-950 text-white text-2xl hover:opacity-85 transition-all duration-300  bg-green-700 rounded-2xl ">
              deer
            </button>
        
          </Link>
             <Link  to={"/Contruct"}>
            <button className="py-4 px-8 shadow-2xl shadow-blue-900 hover:shadow-blue-950 text-white text-2xl hover:opacity-85 transition-all duration-300  bg-green-700 rounded-2xl ">
              nature
            </button>
            </Link>
            <Link  to={"/Contruct"}>
            <button className="py-4 px-8 shadow-2xl shadow-blue-900 hover:shadow-blue-950 text-white text-2xl hover:opacity-85 transition-all duration-300  bg-green-700 rounded-2xl ">
              conserve
            </button>
            </Link>
          </div>

          {/* comments */}
          <h1 className="py-4 text-2xl">Comments...</h1>
          <div className="border p-6 rounded-2xl ">
            <div >
              <div className="flex items-center gap-3">
                <img src="profile.png" alt="profile barabara" />
                <div>
                  <h1>Barbara Caratland</h1>
                  <p>306 post * Since 2020</p>
                </div>
              </div>
              <div>
                <p>
                  Hi there, I am a veteran food blogger sharing my daily all
                  kinds of healthy and fresh recipes. I find inspiration in
                  nature, on the streets and almost everywhere. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Amet id enim,
                  libero sit. Est donec lobortis cursus amet, cras elementum
                  libero
                </p>
              </div>
            </div>
          </div>

          <div>
            <CommentForm />
          </div>
        </div>

        <div className="col-span-1 mx-auto">
          <div  className="flex flex-col justify-center items-center">
            <img
              className="cursor-pointer   hover:scale-105 transition-all duration-300"
              src="category (1).png"
              alt="category image"
            />
            <img
              className="cursor-pointer  hover:scale-105 transition-all duration-300"
              src="category (2).png"
              alt="category image"
            />
            <img
              className="cursor-pointer  hover:scale-105 transition-all duration-300"
              src="category (3).png"
              alt="category image"
            />
            <img
              className="cursor-pointer  hover:scale-105 transition-all duration-300"
              src="category (4).png"
              alt="category image"
            />
          </div>
        </div >
      </div>
          <h1 className="text-2xl font-bold py-5"> Comment's</h1>
        <div className="mt-10 w-[95%] mx-auto md:w-[70%]">
              <div className="flex items-center gap-3">
                <img src="prifile2.png" alt="profile barabara" />
                <div>
                  <h1>sinna</h1>
                  <p>426 post * Since 2020</p>
                </div>
              </div>
              <div>
                <p>
                  Hi there, I am a veteran resturent mantor i  sharing my daily all
                  kinds of healthy and fresh recipes. I find inspiration in
                  nature, on the streets and almost everywhere. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Amet id enim,
                  libero sit. Est donec lobortis cursus amet, cras elementum
                  libero
                </p>
              </div>
            </div>
        <div className="mt-10 w-[95%] mx-auto md:w-[70%]">
              <div className="flex items-center gap-3">
                <img src="profile3.png" alt="profile barabara" />
                <div>
                  <h1>mark kal</h1>
                  <p>306 post * Since 2019</p>
                </div>
              </div>
              <div>
                <p>
                  Hi there, I am a veteran food blogger sharing my daily all
                  kinds of healthy and fresh recipes. I find inspiration in
                  nature, on the streets and almost everywhere. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Amet id enim,
                  libero sit. Est donec lobortis cursus amet, cras elementum
                  libero
                </p>
              </div>
            </div>
        <div className="mt-10 w-[95%] mx-auto md:w-[70%]">
              <div className="flex items-center gap-3">
                <img src="profile4.png" alt="profile barabara" />
                <div>
                  <h1>Barbara Caratland</h1>
                  <p>306 post * Since 2020</p>
                </div>
              </div>
              <div>
                <p>
                  Hi there, I am a veteran food blogger sharing my daily all
                  kinds of healthy and fresh recipes. I find inspiration in
                  nature, on the streets and almost everywhere. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Amet id enim,
                  libero sit. Est donec lobortis cursus amet, cras elementum
                  libero
                </p>
              </div>
            </div>
    </section>
  );
}

export default Blog;
