import React from 'react';
import './Grid.css';

const Grid = ({ grid }) => {
  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="grid-cell"
              // Color intensity based on the value
              style={{
                backgroundColor: `rgba(0, 123, 255, ${cell / 100})`
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid; 