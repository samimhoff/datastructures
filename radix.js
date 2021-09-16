let arr1 = [54239]

function getDigit(n, i) {
  // n = n.toString().split('');
  // return parseInt(n[n.length - i - 1]);
  return Math.floor(Math.abs(n) / Math.pow(10, i)) % 10;
}

function digitCount(n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}

function mostDigits(arr) {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (digitCount(arr[i]) > longest) longest = digitCount(arr[i]);
  }
  return longest;
}

function radixSort(arr) {
  let rounds = mostDigits(arr);
  for (let i = 0; i < rounds; i++) {
    let bucket = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}
