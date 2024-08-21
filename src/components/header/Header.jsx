'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default to English
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.to(overlayRef.current, { opacity: 0.5, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(menuRef.current, { x: '-100%', duration: 0.5, ease: 'power3.in' });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power3.in' });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    gsap.fromTo(
      menuRef.current,
      { rotateY: 0 },
      { rotateY: 180, duration: 0.6, ease: 'power2.out', onComplete: () => {
        setLanguage(language === 'en' ? 'es' : 'en');
        gsap.to(menuRef.current, { rotateY: 0, duration: 0.6, ease: 'power2.out' });
      } }
    );
  };

  return (
    <header className='absolute top-2 flex w-full justify-between items-center bg-transparent text-white py-3 md:py-1 px-4 z-50'>
      <button id='nav-menu' onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
      <div className='flex flex-col items-center'>
        <h3 className='text-xl md:text-2xl font-semibold md:font-normal font-bona'>ALDURAN</h3>
        <h1 className='text-center text-md font-robotoslab'>Dubai Real Estate Investments</h1>
      </div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>

      {/* Slide-in Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#111111] text-white z-40`}
        style={{ transform: 'translateX(-100%)' }}
      >
        <div className='flex justify-between p-4'>
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>

          {/* Language Toggle Button */}
          <button onClick={toggleLanguage} className="flex items-center">
            {language === 'en' ? (
              <img src="/english-flag.png" alt="English" className="w-7 h-5" />
            ) : (
              <img src="/spanish-flag.png" alt="Spanish" className="w-7 h-5" />
            )}
          </button>
        </div>
        <nav className='flex flex-col items-center p-4 space-y-4'>
          <a href="#home" className='text-lg hover:text-gray-400'>Home</a>
          <a href="#about" className='text-lg hover:text-gray-400'>About</a>
          <a href="#services" className='text-lg hover:text-gray-400'>Services</a>
          <a href="#contact" className='text-lg hover:text-gray-400'>Contact</a>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-30"
        style={{ opacity: 0, pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}

export default Header;
