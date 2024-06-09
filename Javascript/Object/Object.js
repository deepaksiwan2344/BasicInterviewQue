//Object in Advance

let data = new Map ([
    ['name', 'deepak'],
    ['age', 23]
])

// data.set('address', 'Noida')
// console.log(data.keys())
// console.log(data.has('name'))
// console.log(data.set(() =>  {}, "this is arrow function"))


// data.forEach((item, index)=>{
//     console.log(item)
// })

for([index, values] of data){
    console.log(values)
}


