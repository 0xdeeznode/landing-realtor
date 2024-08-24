import {useTranslations} from 'next-intl';
import React from 'react'
import Image from 'next/image'

const Why = () => {
  const t = useTranslations('Why');
  return (
    <section className='flex flex-col w-full h-screen justify-center items-center p-2 md:px-6'>
      {/* First Card */}
      <div className='flex w-full justify-between items-center'>
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
          <header className='w-full text-center text-white font-bona text-[40px] leading-tight'><h3>{t('header')}</h3></header>
          <Image
          src='/desktop-why.jpg'
          alt='Why Invest in Dubai'
          width={500}
          height={500}
          className='rounded-md object-cover hidden md:block'
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
  )
}

export default Why