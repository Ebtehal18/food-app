import React from 'react'

export default function HeadLineCards() {
  return <div className='max-w-screen-xl mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    <div className='relative rounded-xl'>
        <img src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" className='w-full rounded-xl max-h-[160px] object-cover md:max-h-[200px]' />
        {/* overlay */}
        <div className='absolute h-full top-0 w-full bg-black/50 rounded-xl text-white'>
            <p className='text-2xl font-bold px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='absolute bottom-4 border-white bg-white text-black mx-2'>Order Now</button>
        </div>
    </div>
    <div className='relative rounded-xl'>
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" className='w-full rounded-xl max-h-[160px] object-cover md:max-h-[200px]' />
        {/* overlay */}
        <div className='absolute h-full top-0 w-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
        <p className='px-2'>Added Daily</p>
            <button className='absolute bottom-4 border-white bg-white text-black mx-2'>Order Now</button>
        </div>
    </div>
    <div className='relative rounded-xl'>
        <img      src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="/" className='w-full rounded-xl max-h-[160px] object-cover md:max-h-[200px]' />
        {/* overlay */}
        <div className='absolute h-full top-0 w-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
        <p className='px-2'>Tasty Treats</p>
            <button className='absolute bottom-4 border-white bg-white text-black mx-2'>Order Now</button>
        </div>
    </div>
  
  </div>
}
