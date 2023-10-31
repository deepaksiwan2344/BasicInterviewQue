//What is mongodb?
//MongoDB is a cross-platform document-based database.

//2. What is a replica set?
// Replica sets play a crucial role in ensuring data availability and reliability
// in MongoDB deployments, especially in production environments.

//3.What is sharding?
// Sharding means storing the data on multiple machines.

//4.What is collection?
//Collection is the group of document.

//5. How do we perform the Join operations in MongoDB?
// From MongoDB3.2, we can perform the Join operation. The new $lookup operator
//included with the aggregation pipeline is the same as the left outer join. Example:


//basic structure lookup
// db.sourceCollection.aggregate([
//   {
//     $lookup: {
//       from: "targetCollection", // Name of the target collection
//       localField: "localField", // Field from the source collection
//       foreignField: "foreignField", // Field from the target collection
//       as: "newField", // New field name for the resulting array of merged documents
//     },
//   },
// ]);


// 6. What is regex?
// In MongoDB, regular expressions (regex) are used for pattern matching within
// queries
// example: db.products.find({ name: /^sh/i })

// 7.Define BSON?
// Binary JSON or BSON is a binary-encoded format of the JSON.
// BSON extends the JSON and offers various data fields and types.

// 8.How does MongoDB store the data?
// As it is a document-based database, MongoDB stores the documents in Binary
// Javascript Object Notation or BSON, which is a binary-encoded format of JSON.


// 9. Explain Namespace?
// A namespace is the series of the collection name and database name.

//10. What is Projection in mongodb?
// In MongoDB, we use Projection for selecting only the required data. It will not select the
//  complete data of a document.
//  projection is a feature that allows you to specify which fields from a document 
// you want to retrieve in the result of a query, 
// syntax of Projection in mongodb
// db.collection.find(query, projection)
// Note when we retrieve particular filed in a collection then it is call projection
// example
// db.users.find({}, name: 1, email: 1, _id: 0)


//10. What is Indexing in Mongodb
//db.products.find({ name: "Laptop" })
//to see the exsiting index in on a collection 
//db.products.getIndexes()

//11.what is shard key in mongodb and how does it effect development process
// Sharding is a MongoDB feature that allows you to horizontally scale your database by 
// distributing data across multiple servers or nodes. 
// Sharding is beneficial for managing large volumes of data and high traffic loads,
// example: db.createCollection("Orders", { shardKey: { order_id: 1 } })

//12. What is TTL(time to live) collection in mongoDB?
//A TTL (Time To Live) collection in MongoDB is a special type of collection where documents 
//are automatically removed from the collection when their specified lifetime or expiration time has passed. 
//db.logs.createIndex({ "timestamp": 1 }, { expireAfterSeconds: 604800 })
//db.sessions.createIndex({"session_expiration": 1}, {expireAfterseconds: 1800})

//13. What is Covered Query in Mongodb?
// suppose i have a collection 
// {
//     "_id": 1,
//     "title": "Book 1",
//     "author": "Author A",
//     "genre": "Science Fiction",
//     "year": 2020
//   }
  
//   {
//     "_id": 2,
//     "title": "Book 2",
//     "author": "Author B",
//     "genre": "Fantasy",
//     "year": 2019
//   }
//   And you want to find all the books written by "Author A" in the "Science Fiction" genre:
//   db.books.find({ "author": "Author A", "genre": "Science Fiction" })
//   to optimize the query and make is covered query 
//   db.books.createIndex({ "author": 1, "genre": 1 })

//14.What is difference between one-to-many and One-to-few in Mongodb schema Design?
// {
//     "_id": ObjectId("user_id_1"),
//     "name": "John Doe",
//     "email": "john@example.com",
//     "orders": [
//       {
//         "_id": ObjectId("order_id_1"),
//         "order_date": ISODate("2023-10-15"),
//         "total_amount": 100.0
//       },
//       {
//         "_id": ObjectId("order_id_2"),
//         "order_date": ISODate("2023-10-16"),
//         "total_amount": 50.0
//       }
//     ]
//   }

//15. What types of One-to-N schema design you can use in mongodb?
// Users Collection
// {
//     "_id": ObjectId("user_id_1"),
//     "name": "Alice",
//     "email": "alice@example.com",
//     "favorite_products": [
//       ObjectId("product_id_1"),
//       ObjectId("product_id_2"),
//       ObjectId("product_id_3")
//     ]
//   }
//   // Products Collection
//   {
//     "_id": ObjectId("product_id_1"),
//     "name": "Product A"
//   }
//   {
//     "_id": ObjectId("product_id_2"),
//     "name": "Product B"
//   }
//   {
//     "_id": ObjectId("product_id_3"),
//     "name": "Product C"
//   }


//16. How to find document with array that contains a specific value
// in a collection how to find document with array example
// db.products.insertMany([
//     {
//       name: "Laptop",
//       tags: ["electronics", "technology", "laptop"],
//       price: 999.99,
//     },
//     {
//       name: "Headphones",
//       tags: ["electronics", "audio", "headphones"],
//       price: 79.99,
//     },
//     {
//       name: "Coffee Maker",
//       tags: ["appliances", "kitchen", "coffee"],
//       price: 49.99,
//     },
//     {
//       name: "Smartphone",
//       tags: ["electronics", "technology", "smartphone"],
//       price: 499.99,
//     },
//     {
//       name: "Toaster",
//       tags: ["appliances", "kitchen", "toaster"],
//       price: 29.99,
//     },
//   ]);
// db.products.find({ tags: { $elemMatch: { $eq: "electronics" } } })


//17. It is possible to uddate MongoDb field using value of another field
// Yes, it is possible 
// example with Collection
// {
//     _id: ObjectId("employee_id_1"),
//     firstName: "John",
//     lastName: "Doe",
//     salary: 50000,
//     bonus: 2000
//   }
// db.employees.update(
//     {},
//     [
//       {
//         $set: {
//           totalIncome: { $sum: ["$salary", "$bonus"] }
//         }
//       }
//     ],
//     { multi: true }
//   );

// 18. What is Index Cardinality and why does it Mather?
//   this is a unique in a given Collection 
//example in a given document emailId 
//   index cardinality is a crucial factor in optimizing query performance.









