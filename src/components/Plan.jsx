import React from 'react'
import { PricingTable } from '@clerk/clerk-react' 
import "../index.css"

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
       <div className='text-center'>
           <h2 className='text-slate-700 text-[42px] font-semibold'>Choose Your plan</h2>
           <p className='text-gray-500 max-w-lg mx-auto'>Start for free and scale up as you grow. Find the pefrect plann for your content creation needs</p>
       </div>
        <div className='mt-14 max-sm:mx-8 hover:translate-y-2 transition-300s cursor-pointer '>
             <PricingTable/>
        </div>
    </div>
  )
}

export default Plan
