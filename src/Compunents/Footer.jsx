import React from "react";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SendIcon from "@mui/icons-material/Send";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AddCallIcon from '@mui/icons-material/AddCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <>
      <section className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-6 gap-2 grid-cols-1 md:text-start text-center"> 
            {/* first grid */}
          <div >
            <div>
              <img src="/img/logo.png" alt="" />
              <p className="py-2 font-semibold"> Awesome grocery store website template</p>
              <div className="flex  gap-2">
                <LocationPinIcon  className="text-green-400"/> <p className="text-[14px] text-gray-800">Address: 5171 W Campbell Ave</p>
              </div>
              <p className="text-[14px] text-gray-700 py-2">undefined Kent, Utah 53127 United States</p>
              <div  className="flex ">
                <HeadphonesIcon  className="text-green-400" /> <p  className="text-[14px] text-gray-800">Call Us:(+91)-540-025-124553</p>{" "}
              </div>
              <div  className="flex  gap-">
                <SendIcon   className="text-green-400"/> <p  className="text-[14px] text-gray-800">Email:sale@Nest.com</p>
              </div>
              <div className="flex py-3 gap-2">
                <AccessAlarmsIcon  className="text-green-400" />
                <p   className="text-[14px] text-gray-800">Hours:10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
          </div>
        {/* seceond grid */}
          <div>
            <div className="px-3">
                <h1 className="font-bold text-gray-500 text-2xl py-3">Company</h1>
                <ul className="text-gray-600 gap-2 flex flex-col">
                    <li>About Us</li>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                    <li>Support Center</li>
                    <li>Careers</li>
                </ul>
            </div>
          </div>




     {/* third grid */}
           <div>
            <div className="px-3">
                <h1 className="font-bold text-gray-500 text-2xl py-3">Account</h1>
                <ul className="text-gray-600 gap-2 flex flex-col">
                    <li>Sign In</li>
                    <li>View Cart</li>
                    <li>My Wishlist</li>
                    <li>Track My Order</li>
                    <li>Help Ticket</li>
                    <li>Shipping Details</li>
                    <li>Compare products</li>
                </ul>
            </div>
          </div>




      {/* fourth grid */}
              <div>
            <div className="px-3">
                <h1 className="font-bold text-gray-500 text-2xl py-3">Corporate</h1>
                <ul className="text-gray-600 gap-2 flex flex-col">
                    <li>Promotions</li>
                    <li>Accessibility</li>
                    <li>Our Suppliers</li>
                    <li>Farm Careers</li>
                    <li>Farm Business</li>
                    <li>Affiliate Program</li>
                    <li>Become a Vendor</li>
                </ul>
            </div>
          </div>


 {/* five grid */}
              <div>
            <div className="px-3">
                <h1 className="font-bold text-gray-500 text-2xl py-3">Popular</h1>
                <ul className="text-gray-600 gap-2 flex flex-col">
                    <li>Milk & Flavoured Milk</li>
                    <li>Butter and Margarine</li>
                    <li>Eggs Substitutes</li>
                    <li>Marmalades</li>
                    <li>Sour Cream and Dips</li>
                    <li>Tea & Kombucha</li>
                    <li>Cheese</li>
                </ul>
            </div>
          </div>




         
 {/* last grid */}
        <div>
            <div className="px-3">
                <h1 className="font-bold text-gray-500 text-2xl py-3">Follow Us</h1>
                     <div className="flex md:flex-col w-full justify-center gap-5  md:gap-3 mx-auto text-center items-center ">
               <a  href="#"> <AddCallIcon className="hover:w-2 hover:scale-200  transition-all hover:text-gray-500" /></a>
               <a href="#"> <LinkedInIcon className="hover:w-2 hover:scale-200  transition-all hover:text-gray-500" /></a>
                <a href="#"> <WhatsAppIcon className="hover:w-2 hover:scale-200  transition-all hover:text-gray-500" /></a>
                 <a href="#"><FacebookIcon className="hover:w-2 hover:scale-200  transition-all hover:text-gray-500" /></a>
                 <a href="#"><TwitterIcon className="hover:w-2 hover:scale-200  transition-all hover:text-gray-500" /></a>
                </div>
            </div>
        </div>
        </div>
 
        
        <div className="border-t-2 flex justify-between items-center py-5 mt-4 ">
            <div className="text-gray-600 text-[10px] md:text-[16px]"><p>© 2025, Nest - HTML Ecommerce Template
All rights reserved</p></div>
            <div className="flex gap-4 text-center  ">
                <div className="gap-2" ><AddCallIcon className="md:scale-200  text-green-500" /> <span className="text-gray-600 text-2xl text-[6px] md:text-[16px]">+142954255</span></div>
                <div className=" gap-2"><AddCallIcon  className="w-2  md:scale-200 text-green-500"/> <span className="text-gray-600 text-2xl  text-[6px] md:text-[16px]">+142954255</span></div>
            </div>
        </div>


      </section>
    </>
  );
}

export default Footer;
