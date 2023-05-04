const fs = require("fs")
const bioData ={
    name: "deepak",
    age: "25"
}


const result = JSON.stringify(bioData)
const jsonformate = JSON.parse(result)
console.log(jsonformate)

// fs.writeFile("json1.json", result, (err)=>{
//     console.log("done")
// })

fs.readFile('json1.json', "utf-8", (err, data)=>{
     console.log(data)
    const originalData = JSON.parse(data)
    console.log(originalData)

})
