const boolean = require("joi/lib/types/boolean");
const { timestamp } = require("joi/lib/types/date");
const mongoose = require("mongoose");

const StudentModels = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: "",
        // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
      },
      lastName: {
        type: String,
        trim: true,
        default: "",
        // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
      },
      displayName: {
        type: String,
        trim: true,
      },
      municipality: {
        type: String,
      },
      
    });
    
module.exports = mongoose.model("Student", StudentModels);




  