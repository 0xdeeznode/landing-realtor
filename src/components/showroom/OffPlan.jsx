'use client'
import { useEffect, useRef } from 'react';
import { projects } from './data';

const Slider = () => {
  const slidesRef = useRef(null);

  return (
    <div ref={slidesRef} className="overflow-hidden relative w-full h-full border border-red-500">
      <h2 className='z-10'>Off Plan Projects</h2>
      <div className="flex">
        {projects.map((project, index) => (
          <div
            id='card'
            key={index}
            className="slide w-full h-full flex-none flex flex-col items-center justify-center rounded-md p-4"
          >
            <img src={project.img} alt={project.community} className="absolute inset-0 w-[90%] h-[90%] object-cover z-0" />
            <div className='flex flex-col items-center gap-2 p-3 glass-effect font-titillium z-10'>
              <h2 className="text-xl font-bold">{project.community}</h2>
              <p className="text-md">📍{project.location}</p>
              <div className='grid grid-cols-2 gap-2'>
                  {project.price.map((price, currency_index) => (
                      <p key={currency_index} className="text-md">{price.symbol} | {price.value}</p>
                  ))}
              </div>
              <button className="mt-4 px-4 py-2 glass-effect z-10">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
