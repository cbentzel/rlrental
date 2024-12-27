import React from 'react';

interface GridProps {
  grid: number[][];
}

const Grid: React.FC<GridProps> = ({ grid }) => {
  // Define colors for each height level
  const heightColors = [
    'rgba(0, 123, 255, 0.1)', // Height 0
    'rgba(0, 123, 255, 0.3)', // Height 1
    'rgba(0, 123, 255, 0.5)', // Height 2
    'rgba(0, 123, 255, 0.7)', // Height 3
    'rgba(0, 123, 255, 0.9)', // Height 4
    'rgba(0, 123, 255, 1.0)'  // Height 5
  ];

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="grid-cell"
              style={{
                backgroundColor: heightColors[cell]
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