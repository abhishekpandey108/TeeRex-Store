import React, { useState, createContext } from "react";
  
export const Context = createContext();


export const ContextProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);
  
    return (
        <Context.Provider value={{ search, setSearch, selected, setSelected }}>
            {children}
        </Context.Provider>
    );
};