import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
    const [selectedCount, setSelectedCount] = useState(0);

    const handleCellClick = (isCellSelected) => {
        setSelectedCount((prevCount) => (isCellSelected ? prevCount + 1 : prevCount - 1));
    };

  return (
        <GridContext.Provider value={{ selectedCount, handleCellClick }}>
            {children}
        </GridContext.Provider>
    );
};