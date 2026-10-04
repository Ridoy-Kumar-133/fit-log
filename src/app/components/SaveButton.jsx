import React, { useContext } from 'react';
import { GymContext } from '../gryComtext';
import { toast } from 'react-toastify';

const SaveButton = ({data}) => {

    const {id} = data;

    const {saveLater, setSavelater} = useContext(GymContext);

    const handleDelete = () =>{
        setSavelater(
            saveLater.filter( item => item.id !== id )
        );
        toast.success("Delete succesfully");
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