'use client';
import React, {createContext, useState} from 'react';

export const GymContext = createContext([]);

const GymContextProvider = ({ children }) => {

  const [todaysPlan, setTodaysPlan] = useState([]);
  const [saveLater, setSavelater] = useState([]);
  const [done,setDone] = useState([]);
  

  const data = {
    todaysPlan,
    setTodaysPlan,
    saveLater,
    setSavelater,
    done,
    setDone
  }


  return (
    <GymContext.Provider value={data}>
      {children}
    </GymContext.Provider>
  );
};

export default GymContextProvider;