'use client';
import React, { useContext } from "react";
import { GymContext } from "../gryComtext";

const TodaysPlanButton = ({data}) => {

 const {todaysPlan, setTodaysPlan } = useContext(GymContext);

 const alreadyAdded = todaysPlan.find( item => item.id === data.id );

    const handleOnclick = () =>{
         if(alreadyAdded){
            return;
         }
         setTodaysPlan([...todaysPlan,data]);
    }


    return (
        <button
        disabled={alreadyAdded}
        onClick={() => handleOnclick()}
         className="btn bg-[#C2F800] text-black border-none">
            Add to today&apos;s plan
        </button>
    );
};

export default TodaysPlanButton;
