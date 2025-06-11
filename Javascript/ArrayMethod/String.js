// const str = "deepakhjsdfhsskeksmkek";

// let maxCount = 0;
// let minCount = Infinity;

// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   const count = str.split(char).length - 1;
//   if (count > maxCount) {
//     maxCount = count;
//   }
//   if (count < minCount) {
//     minCount = count;
//   }
// }


// console.log("Max count:", maxCount); // Output: Max count: 3
// console.log("Min count:", minCount); // Output: Min count: 1


// let str = "deepak"
// let maxCount = 0;
// let minCount = Infinity

// for (let i = 0; i < str?.length; i++) {
//     let char = str[i]
//     const count = str.split(char).length - 1;

//     if (count > maxCount) {
//         maxCount = count;
//     }
//     if (count < minCount) {
//         minCount = count
//     }
// }


// console.log(maxCount)
// console.log(minCount)

// const MaxCharacter= (str)=>{
//     let obj = {}
//     for(let char of str){
    
//        //console.log(obj[char])
//         (!obj[char])?obj[char] == 1:obj[char]++; 
//     }
//     console.log(obj)

// }

// MaxCharacter("deepak")



const maxCharacter =(str)=>{
    let obj = {}
    for(let i of str){
        (!obj[i])?obj[i] = 1:obj[i]++
    }
    console.log(obj)
}

maxCharacter("deepak")


let string = "abcceddha";
let ascending = string.split('').sort().join('')
console.log(ascending)


// function find(string){
//     let obj = {}
//     for(let i = 0; i< string.length; i++){
//         let char = string[i];
//         if(obj[char]){
//             obj[char]++
//         }else{
//             obj[char] = 1
//         }
//     }
//     console.log(obj);


    
// }
// (find(string))


let str = "  deepak";
console.log(str.trimStart());


// String Modification method
// .toUpperCase()	Converts to uppercase	"hello".toUpperCase() // 'HELLO'
// .toLowerCase()	Converts to lowercase	"HELLO".toLowerCase() // 'hello'
// .trim()	Removes whitespace from both ends	" hello ".trim() // 'hello'
// .trimStart()	Removes whitespace from the start	" hello ".trimStart() // 'hello '
// .trimEnd()	Removes whitespace from the end	" hello ".trimEnd() // ' hello'
// .repeat(n)	Repeats string n times	"hi".repeat(3) // 'hihihi'







