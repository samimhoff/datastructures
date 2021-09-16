function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return 0;
  let tot = 0;
  let start = 0;
  let end = 0;
  let first = str[0];
  let chars = {
  };

  while (end < str.length) {
    if (!chars[str[end]]) {
      chars[str[end]] = end;
    } else {
      if (Object.keys(chars).length > tot) {
        tot = Object.keys(chars).length;
      }
      //not done yet.
      delete chars[str[end]];
      start = end;
    }
    end++;
  }
  return tot;
}
let s1 = 'rithmschool';
let s2 = 'thisisawesome';
let s3 = 'thecatinthehat';
let s4 = 'bbatt';

console.log(findLongestSubstring(s2));