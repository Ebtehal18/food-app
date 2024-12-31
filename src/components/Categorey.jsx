import React from 'react'
import { categories } from '../data/data'

export default function Categorey() {
  return <div className='max-w-screen-xl mx-auto p-4 py-12'>
    <h2 className='text-orange-600 font-bold text-center text-[40px]'>Top Related Menu Items</h2>
<div className='grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-6 py-6 '>
    {categories.map(cat=><div key={cat.id} className='text-center bg-gray-100 rounded-lg p-4 flex  items-center justify-center gap-3' >
<h2 className='font-bold text-xl'>{cat.name}</h2>
<div ><img src={cat.image} alt={cat.name} className='w-20' /></div>
    </div>)}
</div>
  </div>
}
