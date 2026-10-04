import React from 'react';
import footerlogo from '@/app/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
    <footer className="bg-neutral  text-neutral-content items-center p-5 mt-15 flex flex-col justify-between sm:flex-row ">
  
    <div className='flex flex-col font-bold sm:flex-row gap-2'>
      <div className='mx-2'>
        <Image
      src={footerlogo}
      alt='Fit logo'
      ></Image>
      </div>
      <div>
        <h4 className='font-oswald'>FITLOG</h4>
      </div>
    </div>

    <div className='text-[#6B7280]'>
       © 2026 FitLog — Workout Library. Train hard, log honest.
    </div>
   
   </footer>
    );
};

export default Footer;