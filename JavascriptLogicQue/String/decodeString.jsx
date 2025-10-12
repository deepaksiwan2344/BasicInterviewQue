//decode string
/* let str = "3[a]2[bc]";
expected output like "aaabcbc"
console.log(decodeStr(str))
function decodeStr (str){
    let stack = [];
    let currentNum = 0;
    let currentStr = "";
    for(let char of str){
        if(!isNaN(char)){
            currentNum = currentNum * 10 + Number(char);
        }else if(char === "["){
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = "";
            currentNum = 0;
        }else if (char === "]"){
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num)
            
        }else{
            currentStr += char
        }
    }
    return currentStr
}

*/

