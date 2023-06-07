const express = require("express");
const app = express();
const Student = require("./student");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { name, age, fees, address } = req.body;
    const exist = await Student.exists({ name: name });
    if (exist) {
      console.log(exist);
      return res.status(409).send("this student already exist!");
    } else {
      const aadstudent = new Student({
        name: name,
        age: age,
        fees: fees,
        address: address,
      });
      const savedata = await aadstudent.save();
      if (savedata) {
        return res.status(201).json({
          success: true,
          message: "User add car sucessfully",
          response: savedata,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }

  // let arr = req.body.arr
  // if(!arr || !Array.isArray(arr)){
  //     return res.send("Please provide a vaild arr");
  // }

  // let n = arr.length;
  // for(let i=0;i<n;i++){
  //     for(let j=0;j<n-i-1;j++){
  //         if(arr[j] > arr[j+1]){
  //             let temp = arr[j];
  //             arr[j] = arr[j+1];
  //             arr[j+1] = temp;            }
  //     }

  // }  

  // res.send(arr);
  /*
just create an api with node js
 set all the number according to asc order(without any sort method)and return it as response
    */
  /*
 task 2--create a student model in mongo db with same api you are using just send the data of student name,age,fee,address in the (postman) body and save the data in database send the inserted data as response...
 */
});

app.listen(3000, () => console.log("server is running"));

