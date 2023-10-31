// 1. delete document in a given collection 
// db.employees.deleteOne({ _id: ObjectId("employee_id_to_delete") });
//db.users.findOneAndDelete({_id: ObjectId("user_id")})
//db.Products.deleteMany({})

//db.users.updateMany({}, { $unset: { email: 1 } });



// {
//     "_id": ObjectId("user_id_1"),
//     "name": "John Doe",
//     "email": "john@example.com"
//   }
//   {
//     "_id": ObjectId("user_id_2"),
//     "name": "Alice Smith",
//     "email": "alice@example.com"
//   }

//   to delete the email field
//   db.users.updateMany({}, { $unset: { email: 1 } });