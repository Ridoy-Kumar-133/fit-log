import React from 'react';
import heroimage from '@/app/assets/banner.png'
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='w-full '>
            <div className='w-[90%]   flex flex-col my-8 bg-gray-950 m-auto  rounded-2xl p-10 items-center justify-center sm:flex-row mt-5 '>

                {/* left div */}
                <div className='w-[70%] h-full flex gap-7 flex-col mb-4'>
                    <div>
                        <p className='text-[10px] font-semibold text-[#C2F800]'>WORKOUT LIBRARY</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold font-oswald'>TRAIN WITH INTENT. LOG<br></br>
                         EVERY SET.</h1>
                    </div>
                    <div>
                       <p className='text-[10px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br></br>
                       into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    </div>
                    <div>
                      <button className=' text-[12px] font- btn btn-success bg-[#C2F800] text-black border-none'>BROWSE WORKOUTS</button>
                    </div>
                </div>

                <div className='w-[30%] flex items-center justify-center mt-1 sm:mt-5'>
                   <Image
                   src={heroimage}
                   alt='img'
                   ></Image>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;