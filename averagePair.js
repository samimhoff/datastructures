function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
  //initialize an end variable at the last index of the array
  //initialize a start variable at 0
  //create a while loop that iterates while start and end are not equal
    //find the average of the elements at the start and end variables
    //if the average is equal to the target, return true
    //if the average is more than the target, increase the start variable by one
    //else, reduce the end variable by one
  //return false
  if (arr.length === 0) return false;

  let end = arr.length -1;
  let start = 0;
  while (start !== end) {
      let avg = arr[start] + arr[end];
      if (avg === target) return true;
      if (avg < target) {
          start++;
      } else {
          end--;
      }
  }
  return false;

}

console.log(averagePair(1, 3, 3,5,6,7,10,12,19))