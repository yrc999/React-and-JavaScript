import React, { useContext } from 'react';
import Cell from './Cell.jsx';
import './Grid.css';
import { GridContext } from './GridContext.jsx';

const Grid = () => {
    const { selectedCount, handleCellClick } = useContext(GridContext);

    return (
        <div className="grid">
            <div>
                <p>Count: {selectedCount}</p>
            </div>
            <div className="row">
                <Cell onCellClick={(isSelected) => handleCellClick(isSelected)} />
                <Cell onCellClick={(isSelected) => handleCellClick(isSelected)} />
            </div>
            <div className="row">
                <Cell onCellClick={(isSelected) => handleCellClick(isSelected)} />
                <Cell onCellClick={(isSelected) => handleCellClick(isSelected)} />
            </div>
        </div>
  );
};

export default Grid;