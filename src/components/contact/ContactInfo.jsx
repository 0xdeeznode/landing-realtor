import Image from 'next/image'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className=' flex w-full p-1 gap-4 border rounded-r-md'>
        <Image
          src='/Alan-1.jpg'
          alt='Real Estate Agent Alan Profile Picture; Alan has black hair, a big smile, and wearing a blue shirt'
          width={150}
          height={90}
          className='rounded-full'
        />
        <div className='flex flex-col gap-1'>
          <div id='whatsapp' className='flex text-white gap-2'>
            <i class="bi bi-telephone-outbound-fill"></i>
            <p>+971 52 133 9317</p>
          </div>
          <div id='email' className='flex text-white gap-2'>
            <i class="bi bi-envelope-at-fill"></i>
            <p>alduran.uae@gmail.com</p>
          </div>
        </div>     
    </div>
  )
}

export default ContactInfo