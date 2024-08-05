'use client'
import { useEffect, useRef } from 'react';
import { projects } from './data';
import gsap from 'gsap';

const Slider = () => {
  const slidesRef = useRef(null);

  return (
    <div ref={slidesRef} className="overflow-hidden relative w-full h-full">
      <div className="flex">
        {projects.map((project, index) => (
          <div
            key={index}
            className="slide flex-none w-full h-full flex flex-col items-center font-titillium justify-center bg-gray-400 p-4"
          >
            <img src={project.img} alt={project.community} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{project.community}</h2>
            <p className="text-lg">{project.location}</p>
            {project.price.map((price, currency_index) => (
                <div key={currency_index} className='flex'>
                    <p className="text-lg">{price.symbol} | {price.value}</p>
                </div>
            ))}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
