// description: You are given a string s and an integer array indices of the same length. The string s 
// will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.


let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3];
 
 //expected output leetcode
 console.log(result(s, indices))
 function result (s, indices){
     let res = [];
     for(let i = 0; i < s?.length; i++){
         res[indices[i]] = s[i]
     }
    return res.join("")
 }  