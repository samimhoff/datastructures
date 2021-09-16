function validAnagram (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let char of s1) {
    obj1[char] = ++obj1[char] || 1;
  }
  for (let char of s2) {
    obj2[char] = ++obj2[char] || 1;
  }
  for (let key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('rat', 'car'));