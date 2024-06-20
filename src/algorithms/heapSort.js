// src/algorithms/heapSort.js
export function heapSort(array) {
    const animations = [];
    let n = array.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i, animations);
    }
  
    for (let i = n - 1; i > 0; i--) {
      animations.push([0, array[i], 'swap']);
      animations.push([i, array[0], 'swap']);
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;
      heapify(array, i, 0, animations);
    }
    return animations;
  }
  
  function heapify(array, n, i, animations) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n) {
      animations.push([left, largest, 'compare']);
      if (array[left] > array[largest]) {
        largest = left;
      }
      animations.push([left, largest, 'revert']);
    }
  
    if (right < n) {
      animations.push([right, largest, 'compare']);
      if (array[right] > array[largest]) {
        largest = right;
      }
      animations.push([right, largest, 'revert']);
    }
  
    if (largest !== i) {
      animations.push([i, array[largest], 'swap']);
      animations.push([largest, array[i], 'swap']);
      let temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      heapify(array, n, largest, animations);
    }
  }
  