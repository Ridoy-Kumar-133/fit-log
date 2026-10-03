'use client';
import React, { useContext } from "react";
import { GymContext } from "../gryComtext";

const SaveLater = ({data}) => {

    const {saveLater, setSavelater } = useContext(GymContext);
    
        const handleOnclick = () =>{
             setSavelater([...saveLater,data]);
        }
    

    return (
    <button
    onClick={() =>handleOnclick()}
     className="btn btn-outline">
        Save for later
     </button>
     );
};

export default SaveLater;
