import React from 'react';

const AlgorithmSelector = ({ onAlgorithmChange }) => {
  return (
    <div className="p-3 text-center">
      <div className="flex justify-center gap-5">
        <button className="bg-teal-800  hover:bg-teal-800  transition-all mr-2 text-white px-5 py-3 rounded-3xl" onClick={() => onAlgorithmChange('bubbleSort')}>
          Bubble Sort
        </button>
        <button className="bg-teal-800  hover:bg-teal-800  transition-all mr-2 text-white px-5 py-3 rounded-3xl" onClick={() => onAlgorithmChange('selectionSort')}>
          Selection Sort
        </button>
        <button className="bg-teal-800  hover:bg-teal-800  transition-all mr-2 text-white px-5 py-3 rounded-3xl" onClick={() => onAlgorithmChange('insertionSort')}>
          Insertion Sort
        </button>
        <button className="bg-teal-800  hover:bg-teal-800  transition-all mr-2 text-white px-5 py-3 rounded-3xl" onClick={() => onAlgorithmChange('mergeSort')}>
          Merge Sort
        </button>
        <button className="bg-teal-800  hover:bg-teal-800  transition-all mr-2 text-white px-5 py-3 rounded-3xl" onClick={() => onAlgorithmChange('heapSort')}>
          Heap Sort
        </button>
        <button className="bg-teal-800  hover:bg-teal-800 transition-all mr-2 text-white px-5 py-3 rounded-3xl" onClick={() => onAlgorithmChange('quickSort')}>
          Quick Sort
        </button>
      </div>
    </div>
  );
};

export default AlgorithmSelector;
