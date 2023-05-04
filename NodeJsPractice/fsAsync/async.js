const fs = require("fs")
//   const data = fs.readFileSync('read.txt', 'utf-8')

//   console.log(data)
//   console.log("after the data")


//asyncronous
  fs.readFile('read.txt', (err, data)=>{
    console.log(data.toString())
  });
  console.log("after the data");



