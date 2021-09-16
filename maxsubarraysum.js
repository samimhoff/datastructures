function maxSubArraySum(arr, n) {
  //input: array of integers; n, an integer that represents the number of consecutive numbers to count
  //output: the integer number of the highest sum
  //constraints: O(n) time complexity

  //check to see that array's length is 0. If it is return null


  //initialize currentSum variable at 0.
  //iterate over the first n characters of the array, summing them to currentSum variable.
  //initialize maxSum at currentSum

  //initialize variable i at 0.
  //iterate over the array with variable j, starting at index n, incrementing by one each time
    //subtract the number at index i of the array from currentSum
    //add the number at index j of the array to the currentSum
    //if the currentSum is larger than the maxSum, set the maxSum equal to the currentSum
  //return maxSum

  if (arr.length === 0) {
    return null;
  }

  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
  }
  let maxSum = currentSum;


  let i = 0;
  for (let j = n; j < arr.length; j++) {
    currentSum -= arr[i];
    currentSum += arr[j];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    i++;
  }
  return maxSum;
}

let arr1 = [1,2,6,2,7,2,4,8,3];
let arr2 = [9,3,5,1,3,7,3,4,8,2,4,1,1,5,7,3,7,1,8,1,4];
console.log(maxSubArraySum(arr2, 3));