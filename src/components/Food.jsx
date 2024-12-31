import React, { useState } from 'react'
import { data } from '../data/data'

export default function Food() {
    const [food,setFood]=useState(data)
    // filter by type
    function filterByType(cat){
        const filteredFood=data.filter(meal=>meal.category===cat)
        console.log(filteredFood)
        setFood(filteredFood)
    }

// filter by price
function filterByPrice(price){
    const filteredFood=data.filter(meal=>meal.price===price)
    setFood(filteredFood)
}
  return <div className='max-w-screen-xl mx-auto p-4 py-12'>
    <h2 className='text-orange-600 font-bold text-center text-[40px]'>Top Related Menu Items</h2>
    {/* filter row */}
    <div className='flex flex-col lg:flex-row lg:justify-between'>
        {/* type */}
        <div>
            <p className='text-gray-700 font-bold'>Filter Type</p>
            <div className='flex justify-between'>
                <button onClick={()=>setFood(data)} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>All</button>
                <button onClick={()=>filterByType('burger')} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>Burgers</button>
                <button onClick={()=>filterByType('pizza')} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>Pizza</button>
                <button onClick={()=>filterByType('salad')} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>Salads</button>
                <button onClick={()=>filterByType('chicken')} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>Chicken</button>
            </div>
        </div>
        {/* price */}
        <div >
            <p className='text-gray-700 font-bold'>Filter Price</p>
            <div className=' flex justify-between'>
                <button onClick={()=>filterByPrice('$')} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>$</button>
                <button  onClick={()=>filterByPrice('$$')}className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>$$</button>
                <button onClick={()=>filterByPrice('$$$')} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>$$$</button>
                <button  onClick={()=>filterByPrice('$$$$')}className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 transition-all duration-300 text-orange-600'>$$$$</button>
        
            </div>
        </div>
    </div>
    {/* display food */}
    <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 pt-4'>
{food.map((meal)=><div key={meal.id} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
    <img src={meal.image} alt={meal.name}  className='h-[200px] w-full object-cover rounded-t-lg'/>
    <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{meal.name}</p>
        <p><span className='bg-orange-500  text-white p-1 rounded-full'>{meal.price}</span></p>
    </div>
</div>)}
    </div>
  </div>
}
