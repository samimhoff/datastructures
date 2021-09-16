let arr1 = [5,7,2,1,8,3];
let arr2 = [27,5,18,3,192,38,57,2,90,23,4910];

function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//Plan:
//  Implement temporary solution involving swapping method for n times, where n is the length of the array.
//  With that solution working, determine how to figure out when to stop iteration.
//    Hypothesis: Initialize boolean that checks if any were swapped. If none were, stop iteration.
//  Optimization:
//    Do not iterate over/ use swapping function on last n elements of the array, where n is the number of iterations heretofor.

function bubbleSort (arr) {
  let swapped = true;
  let n = 0;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1 - n; i++) {
      console.log('dog');

      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1);
        swapped = true;
      }
    }
    n++;

  }
  return arr;
}

console.log(bubbleSort(arr1));