// 2. Given these 2 schemas, loop thru each student and show its time entries.
// var WorksnapsTimeEntry = BaseSchema.extend({
// student: {
// type: Schema.ObjectId,
// ref: 'Student'
// },
// Time entries: {
// type: Object
// }
// });
// var StudentSchema = BaseSchema.extend({
// firstName: {
// type: String,
// trim: true,
// default: ''
// // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
// },
// lastName: {
// type: String,
// trim: true,
// default: ''
// // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
// },
// displayName: {
// type: String,
// trim: true
// },
// municipality: {
// type: String
// }
// })







//const WorksnapsTimeEntry = require("./models/worksnapsTimeEntry");
const Student = require("./Models/Student");
Student.find()
  .populate("timeEntries")
  .exec((err, students) => {
    if (err) {
      console.error(err);
      return;
    }
    students.forEach((student) => {
      console.log(`${student.firstName} ${student.lastName}'s time entries:`);
      student.timeEntries.forEach((timeEntry) => {
        console.log(timeEntry);
      });
    });
  });
