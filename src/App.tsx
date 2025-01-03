import React from 'react';
import Grid from './components/Grid';

const App: React.FC = () => {
  // Create a sample 20x20 grid with random integers between 0 and 5
  const generateInitialGrid = (): number[][] => {
    const grid: number[][] = [];
    for (let i = 0; i < 20; i++) {
      const row: number[] = [];
      for (let j = 0; j < 20; j++) {
        row.push(Math.floor(Math.random() * 6)); // Random integers between 0-5
      }
      grid.push(row);
    }
    return grid;
  };

  const initialGrid = generateInitialGrid();

  return (
    <div className="App">
      <h1>Grid Visualizer</h1>
      <Grid grid={initialGrid} />
    </div>
  );
}

export default App;