import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen]= useState(false)
  const togleBtn=()=>{
    setOpen(!open)
  }
  return (
    <section className='w-full mt-2 top-0 fixed'>

     <nav className='md:flex justify-around items-cent hidden  mx-auto'>
      <div><img className='' src="img/logo.png" alt="" /></div>
      <div className='flex justify-around items-center gap-5 font-semibold font-mono '>
      <Link onClick={()=>setOpen(false)} to={'/'}>Home </Link>
       <Link onClick={()=>setOpen(false)} to={'/About'}>About </Link>
       <Link onClick={()=>setOpen(false)} to={'/Shop'}>Shop </Link>
       <Link onClick={()=>setOpen(false)} to={"/Blog"}>Blog </Link>
       <Link onClick={()=>setOpen(false)} to={"/Contruct"}>Contruct </Link>
     
      </div>
      <div className='flex justify-around items-center gap-3'>
        <ShoppingCartIcon />
        <AccountCircleIcon />

      </div>
     </nav>


{/* mobile icon headar */}

<nav className='md:hidden flex justify-between w-[90%] mx-auto  items-center '>
  <div> <img className='w-[50%]' src="img/logo.png" alt="logo" /> </div>
  <div> <button onClick={ togleBtn}> {open ?<CloseIcon  /> : <MenuIcon />  } </button> </div>
</nav>
{
  open && (
    <div className='md:hidden flex flex-col gap-y-2 w-[50%] mx-auto text-center bg-gray-500 p-6 rounded-2xl '>
       <Link onClick={()=>setOpen(false)} to={'/'}>Home </Link>
       <Link onClick={()=>setOpen(false)} to={'/About'}>About </Link>
       <Link onClick={()=>setOpen(false)} to={'/Shop'}>Shop </Link>
       <Link onClick={()=>setOpen(false)} to={"/Blog"}>Blog </Link>
       <Link onClick={()=>setOpen(false)} to={"/Contruct"}>Contruct </Link>
     
</div>

  )
}
    </section>
  )
}

export default Header