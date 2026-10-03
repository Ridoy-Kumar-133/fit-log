'use client';

import React, {
  createContext,
  useEffect,
  useState
} from 'react';

export const GymContext = createContext([]);

const GymContextProvider = ({ children }) => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const getData = async () => {

      const res = await fetch(
        'https://api.api-store.workers.dev/api/fitlog'
      );

      const result = await res.json();

      setData(result);
    };

    getData();

  }, []);

  return (
    <GymContext.Provider value={data}>
      {children}
    </GymContext.Provider>
  );
};

export default GymContextProvider;