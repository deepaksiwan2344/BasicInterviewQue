/*

   1
  121
 12321
1234321

function pyramid(n) {
   for(let i = 1; i <= n; i++){
       pattern = "";
       for(space = 1; space <= n - i; space++){
           pattern += " "
       }
       for(k = 1; k <= i; k++){
            pattern += k
           
       }
       for(let m = i - 1; m >= 1; m--){
           pattern += m
       }
       console.log(pattern)    
   }
}

pyramid(4);

*/

/*
   1
  12
 123
1234

function rightAlignedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Print stars
    for (let k = 1; k <= i; k++) {
      row += k;
    }
    
    console.log(row);
  }
}

rightAlignedTriangle(4);

*/

/*
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 


let n = 5;
let m = 1
for(let i = 1; i <= n; i++){
    let pattern = "";
    for(let j= 1; j <= i; j++){
        pattern +=  m++ + " ";
    }
    console.log(pattern)
}

*/