'use client';
import React, { useContext } from "react";
import { GymContext } from "../gryComtext";
import { CalendarPlus, Bookmark } from "lucide-react";
import { toast } from "react-toastify";

const TodaysPlanButton = ({data}) => {

 const {todaysPlan, setTodaysPlan } = useContext(GymContext);

 const alreadyAdded = todaysPlan.find( item => item.id === data.id );

    const handleOnclick = () =>{
         if(alreadyAdded){
            return;
         }
         setTodaysPlan([...todaysPlan,data]);
         toast.success("Added to today's plan")
    }


    return (
        <button
        disabled={alreadyAdded}
        onClick={() => handleOnclick()}
         className="btn bg-[#C2F800] text-black border-none">
         <CalendarPlus size={17} strokeWidth={2} />  Add to today&apos;s plan
        </button>
    );
};

export default TodaysPlanButton;
