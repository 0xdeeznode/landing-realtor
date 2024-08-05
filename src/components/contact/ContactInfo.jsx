import Image from 'next/image'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className=' flex w-full p-1 gap-4'>
      <Image
        src='/Alan-1.jpg'
        alt='Real Estate Agent Alan Profile Picture; Alan has black hair, a big smile, and wearing a blue shirt'
        width={120}
        height={70}
        className='rounded-full'
      />
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <div className="flex text-white gap-2" itemscope itemtype="http://schema.org/Organization">
            <i class="bi bi-telephone-outbound-fill" />
            <a href="tel:+971521339317" className="text-white" itemprop="telephone">+971 52 133 9317</a>
          </div>
          <div id="email" className="flex text-white gap-2" itemscope itemtype="http://schema.org/Organization">
            <i class="bi bi-envelope-at-fill"></i>
            <a href="mailto:alduran.uae@gmail.com" className="text-white" itemprop="email">alduran.uae@gmail.com</a>
          </div>
        </div>
        <a href="https://calendly.com/alduran_realestate/property-consultation" target="_blank" className="bg-gold hover:bg-gold-light text-white font-bold font-robotoslab p-2 rounded">
          Schedule Zoom Meeting
        </a>
      </div>     
    </div>
  )
}

export default ContactInfo