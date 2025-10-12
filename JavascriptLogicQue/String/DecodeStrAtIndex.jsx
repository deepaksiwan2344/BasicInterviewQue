//Leetcode 880 question

var decodeAtIndex = function(s, k) {
    let size = 0;
    for (let char of s) {
        if (isNaN(char)) { 
            size++;
        } else { 
            size *= Number(char);
        }
    }
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i];
        k %= size;  
        if (k === 0 && isNaN(char)) {
            return char;
        }
        if (isNaN(char)) { 
            size--;
        } else {
            size /= Number(char);
        }
    }
};

console.log(decodeAtIndex("leet2code3", 10));


// var decodeAtIndex = function(s, k) {
//     let size = 0;
//     let str = "";

//     for(let char of s){
//         if(isNaN(char)){
//             size++
//            str += char
//         }else{
//              str += str
//             size *= Number(char)
//         }
//     }
//     let output = []
//     for(let i = 0; i <= str?.length - 1; i++){
//         output.push(str[i])
//     }
//     console.log(output[k])
   
   
// };

// console.log(decodeAtIndex("deepak2praveen3", 9));

                      

