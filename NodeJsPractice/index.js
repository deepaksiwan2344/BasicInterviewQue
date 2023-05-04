const fs = require("fs")
//fs.writeFileSync('read.txt', "hello deepak")

//fs.appendFileSync('read.txt', "how are you")
// const bufferdata = fs.readFileSync('read.txt')
// console.log("buffer", bufferdata)
// console.log("bufferdaa", bufferdata.toString())


fs.renameSync("read.txt", 'readWrite.txt')