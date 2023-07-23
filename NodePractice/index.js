const express = require("express");
const app = express();
const Student = require("./Student");
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

});

app.listen(3000, () => console.log("server is running"));

