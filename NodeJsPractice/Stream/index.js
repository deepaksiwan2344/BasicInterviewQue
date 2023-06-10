//A stream represents a sequence of data that can be read from or written to in a continuous flow.

const fs = require("fs");
const http = require("http");

const server = http.createServer();

// server.on("request", (req, res)=>{
//     var fs = require("fs");
//     fs.readFile("input.txt", "utf-8", (err, data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });

// });

server.on("request", (req, res)=>{
    //second method
    const rstream = fs.createReadStream ("input.txt");
    rstream.on('data', (chunkdata)=>{
       res.write(chunkdata)
  
    });
    // rstream.on("end",()=>{
    //     res.end();
    // })
    // rstream.on('error', (err)=>{
    //     console.log(err);
    //     res.end("file not found")

    // })

    //third method
    // const rstream = fs.createReadStream('input.txt');
    // rstream.pipe(res)

});


server.listen(5000, "127.0.0.1", ()=>{
   console.log("server is runnig on port 5000")
});


