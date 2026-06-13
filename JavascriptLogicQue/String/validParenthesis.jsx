//Valid Parentheses LeetCode question
// function isValid(s) {
//     const stack = [];
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
//     for (let char of s) {                  
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         } else {
//             if (stack.pop() !== map[char]) {
//                 return false;
//             }   
//         }
//     }
//     return stack.length === 0;
// }
// console.log(isValid("()"));       
// console.log(isValid("()[]{[/]}"));   
// console.log(isValid("(]"));       
// console.log(isValid("([{])"));



/*  ************** Another Method ***************** */

function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
        console.log(stack)
      const last = stack.pop();
      console.log(last)

      if (map[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


console.log(isValid("()[]{}"));  // true
 console.log(isValid("(]"));      // false
 console.log(isValid("([)]"));    // false
 console.log(isValid("{[]}"));    // true