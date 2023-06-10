const fs = require("fs")

// fs.writeFile('read.txt', 'hello:)',
// (err)=>{
//     console.log("files is created")
//     console.log(err)
// });

// fs.appendFile('read.txt', 'hello good morning')



fs.readFile('read.txt', 'UTF-8',(err, data)=>{
    console.log("data", data)
  
})