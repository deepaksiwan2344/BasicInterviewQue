// Q.5.Write a program to display this pattern
// ******
// *   *
// *  *
// * *
// **
//*

function reverseEmptyTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === rows) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
reverseEmptyTriangle(6);
