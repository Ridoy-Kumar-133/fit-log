import React, { useContext } from 'react';
import { GymContext } from '../gryComtext';

const SaveButton = ({data}) => {

    const {id} = data;

    const {saveLater, setSavelater} = useContext(GymContext);

    const handleDelete = () =>{
        setSavelater(
            saveLater.filter( item => item.id !== id )
        );
    }

    return (
         <button 
         onClick={handleDelete}
         className="text-gray-500 text-lg btn">
                    ×
                </button>
    );
};

export default SaveButton;