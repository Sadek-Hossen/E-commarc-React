import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee';

const LinkInfo=[
    {img:'link (1).png'},
    {img:'link (2).png'},
    {img:'link (3).png'},
    {img:'link (4).png'},
    {img:'link (5).png'},
    {img:'link (6).png'},
    {img:'link (7).png'},
    {img:'link (8).png'},
    {img:'link (9).png'},
    {img:'link (10).png'},
    {img:'link (11).png'},
   
]

function Featured() {
  return (
    <div className='w-[90%] mx-auto'>
        <div>
            <h1 className='py-7 font-mono text-gray-700 font-semibold md:text-2xl text-xl'>Featured Categories</h1>
        </div>
       <div className='flex gap-5 px-4 '>
       <Marquee 
        direction="right"
          speed={30}
          gradient={false}
          pauseOnHover={true}
          loop={0}>

        {LinkInfo.map((index,id)=>(
            <div key={id} className='' >
           <Link to='/about'> <img src={index.img} alt="" /></Link>
             </div>
        ))}
        </Marquee>
       </div>

    </div>
  )
}

export default Featured