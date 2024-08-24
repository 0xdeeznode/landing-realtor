'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const Why = () => {
  const t = useTranslations('Why');

  useEffect(() => {
    // GSAP animation for the golden lines
    gsap.utils.toArray('.golden-line').forEach((line) => {
      const duration = Math.random() * 5 + 8;
      const delay = Math.random() * 5;

      gsap.to(line, {
        x: '250vw', // Moves the line slightly beyond the screen to avoid awkward disappearance
        repeat: -1, // Infinite loop
        duration: duration, // Random duration between 5 and 10 seconds
        ease: 'power1.inOut', // Easing for smoother, wind-like motion
        delay: delay, // Random delay before the animation starts
      });
    });
  }, []);

  return (
    <section className='relative flex flex-col w-full h-screen mb-6 justify-center items-center'>
      {/* Background golden lines */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className='golden-line absolute h-[1px] w-[150px] md:w-[250px] bg-gradient-to-r from-gold to-gold-light opacity-75'
            style={{ top: `${Math.random() * 100}%`, left: `-${Math.random() * 50 + 150}px` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative flex w-full justify-between items-center p-2 md:px-6 z-10'>
        <div className='flex flex-col w-[46%] gap-4 md:gap-8'>
          <div className='flex flex-col md:items-center gap-1 glass-effect p-2 text-white'>
            <h3 className='text-xl md:text-3xl font-bona'>{t('title-1')}</h3>
            <p className='font-titillium text-md md:text-xl'>{t('body-1')}</p>
          </div>
          <div className='flex flex-col md:items-center gap-1 glass-effect p-2 text-white'>
            <h3 className='text-xl md:text-3xl font-bona'>{t('title-2')}</h3>
            <p className='font-titillium text-md md:text-xl'>{t('body-2')}</p>
          </div>
          <div className='flex flex-col md:items-center gap-1 glass-effect p-2 text-white'>
            <h3 className='text-xl md:text-3xl font-bona'>{t('title-3')}</h3>
            <p className='font-titillium text-md md:text-xl'>{t('body-3')}</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-12 w-[50%] md:w-[45%]'>
          <header className='w-full text-center text-white font-bona text-[40px] md:text-5xl leading-tight text-shadow-md'><h3>{t('header')}</h3></header>
          <Image
            src='/desktop-why.jpg'
            alt='Why Invest in Dubai'
            width={500}
            height={500}
            className='rounded-md object-cover shadow-xl transition-transform transform duration-700 hover:scale-110 hidden md:block'
          />
          <Image
            src='/mob-why.jpg'
            alt='Why Invest in Dubai'
            width={200}
            height={500}
            className='rounded-md object-cover md:hidden'
          />
        </div>
      </div>
    </section>
  );
}

export default Why;
