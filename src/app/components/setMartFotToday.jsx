import React, { useContext, useState } from 'react';
import { GymContext } from '../gryComtext';
import { toast } from 'react-toastify';

const SetMartForToday = ({data}) => {

    const {id} = data;

    const {done, setDone} = useContext(GymContext);

    const handleClick = () =>{
        setDone([...done,id]);
        toast.success("✓ Mark as Done");
    }

    if(done.includes(id)) {
        return null;
    }

    return (
         <button 
         onClick={() => handleClick() }
                className="bg-[#C2F800] text-black rounded-full px-4 py-2 text-xs font-semibold btn ">
                    ✓ Mark as Done
                </button>
    );
};

export default SetMartForToday;