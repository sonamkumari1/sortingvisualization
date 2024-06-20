// src/algorithms/bubbleSort.js
export function bubbleSort(array) {
    const animations = [];
    let n = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        animations.push([i, i + 1, 'compare']);
        if (array[i] > array[i + 1]) {
          animations.push([i, array[i + 1], 'swap']);
          animations.push([i + 1, array[i], 'swap']);
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
        animations.push([i, i + 1, 'revert']);
      }
      n--;
    } while (swapped);
    return animations;
  }
  