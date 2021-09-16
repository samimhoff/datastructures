function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  if (typeof str === 'string') {
    str = str.split('');
  }
  console.log(str);
  if (str.length === 0) return null;
  if (str.length === 1) return str[0];
  let oldStr = str.slice();
  str.pop();
  return oldStr[oldStr.length - 1].concat(reverse(str));
}

console.log(reverse('awesome')); // 'emosewa'
