import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// slider

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function DayliSels() {
  return (
    <section className="w-[90%] mt-5 mx-auto">
      <h1 className="text-2xl font-semibold py-3"> Daily Best Sells</h1>
      <div className="grid  grid-cols-1 md:grid-cols-5 gap-3">
        <div>
          <img className="h-full" src="div.banner-img.png" alt="" />
        </div>

        <div>
          <a href="/about">
            <div className="rounded-2xl border-2 border-gray-200 hover:scale-105 transition-all cursor-pointer">
              <img className=" mx-auto" src="pack (1).png" alt="" />
              <p className="px-4 text-gray-700 text-[5px] md:text-[14px]">
                Hodo Foods
              </p>
              <h1 className="py- px-4 font-semibold text-[6px] md:text-[15px] sm:text-[6px]  ">
                All Natural Italian-Style Chicken Meatballs
              </h1>
              <div className="flex px-4 text-[6px] md:text-[16px]">
                <p className=" text-gray-600">By :</p>{" "}
                <span className="text-green-600">NestFood</span>
              </div>
              <div className="flex px-4 mb-2 justify-between items-center">
                <div className="flex gap-3  md:text-[16px] text-[6px]">
                  <span className="font-semibold text-green-700 ">$40.5 </span>
                  <del className="text-gray-600 "> $43.28</del>
                </div>
                <div className="flex items-center bg-[#DEF9EC] hover:text-black transition-all hover:p-2 p-1 rounded text-[#3BB77E]  md:text-[16px] text-[6px]">
                  <ShoppingCartIcon className="w-[7px]" />
                  <p>Add</p>
                </div>
              </div>
              <div className="w-[100px] mx-auto text-center">
                <Box sx={{ width: 100 }}>
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                </Box>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="/about">
            <div className="rounded-2xl border-2 border-gray-200 hover:scale-105 transition-all cursor-pointer">
              <img className=" mx-auto" src="pack (4).png" alt="" />
              <p className="px-4 text-gray-700 text-[5px] md:text-[14px]">
                Hodo Foods
              </p>
              <h1 className="py- px-4 font-semibold text-[6px] md:text-[15px] sm:text-[6px]  ">
                Angie’s Boomchickapop Sweet and womnies
              </h1>
              <div className="flex px-4 text-[6px] md:text-[16px]">
                <p className=" text-gray-600">By :</p>{" "}
                <span className="text-green-600">NestFood</span>
              </div>
              <div className="flex px-4 mb-2 justify-between items-center">
                <div className="flex gap-3  md:text-[16px] text-[6px]">
                  <span className="font-semibold text-green-700 ">$40.5 </span>
                  <del className="text-gray-600 "> $43.28</del>
                </div>
                <div className="flex items-center bg-[#DEF9EC] hover:text-black transition-all hover:p-2 p-1 rounded text-[#3BB77E]  md:text-[16px] text-[6px]">
                  <ShoppingCartIcon className="w-[7px]" />
                  <p>Add</p>
                </div>
              </div>

              <div className="w-[100px] mx-auto text-center">
                <Box sx={{ width: 100 }}>
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                </Box>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="/about">
            <div className="rounded-2xl border-2 border-gray-200 hover:scale-105 transition-all cursor-pointer">
              <img className=" mx-auto" src="pack (3).png" alt="" />
              <p className="px-4 text-gray-700 text-[5px] md:text-[14px]">
                Hodo Foods
              </p>
              <h1 className="py- px-4 font-semibold text-[6px] md:text-[15px] sm:text-[6px]  ">
                Foster Farms Takeout Crispy Classic
              </h1>
              <div className="flex px-4 text-[6px] md:text-[16px]">
                <p className=" text-gray-600">By :</p>{" "}
                <span className="text-green-600">NestFood</span>
              </div>
              <div className="flex px-4 mb-2 justify-between items-center">
                <div className="flex gap-3  md:text-[16px] text-[6px]">
                  <span className="font-semibold text-green-700 ">$40.5 </span>
                  <del className="text-gray-600 "> $43.28</del>
                </div>
                <div className="flex items-center bg-[#DEF9EC] hover:text-black transition-all hover:p-2 p-1 rounded text-[#3BB77E]  md:text-[16px] text-[6px]">
                  <ShoppingCartIcon className="w-[7px]" />
                  <p>Add</p>
                </div>
              </div>

              <div className="w-[100px] mx-auto text-center">
                <Box sx={{ width: 100 }}>
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                </Box>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="/about">
            <div className="rounded-2xl border-2 border-gray-200 hover:scale-105 transition-all cursor-pointer">
              <img className=" mx-auto" src="pack (8).png" alt="" />
              <p className="px-4 text-gray-700 text-[5px] md:text-[14px]">
                Hodo Foods
              </p>
              <h1 className="py- px-4 font-semibold text-[6px] md:text-[15px] sm:text-[6px]  ">
                Chobani Complete Vanilla Greek Yogurt
              </h1>
              <div className="flex px-4 text-[6px] md:text-[16px]">
                <p className=" text-gray-600">By :</p>{" "}
                <span className="text-green-600">NestFood</span>
              </div>
              <div className="flex px-4 mb-2 justify-between items-center">
                <div className="flex gap-3  md:text-[16px] text-[6px]">
                  <span className="font-semibold text-green-700 ">$40.5 </span>
                  <del className="text-gray-600 "> $43.28</del>
                </div>
                <div className="flex items-center bg-[#DEF9EC] hover:text-black transition-all hover:p-2 p-1 rounded text-[#3BB77E]  md:text-[16px] text-[6px]">
                  <ShoppingCartIcon className="w-[7px]" />
                  <p>Add</p>
                </div>
              </div>
              <div className="w-[100px] mx-auto text-center">
                <Box sx={{ width: 100 }}>
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                </Box>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DayliSels;
