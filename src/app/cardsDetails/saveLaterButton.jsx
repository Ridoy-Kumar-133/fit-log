'use client';
import React, { useContext } from "react";
import { GymContext } from "../gryComtext";

const SaveLater = ({data}) => {

    const {saveLater, setSavelater } = useContext(GymContext);

    const alreadySaved = saveLater.find( item => item.id === data.id);
    
        const handleOnclick = () =>{

            if(alreadySaved){
                return;
            }
              setSavelater([...saveLater,data]);
            

             
        }
    

    return (
    <button
    onClick={() =>handleOnclick()}
    disabled={alreadySaved}
     className="btn btn-outline">
        Save for later
     </button>
     );
};

export default SaveLater;
