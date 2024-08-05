'use client'
import { useEffect, useRef } from 'react';
import { projects } from './data';
import gsap from 'gsap';

const Slider = () => {
  const slidesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.slide', {
        xPercent: -100 * (projects.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slidesRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          end: () => `+=${slidesRef.current.offsetWidth}`
        },
      });
    }, slidesRef);

    return () => ctx.revert();
}, []);

  return (
    <div ref={slidesRef} className="overflow-hidden relative w-full h-full">
      <div className="flex">
        {projects.map((project, index) => (
          <div
            key={index}
            className="slide flex-none w-full h-full flex flex-col items-center justify-center bg-gray-400 p-4"
          >
            <img src={project.img} alt={project.community} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{project.community}</h2>
            <p className="text-lg">{project.location}</p>
            <p className="text-lg">{project.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
