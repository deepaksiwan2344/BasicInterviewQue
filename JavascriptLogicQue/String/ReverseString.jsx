let str = ["h","e","l","l","o"]

/* Reverse string using two pointer */
function reverseStr (str){
    let left = 0;
    let right = str?.length - 1;
    while(left < right){
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--
    }
    return str
}

console.log(reverseStr(str))
