import { bestOffers } from '@/data'
import React from 'react'
import BestOfferCard from './BestOfferCard'


const BestOffers = () => {
  return (
    <div className='flex flex-col gap-y-[24px]  relative  h-max '>
    <div className='flex justify-between items-center w-full'>
        <h1 className='text-gray-700 font-[500] '>Best Offers</h1>
        <div className='flex gap-x-[12px] cursor-pointer text-gray-400 text-[12px] '>
          View All
        </div>
    </div>
    <div className="overflow-scroll scroll-hidden " >
        <div className='flex gap-x-[24px] w-max  '>
            
      {
        bestOffers.map((trend, index)=> (
            <BestOfferCard
            key={index}
            image={trend.image}
            header={trend.header}            
            location={trend.location}
            price={trend.price}
        />
        ))
      }
        </div>
    </div>

    
</div>
  )
}

export default BestOffers
