import React from 'react'

export default function Hero() {
  return <>
  <div className='max-w-screen-xl  mx-auto p-4'>
<div className=' relative'>
<img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="hero-img" className='w-full block max-h-[500px] object-cover object-center'/>
<div  className='absolute top-0 start-0 end-0 bottom-0 text-gray-200 bg-black/40 h-full flex flex-col justify-center '>
<h1 className='text-4xl px-4 sm:text-5xl md:text-6xl font-bold'>
    The  <span className='text-orange-500'> Best </span> <br />
    <span className='text-orange-500'> Food </span>Delivered
    </h1>

</div>

</div>
  </div>
  </>
}
