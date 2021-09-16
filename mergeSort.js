let arr1 = [9,2,5,4,6,1,3,8];
let subArr1 = [2,4,5,9];
let subArr2 = [11,12,13,100];

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];
  while (merged.length < arr1.length + arr2.length) {
    if (arr1[i] < arr2[j] || j >= arr2.length) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++
    }
  }
  return merged;
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half));
  return merge(left, right);


}
console.log(mergeSort(arr1));