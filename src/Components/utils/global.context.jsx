import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const ContextGlobal = createContext();

export const useContextGlobal = () => useContext(ContextGlobal);

export const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, []);

  return (
    <ContextGlobal.Provider value={{ dentists, setDentists }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;