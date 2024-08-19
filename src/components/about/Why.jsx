import React from 'react'
import { whyInvestInDubai } from './data'
import Image from 'next/image'

const Why = () => {
  return (
    <div className='flex w-full justify-between px-4 py-4 md:px-10'>
        <div className='flex flex-col w-[45%] gap-2 text-white'>
            <h3 className='text-2xl font-bona'>Why Invest in Dubai?</h3>
            <p className='font-titillium'>{whyInvestInDubai}</p>
        </div>
        <Image 
        src='/desktop-why.jpg' 
        alt='Why Invest in Dubai' 
        width={500}
        height={500}
        className='rounded-md object-cover hidden md:block'         
        />
        <Image 
        src='/mob-why.jpg' 
        alt='Why Invest in Dubai' 
        width={200}
        height={500}
        className='rounded-md object-cover md:hidden'         
        />
    </div>
  )
}

export default Why