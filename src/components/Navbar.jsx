import React, { useState } from 'react'
import { AiOutlineMenu ,AiOutlineSearch,AiOutlineClose, AiFillTag} from "react-icons/ai";

import { BsCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";


export default function Navbar() {
const [isOpen,setIsOpen]=useState(false)
function handelToggle(){
    setIsOpen(!isOpen)
}
  return <nav className='max-w-screen-xl  mx-auto flex justify-between items-center p-4'>
   <div className='flex items-center gap-2'>

   <div className='cursor-pointer' onClick={handelToggle}>
    <AiOutlineMenu size={30} />
    </div>

    <h1 className='text-2xl sm:text-3xl'>Best <span>Eats</span></h1>

   <div className='hidden lg:flex lg:items-center bg-gray-200 rounded-full  text-[14px]'>
    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
    <p className='p-2'>Pickup</p>
   </div>
   </div>
   {/* search */}
   <div className='flex px-2 bg-gray-200 rounded-full items-center w-[200px] sm:w-[400px] lg:[500px]'>
   <AiOutlineSearch size={25} />
 
   <input type="text" placeholder='Search Food...' className='bg-transparent w-full focus:outline-none p-2'/>
   </div>
   {/* cart  */}
   <button className='md:flex md:items-center bg-black text-white hidden py-2 gap-2'>
   <BsCartFill  size={20} />
  
Cart
   </button>



   {/* mobile  */}
   {/* overlay */}
{isOpen&&   <div className='fixed top-0 start-0 end-0 h-screen w-full bg-black/80  z-10' onClick={()=>setIsOpen(false)}></div>}
   {/* side drawer */}
  <div className={isOpen?'w-[300px] bg-white h-screen start-0 fixed z-20 top-0 duration-500 transition-all':'w-[300px] bg-white h-screen start-[-100%] fixed z-20 top-0 duration-500 transition-all'} >

<div onClick={()=>setIsOpen(false)}>
<AiOutlineClose  className='absolute top-4 end-4 cursor-pointer' size={25} />
</div>

<h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
<div>
    <ul className='p-4 text-gray-800'>
        <li className='text-xl py-3 flex gap-2 items-center'><TbTruckDelivery size={25}/>Orders</li>
        <li className='text-xl py-3 flex gap-2 items-center'><MdFavorite     size={25}/>Favorites</li>
        <li className='text-xl py-3 flex gap-2 items-center'><FaWallet size={25}/>Wallet</li>
        <li className='text-xl py-3 flex gap-2 items-center'><MdHelp size={25}/>Help</li>
        <li className='text-xl py-3 flex gap-2 items-center'><AiFillTag size={25}/>Promotions</li>
        <li className='text-xl py-3 flex gap-2 items-center'><BsFillSaveFill size={25}/>Best Ones</li>
        <li className='text-xl py-3 flex gap-2 items-center'><FaUserFriends size={25}/>Invite Friends</li>
 
     
    </ul>
</div>


   </div>
  </nav>
}
