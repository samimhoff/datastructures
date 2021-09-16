let arr1 = [5,7,2,1,8,3];
let arr2 = [27,5,18,3,192,38,57,2,90,23,4910];

//initialize a boolean, swapMade, set to true
//initialize a variable itCount set to 0
//implement a while loop that loops while swapMade is true
//  set swapMade to false
//  initialize a variable, lowest set to the array value at index itCount
//  initialize a variable, lowestIndex set to itCount
//  iterate over the input array, starting from itCount + 1 to the end of the array
//    if the current value in the array is lower than lowest, set it equal to lowest,
//    and set lowestIndex equal to the current index
//  check if lowest is equal to the value at itCount. If not:
//    intialize a variable, temp, equal to the value at index itCount
//    replace the value at index itCount with the lowest
//    set the value at lowestIndex to temp
//    set swapMade to true
//return array

function selectionSort (arr) {
  let swapMade = true;
  for (let i = 0; i < arr.length; i++) {
    let startIndex = i;
    let lowest = arr[i];
    let lowestIndex = i;
    for (let j = startIndex; j < arr.length; j++) {
      if (arr[j] < lowest) {
        lowest = arr[j];
        lowestIndex = j;
      }
    }
    if (lowestIndex !== i) {
      let temp = arr[i];
      arr[i] = lowest;
      arr[lowestIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr2));