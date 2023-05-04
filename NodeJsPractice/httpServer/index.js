const http = require("http");
const fs = require("fs");
// console.log("http", http)


const Server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello form the home sides");
  } else if (req.url == "/about") {
    res.end("hello about page");
  } else if (req.url == "/UserData") {
    fs.readFile(`${__dirname}/Userapi/userapi.json`, "utf-8", (err, data) => {
      console.log("data", data);
      console.log(err)
    });
    res.end("userData");

  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>page not found </h1>");
  }
});




Server.listen(8000, "127.0.0.1", () => {
  console.log("serveris running on port 8000");
  
});
