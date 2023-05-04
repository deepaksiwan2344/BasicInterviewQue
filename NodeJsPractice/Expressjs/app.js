const express = require("express");
const app = express();

app.get('/home', (req, res)=>{
  
    res.status(200).send("hello deepak How are you")
    console.log("hello deepak kumar")
});

app.get('/About',(req, res)=>{
    console.log("req", res)
    res.status(200).send("Hello About page")

})

app.listen(8000, ()=>{
    console.log("lsiting the port at 8000")

})

