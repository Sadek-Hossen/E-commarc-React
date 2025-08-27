import React from 'react'

function BgHome() {
  return (
    <div className="mt-20 mb-20">
      <section 
        className="w-full h-[900px] overflow-y-scroll relative text-white p-5" 
        style={{
          backgroundImage: "url('bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black/40 p-4 rounded">
          <div className=' mt-20 md:w-[60%] mx-auto  mb-10 bg-blue-700 p-10 rounded-lg'>
<h1 className='md:text-4xl text-xl font-bold py-3 text-center '> Freshness Delivered to Your Doorstep!</h1>
Welcome to our e-commerce platform where you can find fresh vegetables, fruits, meat, dairy, snacks, and all essential grocery items in one place.

<h1 className=' text-2xl py-2 font-semibold text-black'>We provide you with—</h1>
<ul className='gap-y-2 flex flex-col text-[12px] md:text-[16px] '>
<li>✅ Everyday Fresh & Clean Products – Guaranteed quality for your health </li>
<li>✅ Affordable Prices & Exclusive Discounts – Best value within your budget</li>
<li>✅ Fast & Reliable Delivery – Right to your doorstep, on time</li>
<li>✅ Top Rated Brands & Organic Products – Trusted and premium quality</li>
<li>✅ Easy & Secure Shopping Experience – Hassle-free orders & safe payments</li>
</ul>

<p className=' py-4 '>👌 Our mission is to make your everyday shopping simple, fast, and enjoyable.</p>
Order today and enjoy fresh, high-quality products delivered straight to your home! 🛒</div>

          <div className='w-full max-w-[300px] md:max-w-[1200px]  h-[400px] bg-black grid grid-cols-2 md:grid-cols-5 gap-4 p-5 mx-auto  jutifcy-center items-center mb-10 rounded-lg'>
          
            <img className='' src="shop (1).png" alt="" />
            <img className='' src="shop (2).png" alt="" />
            <img className='' src="shop (3).png" alt="" />
            <img className='' src="shop (4).png" alt="" />
            <img className='' src="shop (5).png" alt="" />
          </div>
          <div className='md:w-[60%] mx-auto bg-blue-950  p-6 rounded-lg text-[12px] md:text-[16px]'>
       <h1 className='text-xl md:text-2xl  font-semibold text-center'>   🛒 Service Description</h1>

 <p>We provide a complete online grocery shopping service designed to make your daily life easier. From fresh vegetables, organic fruits, meat, dairy products, snacks, and household essentials, everything you need is just a click away.</p>

<h1 className='text-xl font-bold py-4 '>Our Services Include:</h1>

<ul className='gap-y-2 flex flex-col '>
  <li>✅ Wide Product Selection – Fresh & organic groceries, everyday essentials, and premium brands.</li>
  <li>✅ Fast Delivery – Get your orders delivered quickly and reliably to your doorstep.</li>
  <li>✅ Affordable Prices & Discounts – Competitive pricing with regular offers and deals.</li>
  <li>✅ Secure Online Shopping – Safe payment methods and a user-friendly experience.</li>
  <li>✅ Customer Support – Friendly and responsive team to assist you anytime.</li>
</ul>

<p className='py-3'>
    
With our service, you no longer need to wait in long queues or carry heavy bags.
Shop online, save time, and enjoy freshness delivered to your home! 🌿
</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BgHome