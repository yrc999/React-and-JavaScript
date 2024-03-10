import React, { useContext, useState } from 'react';
import { GridContext } from './GridContext.jsx';
import './Cell.css';

const Cell = () => {
    const { handleCellClick } = useContext(GridContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        const updatedIsSelected = !isSelected;
        setIsSelected(updatedIsSelected);
        handleCellClick(updatedIsSelected);
    };

    const cellClasses = `cell ${isSelected ? 'selected' : ''}`;

    return (
        <div className={cellClasses} onClick={handleClick}>
        </div>
    );
};

export default Cell;