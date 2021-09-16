// power(2,0) // 1
// power(2,2) // 4

function power(n, e){
  if (e === 0) return 1;
  return n * power(n, e -1);
}
console.log(power(2,4)); // 16


// e: 4, 3, 2, 1, 0
// 2 * 2 * 2 * 2 * 1