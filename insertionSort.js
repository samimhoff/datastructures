//Insertion sort
        //  j     index
let arr1 = [2, 9, 3, 8, 0, 5, 6];

function insertionSort (arr) {
  //iterate through the array starting with the second element
    //place element into correct sorted location within the sorted left portion, iterating from the element's current index to the beginning of the array
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let jay = 0;
    for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}

console.log(insertionSort(arr1));