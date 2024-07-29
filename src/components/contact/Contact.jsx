import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col'>
        <Image 
        src='/Alan-1.jpg'
        alt='Real Estate Agent Alan Profile Picture; Alan has black hair, a big smile, and wearing a blue shirt'
        width={500}
        height={300}
        />
        Contact
    </div>
  )
}

export default Contact