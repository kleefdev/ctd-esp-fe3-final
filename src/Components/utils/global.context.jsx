import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const ContextGlobal = createContext();

export const useContextGlobal = () => useContext(ContextGlobal);

export const ContextProvider = ({ children }) => {
  const [dentistas, setDentist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Dentistas")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, []);

  return (
    <ContextGlobal.Provider value={{ dentistas, setDentist }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;