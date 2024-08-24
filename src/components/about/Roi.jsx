'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Roi = () => {
  useEffect(() => {
    gsap.from('.stats-text', { y: 50, opacity: 0, duration: 1, stagger: 0.3, ease: 'power3.out' });
  }, []);

  return (
    <section className='relative flex h-screen w-full'>
      {/* Left Side - Dynamic Visuals */}
      <div className='w-1/2 h-full relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10'></div>
        <Image
          src='/roi-1.jpg'
          alt='Dubai Skyline'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0'
        />
        <div className='absolute top-1/3 left-10 text-white z-20'>
          <h2 className='text-4xl font-bold'>6% to 10% Rental Yields</h2>
          <p className='text-xl mt-4'>Among the highest in the world</p>
        </div>
      </div>

      {/* Right Side - Informative Content */}
      <div className='w-1/2 h-full flex flex-col justify-center p-10 bg-gray-800 text-white'>
        <h1 className='text-5xl font-bold gradient-text'>Maximize Your Investment Returns in Dubai</h1>
        <p className='text-xl mt-4'>Discover why Dubai offers some of the highest rental yields and capital appreciation in the world.</p>
        
        <div className='mt-8'>
          <div className='flex items-center stats-text'>
            <Image src='/rental-yield-icon.svg' alt='Rental Yields' width={40} height={40} />
            <div className='ml-4'>
              <h3 className='text-2xl font-semibold'>High Rental Yields</h3>
              <p className='text-lg'>Dubai's rental yields range from 6% to 10%, outperforming many global markets.</p>
            </div>
          </div>

          <div className='flex items-center mt-6 stats-text'>
            <Image src='/capital-appreciation-icon.svg' alt='Capital Appreciation' width={40} height={40} />
            <div className='ml-4'>
              <h3 className='text-2xl font-semibold'>Capital Appreciation</h3>
              <p className='text-lg'>Significant appreciation potential in key areas like Downtown Dubai and Dubai Marina.</p>
            </div>
          </div>
        </div>

        <button className='mt-10 px-8 py-4 bg-yellow-500 text-gray-900 font-bold text-xl rounded-md hover:bg-yellow-600 transition duration-300'>
          Explore Investment Opportunities
        </button>
      </div>
    </section>
  );
};

export default Roi;
