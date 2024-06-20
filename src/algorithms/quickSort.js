// src/algorithms/quickSort.js
export function quickSort(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(array, low, high, animations) {
    if (low < high) {
      const pi = partition(array, low, high, animations);
      quickSortHelper(array, low, pi - 1, animations);
      quickSortHelper(array, pi + 1, high, animations);
    }
  }
  
  function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      animations.push([j, high, 'compare']);
      if (array[j] < pivot) {
        i++;
        animations.push([i, array[j], 'swap']);
        animations.push([j, array[i], 'swap']);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      animations.push([j, high, 'revert']);
    }
    animations.push([i + 1, array[high], 'swap']);
    animations.push([high, array[i + 1], 'swap']);
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
  }
  