
import React, { Suspense, useContext } from 'react';
import LibrarysCard from './LibrarysCard';

const getPromise = async () =>{
   try{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog',
        {
            cache: 'force-cache',
        }
    );
    return res.json();
   }catch(error){
    throw new Error("Did'nt get data.");
   }
}

const Library = async () => {
   

 const allData = await getPromise();

    return (
        <div className=''>
            
            <div className='w-[90%] m-auto'>
                <div>
                    <h1 className='text-2xl font-bold font-oswald '>THE LIBRARY</h1>
                </div>
                <div>
                    <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
                </div>
            </div>
               
           <Suspense fallback={<span className="loading loading-spinner text-primary
            flex items-center justify-center "></span>}>
             <div className='grid grid-cols-1 gap-4 w-[90%] m-auto mt-5 sm:grid-cols-3'>
                 {
                  allData.map( data => <LibrarysCard key={data.id} data = {data} ></LibrarysCard> )  
                }
            </div>
           </Suspense>

        </div>
    );
};

export default Library;