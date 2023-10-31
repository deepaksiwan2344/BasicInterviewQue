
//String is a sequence of charactor that is used to represent text.
//it can include letters, numbers, special charactor. 

// const str = "deepak"
// console.log(str.length)
// console.log(str.charAt(0))
// console.log(str.toUpperCase());
// console.log(str.substring(2,5));
// // replace(oldValue, newValue)

// console.log(str.replace('d', 'p'))

// let string = "deepak";
// console.log(string.substring(2,5))
// let str1 = "siwan"
// console.log(str1.toUpperCase())


// let strarray = ["Deepak", "praveen", "noida"]

// const capitalizedArray = strarray.map(str => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   });
  
// console.log(capitalizedArray)


let str = ["mukesh", "dewansh", "suresh"]
function capital (str){
    let capitalString = []
    for(let i =0; i < str.length; i++){
        const str1 = str[i]
        console.log("str1", str1)
        let capitalizedStr = str1.charAt(0).toUpperCase() + str1.slice(1)
        capitalString.push(capitalizedStr)
    }
    return capitalString
}
console.log(capital(str))


// let str = "deepak kumar prajapati";
//  let n = str.length;
// function result (str, n){
//     let strString = ""
//     for(let i= 0; i < n; i++){
//         console.log(str[i])
//         if(str[i] === " "){
//             strString += "%20"
//         }else{
//             strString += str[i]
//         }
//     }
//     return strString
    
// }
// console.log(result(str, 22))

