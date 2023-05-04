const fs = require("fs");

// fs.mkdir('deepak', (err)=>{
//     console.log("folder is created")
// });

fs.writeFile('./deepak/bio.txt', 'hello good morning', (err,)=>{
     console.log('file is created')
})