const mongoose = require('mongoose');



const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    fees:{
        type:Number
    },
    address:String        
}, {
    timestamps:true
})

module.exports = mongoose.model('students', StudentSchema);