//what is aggregation in mongodb

// Aggregation in MongoDB refers to the process of performing advanced data processing
// operations on a collection of documents

//Here are some key concepts and components of the aggregation framework in MongoDB:
//In MongoDB, aggregations are operations that process data records and return computed results.
//1. Pipeline
//2. stage

// $match: Filters the documents based on specified criteria.
// $group: Groups documents by a specified key and performs aggregate calculations on
// the grouped data.
// $sort: Sorts the documents based on specified fields.
// $project: Reshapes the documents by including or excluding specific fields.
// $limit: Limits the number of documents in the output.



//Agregation function like
//$sum, $avg, $min, $max, and $count

//find second greatest sallary in mongodb

// db.employees.aggregate([
//   { $sort: { salary: -1 } },
//   { $group: { _id: null, salaries: { $push: "$salary" } } },
//   {
//     $project: {
//       _id: 0,
//       secondHighestSalary: { $arrayElemAt: ["$salaries", 1] },
//     },
//   }, // Get the second salary
// ]);



//another way 
//db.employees.find().sort({ salary: -1 }).skip(1).limit(1)

//find third highest
//db.employees.find().sort({ salary: -1 }).skip(2).limit(1)
