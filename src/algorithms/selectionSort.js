// src/algorithms/selectionSort.js
export function selectionSort(array) {
    const animations = [];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        animations.push([j, minIndex, 'compare']);
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
        animations.push([j, minIndex, 'revert']);
      }
      if (minIndex !== i) {
        animations.push([i, array[minIndex], 'swap']);
        animations.push([minIndex, array[i], 'swap']);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return animations;
  }
  