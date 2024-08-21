'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NotFound = () => {
  const titleRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation on page load
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
    );
  }, []);

  // Function to make the button move away from the cursor
  const handleMouseMove = (event) => {
    const button = buttonRef.current;
    const { clientX, clientY } = event;
    const { left, top, width, height } = button.getBoundingClientRect();

    const offsetX = (clientX - left - width / 2) / width;
    const offsetY = (clientY - top - height / 2) / height;

    gsap.to(button, {
      x: offsetX * 40,
      y: offsetY * 40,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <div className='flex w-screen h-screen flex-col gap-4 justify-center items-center text-white bg-black'>
      <h1 ref={titleRef} className='text-5xl font-bona'>
        404 - Page Not Found
      </h1>
      <p ref={messageRef} className='text-2xl font-titillium text-center'>
        Oops! The page you are looking for does not exist.
      </p>
      <a
        ref={buttonRef}
        href="/"
        className='text-xl font-titillium text-black bg-gold px-2 py-1 rounded-md shadow-md hover:shadow-2xl cursor-pointer'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        return home
      </a>
    </div>
  );
};

export default NotFound;
