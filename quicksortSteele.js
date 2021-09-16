let arr1 = [50, 2, 8, 92, 11, 6, 7, 43, 100, 4, 73];

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);

  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}
console.log(quickSort(arr1));