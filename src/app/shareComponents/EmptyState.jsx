import Link from 'next/link';
import React from 'react';

const EmptyState = () => {
    return (
        <div className='h-37.5 flex flex-col items-center justify-center gap-1'>
            <h1 className='font-semibold text-xl'>NOTHING HERE YET</h1>
            <p className='text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>
            <Link
            href='/'
            >
             <button 
             className='bg-[#C2F800] rounded-2xl w-37.5 text-black p-1 my-1 btn '>Go to workouts</button>
            </Link>
        </div>
    );
};

export default EmptyState;