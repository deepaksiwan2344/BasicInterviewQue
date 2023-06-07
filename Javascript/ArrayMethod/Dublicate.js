//how to find dublicate element of given element

// const arrnum = [1, 23, 45, 67, 43, 67, 73, 23]
// const dublicate = arrnum.filter((ele, index, arr) => {
//     console.log("index", index)

//     return arr.indexOf(ele) !== index
// }



// )
//console.log(dublicate)
//find a dublicate element in a given array with loop
// function findDublicate(arr){
//     const dublicate = [];
//     for(let i = 0; i<arr?.length; i++){
//         for(let j = i +1;  j< arr.length; j++){
//             if(arr[i] == arr[j] && !dublicate.includes(arr[i])){
//                 dublicate.push(arr[i]);
//             }
//         }
//     }
//  
//    return dublicate

// }
// const number = [1,1,23,6,23,7,7,89,90]
// console.log(findDublicate(number))


var arr = [1,3,3,4,5,2,34,34]
function findDublicate(arr){
    let Dublicate = []
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; i++){
            if (arr[i] = arr[j] && !Dublicate.includes(arr[i])){
                Dublicate.push(arr[i]);
            }
        }
    }
    return Dublicate
}
console.log(findDublicate(arr))






