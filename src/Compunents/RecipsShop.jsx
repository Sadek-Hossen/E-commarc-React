import React from 'react'
import { Link } from 'react-router-dom'

const imgInf =[
    {img:"shop (1).png"
    ,subpera :"Side Dish",
    title:"The Intermediate Guide to Healthy Food",
    date:'25 April 2025',
    view:'126K Views',
    minit:"mins read",
     link:'./Blog.jsx'},
    
    {img:"shop (2).png"
    ,subpera :"Soups and Stews",
    title:"Summer Quinoa Salad Jars with Lemon Dill",
    date:'25 April 2025',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},
    

    {img:"shop (3).png"
    ,subpera :"Salad",
    title:"Caprese Chicken with Smashed Potatoes",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (4).png"
    ,subpera :"Dessert",
    title:"Harissa Chickpeas with Whipped Feta",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (5).png"
    ,subpera :"Breakfast",
    title:"Almond Butter Chocolate Chip Zucchini Bars",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},
    

    {img:"shop (6).png"
    ,subpera :"Vegan",
    title:"Smoky Beans & Greens Tacos with Aji Verde",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (7).png"
    ,subpera :"Gluten Free",
    title:"Sticky Ginger Rice Bowls with Pickled Veg",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (8).png"
    ,subpera :"Side Dish",
    title:"Creamy Garlic Sun-Dried Tomato Pasta",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (9).png"
    ,subpera :"Dairy Free",
    title:"The Absolute Easiest Spinach and Pizza",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (10).png"
    ,subpera :"Salad",
    title:"Sticky Ginger Rice Bowls with Pickled",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (11).png"
    ,subpera :"Soups",
    title:"The Best Soft Chocolate Chip Cookies",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (12).png"
    ,subpera :"Vegetarian",
    title:"Baked Mozzarella Chicken Rolls",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},
    

    {img:"shop (13).png"
    ,subpera :"Dessert",
    title:"The Best Avocado Egg Salad",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (14).png"
    ,subpera :"Vegetarian",
    title:"The litigants on the screen are not actors",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},

    {img:"shop (15).png"
    ,subpera :"Vegetarian",
    title:"The litigants on the screen are not actors",
    date:'25 April 2024',
    view:'126k Views',
    minit:"4 mins read",
    link:'./Blog.jsx'},
    
]



function RecipsShop() {
  return (
    <>
   <section className="grid md:grid-cols-4 grid-cols-1 z-10">
      <div className="col-span-3 grid md:grid-cols-3 justify-around items-center">
        {imgInf.map((item, id) => (
          <div
            key={id}
            className="relative max-h-[300px] z-5 p border-gray-400 border rounded my-3 mx-3 hover:scale-105 transition duration-300 group overflow-hidden"
          >
            <Link to="/Blog">
              <img
                src={item.img}
                alt="img"
                className="w-[80%] mx-auto"
              />
              <p className="text-center text-gray-500 font-semibold py-2">
                {item.subpera}
              </p>
              <h1 className="text-xl font-semibold text-center">{item.title}</h1>
              <div className="text-[10px] gap-3 px-2 justify-around mb-2 text-gray-600 flex">
                <p>{item.date}</p>
                <p>{item.view}</p>
                <p>{item.minit}</p>
              </div>

              {/* Hover Overlay (go) */}
              <div className="absolute inset-0 bg-black/70 flex justify-center items-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                Go to Blog
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="col-span-1  mx-2">
   <div className='shadow-2xl shadow-current rounded-2xl p-3'>
      <div  className=' '><h1 className='text-gray-600 font-semibold  text-2xl   '>Category</h1>
      <hr className=' mt-3 border-2 border-green-500' />
      <div className='w-full flex flex-col mt-4 gap-3'>
        <img src="item (1).png" alt="" />
        <img src="item (2).png" alt="" />
        <img src="item (1).png" alt="" />
        <img src="item (4).png" alt="" />
        <img src="item (5).png" alt="" />
        <img src="item (6).png" alt="" />
      </div>
      </div>
    
    </div> 


   <div className='mt-15 shadow-2xl shadow-current rounded-2xl p-3'>
      <div  className=' '><h1 className='text-gray-600 font-semibold  text-2xl   '>Trending Now</h1>
      <hr className=' mt-3 border-2 border-green-500' />
      <div className='w-full flex flex-col mt-4 gap-3'>
      <div className='border-b-2 py-2 flex justify-between items-center mt-3 border-gray-300 '>
       <div> <img src="vagitabl (7).png" alt="" className='w-[60%]' /></div>
       <div>
      <h1 className='text-xl text-green-400 font-semibold '>Chen Cardigan</h1>
       <p className='text-gray-400 font-semibold'>$99.50</p>


       </div>
     </div>
      <div className='border-b-2 py-2 flex justify-between items-center mt-3 border-gray-300 '>
       <div> <img src="vagitabl (3).png" alt="" className='w-[60%]' /></div>
       <div>
      <h1 className='text-xl text-green-400 font-semibold '>Chen Cardigan</h1>
       <p  className='text-gray-400 font-semibold'>$90.50</p>


       </div>
     </div>
      <div className='border-b-2 py-2 flex justify-between items-center mt-3 border-gray-300 '>
       <div> <img src="vagitabl (1).png" alt="" className='w-[60%]' /></div>
       <div>
      <h1 className='text-xl text-green-400 font-semibold '>Chen Cardigan</h1>
       <p  className='text-gray-400 font-semibold'>$69.50</p>


       </div>
     </div>
      <div className='border-b-2 py-2 flex justify-between items-center mt-3 border-gray-300 '>
       <div> <img src="vagitabl (5).png" alt="" className='w-[60%]' /></div>
       <div>
      <h1 className='text-xl text-green-400 font-semibold '>Chen Cardigan</h1>
       <p  className='text-gray-400 font-semibold'>$79.50</p>


       </div>
     </div>
      <div className='border-b-2 py-2 flex justify-between items-center mt-3 border-gray-300 '>
       <div> <img src="vagitabl (6).png" alt="" className='w-[60%]' /></div>
       <div>
      <h1 className='text-xl text-green-400 font-semibold '>Chen Cardigan</h1>
       <p  className='text-gray-400 font-semibold'>$40.50</p>


       </div>
     </div>
      </div>
      </div>
    
    </div> 
      </div>


      <div className='hover:scale-95 transition-all '>
        <button className='p-2 bg-green-600 mt-16 hover:-rotate- mb-3 hover:-rotate-10 ml-4 md:ml-7 py-2 hover:px-3 hover:py-1  px-4 rounded text-white transition-all duration-300 hover:shadow-blue-600 shadow-lg shadow-yellow-800 hover:bg-blue-950 font-semibold  '>See All</button>
      </div>
    </section>
     
    </>
  )
}

export default RecipsShop