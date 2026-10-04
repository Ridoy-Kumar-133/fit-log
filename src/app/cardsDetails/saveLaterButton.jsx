'use client';
import React, { useContext } from "react";
import { GymContext } from "../gryComtext";
import {  Bookmark } from "lucide-react";
import { toast } from "react-toastify";

const SaveLater = ({data}) => {

    const {saveLater, setSavelater } = useContext(GymContext);

    const alreadySaved = saveLater.find( item => item.id === data.id);
    
        const handleOnclick = () =>{

            if(alreadySaved){
                return;
            }
              setSavelater([...saveLater,data]);
              toast.success("Added to Save Later");
            

             
        }
    

    return (
    <button
    onClick={() =>handleOnclick()}
    disabled={alreadySaved}
     className="btn btn-outline">
      <Bookmark size={17} strokeWidth={2} />  Save for later
     </button>
     );
};

export default SaveLater;
