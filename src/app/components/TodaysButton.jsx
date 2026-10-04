import React, { useContext } from 'react';
import { GymContext } from '../gryComtext';
import { toast } from 'react-toastify';

const TodaysButton = ({data}) => {

    const {id} = data;

    const { todaysPlan, setTodaysPlan} = useContext(GymContext);

    const handleDelete = () =>{
        setTodaysPlan(
            todaysPlan.filter( item => item.id !== id )
        );
        toast.success("Remove succesfull");
    }

    return (
         <button 
         onClick={handleDelete}
         className="text-gray-500 text-lg btn">
                    ×
                </button>
    );
};

export default TodaysButton;