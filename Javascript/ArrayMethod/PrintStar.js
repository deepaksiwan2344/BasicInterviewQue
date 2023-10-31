//Print start in javascript

// function printRightTriangle(n) {
//     for (let i = 1; i <= n; i++) { 
//       let row = ''; 
//       for (let j = 1; j <= i; j++) { 
//         if (j <= i) {
//           row += '*'; 
//         }
//       }
//       console.log(row);
//     }
//   }

//   printRightTriangle(10); 



function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    console.log("row", row)
    for (let j = 1; j <= i; j++) {
      if (j <= i) {
        row += '*';
      }
    }
    console.log(row);
  }
}


printRightTriangle(10);


//Print squre
// const size = 5;
// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let j = 0; j < size; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }






