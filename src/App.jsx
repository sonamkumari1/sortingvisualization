import React, { useState } from 'react';
import Header from './components/Header';
import AlgorithmSelector from './components/AlgorithmSelector';
import SortingVisualizer from './components/SortingVisualizer';

const App = () => {
  const [algorithm, setAlgorithm] = useState('bubbleSort');

  const handleAlgorithmChange = (newAlgorithm) => {
    setAlgorithm(newAlgorithm);
  };

  return (
    <div className="App bg-black">
      <Header />
      <AlgorithmSelector onAlgorithmChange={handleAlgorithmChange} />
      <SortingVisualizer selectedAlgorithm={algorithm} />
    </div>
  );
};

export default App;