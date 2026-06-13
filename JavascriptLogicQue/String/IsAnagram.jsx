function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let obj = {};
  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for(let value of t){
      console.log(value)
      if(!obj[value]){
          return false
      }
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false