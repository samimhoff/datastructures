let arr1 = [50, 2, 8, 92, 11, 6, 7, 43, 100, 4, 73];


function pivot(arr) {
  if (arr.length === 1) {
    return arr;
  }
  //initialize counting variable for number of elements less than target
  //initialize target variable, pointing to the first element in the array
  //iterate through every element, starting with the second
    //if the element is less than the target:
      //increase the counting variable by one
      //swap the current element with the element at the index of the counting variable (would be one for first iteration)
  //swap the target with the element at index of the counting variable, thereby placing all of the smaller elements left of the target
  //return an array containing the "pivoted" array as the first element, and the counting variable as the second (the index of the target)
  let smallerCount = 0;
  let target = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      smallerCount++;
      let original = arr[smallerCount];
      arr[smallerCount] = arr[i];
      arr[i] = original;
    }
  }
  let temp = arr[smallerCount];
  arr[smallerCount] = arr[0];
  arr[0] = temp;
  return smallerCount;
}
console.log(arr1);
pivot(arr1);
console.log(arr1);


function quickSort(arr) {
  //brainstorming the order of the processes:
  if (arr.length === 1) {
    return arr;
  }
  let [newArr, target] = pivot(arr);
  let middle = newArr[target];
  let left = newArr.splice(0, target);
  if (left.length >= 2) {
    left = quickSort(left);
  }
  let right = quickSort(newArr.splice(target+1));
  if (right.length >= 2) {
    right = quickSort(right);
  }

  left.push(middle);
  return left.concat(right);
}



// function quickSort(arr) {
//   //brainstorming the order of the processes:
//   if (arr.length === 1) {
//     return arr;
//   }
//   console.log('ARR:', arr);
//   let [newArr, target] = pivot(arr);
//   console.log('newArr: ', newArr);
//   let middle = newArr[target];
//   let left = quickSort(newArr.splice(0, target));
//   console.log('left: ', left);
//   let right = quickSort(newArr.splice(target+1));
//   console.log('right: ', right);

//   left.push(middle);
//   return left.concat(right);
// }
// console.log(quickSort(arr1));