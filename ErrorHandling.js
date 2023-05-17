// error handling in JavaScript involves detecting and managing errors that occur during program
// execution using try-catch 

// function divide(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error('Cannot divide by zero');
//       }


//       return a / b;
//     } catch (error) {
//       console.log(error.name + ': ' + error.message);
//     }
//   }
  
//   console.log(divide(10, 5)); // Output: 2
//   console.log(divide(10, 0)); // Output: Error: Cannot divide by zero

// function divide1(c,d){
//   try{
//     if(c === 0){
//       throw new Error("Cannot divide by zero");
//     }
//     return c / d
//   } catch(error){
//     console.log(error.name + ': ' + error.message);

//   }
  
// }

// console.log(divide1(23, 7));
// console.log(divide1(23, 0));


try{
  getData();

}catch (err){
  console.log("error show", err)

}