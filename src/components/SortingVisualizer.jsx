import React, { useState, useEffect } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { heapSort } from "../algorithms/heapSort";
import { quickSort } from "../algorithms/quickSort";

const SortingVisualizer = ({ selectedAlgorithm }) => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(100); // Speed in milliseconds
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    if (isSorting) return;
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 5);
    }
    setArray(newArray);
  };

  useEffect(() => {
    // Function to change color after array update
    const changeColor = () => {
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "turquoise";
      }
    };

    // Call the function after array state updates
    changeColor();
  }, [array]); // Run this effect whenever array state changes

  const getAnimations = (algorithm) => {
    switch (algorithm) {
      case "bubbleSort":
        return bubbleSort(array.slice());
      case "selectionSort":
        return selectionSort(array.slice());
      case "insertionSort":
        return insertionSort(array.slice());
      case "mergeSort":
        return mergeSort(array.slice());
      case "heapSort":
        return heapSort(array.slice());
      case "quickSort":
        return quickSort(array.slice());
      default:
        return [];
    }
  };

  const visualizeSort = () => {
    if (isSorting) return;
    const animations = getAnimations(selectedAlgorithm);
    animateArrayUpdate(animations);
  };

  const animateArrayUpdate = (animations) => {
    setIsSorting(true);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdxOrValue, type] = animations[i];
      setTimeout(() => {
        if (type === "compare") {
          arrayBars[barOneIdx].style.backgroundColor = "red";
          arrayBars[barTwoIdxOrValue].style.backgroundColor = "red";
        } else if (type === "swap" || type === "overwrite") {
          arrayBars[barOneIdx].style.height = `${barTwoIdxOrValue}px`;
        } else if (type === "revert") {
          arrayBars[barOneIdx].style.backgroundColor = "turquoise";
          arrayBars[barTwoIdxOrValue].style.backgroundColor = "turquoise";
        }
        if (i === animations.length - 1) {
          setIsSorting(false);
        }
      }, i * animationSpeed);
    }
  };

  const handleSizeChange = (event) => {
    setArraySize(Number(event.target.value));
  };

  const handleSpeedChange = (event) => {
    setAnimationSpeed(1000 - event.target.value); // Invert the value to make higher values slower
  };

  return (
    <div className="p-5">
      <div className="bg-neutral-900 shadow-md rounded-lg p-5 ml-44 mr-44">
  <div className="flex items-center justify-center mb-4 p-5">
    {array.map((value, idx) => (
      <div
        className="array-bar mx-0.5 bg-turquoise"
        key={idx}
        style={{
          height: `${value}px`,
          width: `${Math.max(5, 100 / arraySize)}%`, // Adjust width based on array size relative to card width
        }}
      ></div>
    ))}
  </div>
</div>

      <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
        <button
          className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-600 transition-all"
          onClick={resetArray}
          disabled={isSorting}
        >
          New Array
        </button>

        <div className="mb-4 flex items-center mt-2">
          <label htmlFor="sizeRange" className="mr-2 text-white">
            Array Size:
          </label>
          <input
            id="sizeRange"
            type="number"
            min="5"
            max="100"
            value={arraySize}
            onChange={handleSizeChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="speedRange" className="mr-2 text-white">
            Animation Speed:
          </label>
          <input
            id="speedRange"
            type="range"
            min="1"
            max="1000"
            step="1"
            value={1000 - animationSpeed}
            onChange={handleSpeedChange}
            className="w-64"
          />
        </div>

        <div>
          <button
            className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-600 transition-all"
            onClick={visualizeSort}
            disabled={isSorting}
          >
            Start {selectedAlgorithm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
