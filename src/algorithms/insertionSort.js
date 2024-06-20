// src/algorithms/insertionSort.js
export function insertionSort(array) {
    const animations = [];
    let n = array.length;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        animations.push([j + 1, array[j], 'swap']);
        array[j + 1] = array[j];
        j--;
      }
      animations.push([j + 1, key, 'swap']);
      array[j + 1] = key;
    }
    return animations;
  }
  