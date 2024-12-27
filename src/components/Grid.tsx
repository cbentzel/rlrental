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

  const getBorderStyle = (rowIndex: number, cellIndex: number): React.CSSProperties => {
    const cellValue = grid[rowIndex][cellIndex];
    const borderStyle: React.CSSProperties = {
      borderColor: heightColors[cellValue]
    };


    // Check top cell
    if (rowIndex > 0 && grid[rowIndex - 1][cellIndex] !== cellValue) {
      borderStyle.borderTop = '1px solid black';
    } else if (rowIndex === 0) {
      borderStyle.borderTop = '2px solid black';
    }

    // Check bottom cell
    if (rowIndex < grid.length - 1 && grid[rowIndex + 1][cellIndex] !== cellValue) {
      borderStyle.borderBottom = '1px solid black';
    } else if (rowIndex === grid.length - 1) {
      borderStyle.borderBottom = '2px solid black';
    }

    // Check left cell
    if (cellIndex > 0 && grid[rowIndex][cellIndex - 1] !== cellValue) {
      borderStyle.borderLeft = '1px solid black';
    } else if (cellIndex === 0) {
      borderStyle.borderLeft = '2px solid black';
    }

    // Check right cell
    if (cellIndex < grid[rowIndex].length - 1 && grid[rowIndex][cellIndex + 1] !== cellValue) {
      borderStyle.borderRight = '1px solid black';
    } else if (cellIndex === grid[rowIndex].length - 1) {
      borderStyle.borderRight = '2px solid black';
    }

    return borderStyle;
  };

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="grid-cell"
              style={{
                backgroundColor: heightColors[cell],
                ...getBorderStyle(rowIndex, cellIndex)
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