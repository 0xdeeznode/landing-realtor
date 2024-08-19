'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from '../header/Header';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the title
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, []);
  {/* Remember change h-screen to h-full */}
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center">
      {/* Header */}
      <Header />
      
      {/* Video Background */}
      {/* Desktop Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full hidden md:block object-cover pointer-events-none"
      >
        <source src="/desktop-hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden pointer-events-none"
      >
        <source src="/mob-hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative text-white px-3">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-semibold font-bona">Find Your Dream Home in Dubai</h1>
        <p className="mt-4 text-lg md:text-xl font-titillium px-10">Explore luxury properties and make your move today.</p>
        <button className="mt-8 px-6 py-3 text-white rounded-lg font-robotoslab glass-effect">View Listings</button>
      </div>
    </section>
  );
};

export default Hero;
