'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the title
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold">Find Your Dream Home in Dubai</h1>
        <p className="mt-4 text-lg md:text-xl">Explore luxury properties and make your move today.</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg">View Listings</button>
      </div>
    </section>
  );
};

export default Hero;
