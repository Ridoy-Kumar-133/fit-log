'use client';
import React, { useContext } from 'react';
import { GymContext } from '../gryComtext';
import LibrarysCard from './LibrarysCard';



const Library = () => {

 const allData = useContext(GymContext);

    return (
        <div className=''>
            
            <div className='w-[90%] m-auto'>
                <div>
                    <h1 className='text-2xl font-bold'>THE LIBRARY</h1>
                </div>
                <div>
                    <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
                </div>
            </div>
               
            <div className='grid grid-cols-3 gap-4 w-[90%] m-auto mt-5'>
                 {
                  allData.map( data => <LibrarysCard key={data.id} data = {data} ></LibrarysCard> )  
                }
            </div>

        </div>
    );
};

export default Library;