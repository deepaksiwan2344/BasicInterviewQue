
// Right-Angled Triangle Pattern
// let n = 8;
// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*"
//     }
//     console.log(row)
// }

//Inverted Right-Angled Triangle
// let n = 5;
// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*"
//     }
//     console.log(row)
// } 


//Pyramid Pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let space = 1; space <= n - i; space++) {
//         row += " ";
//     }
//     for (let star = 1; star <= 2 * i - 1; star++) {
//         row += "*";
//     }
//     console.log(row);
// }

//Number
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }

//Character
// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     let char = String.fromCharCode(64 + i);
    
//     for (let j = 1; j <= i; j++) {
//         row += char + " ";
//     }
//     console.log(row);
// }


/*
Diamond Pattern

let n = 4;

// Upper part of the diamond
for (let i = 1; i <= n; i++) {
    let row = "";

    // Add spaces
    for (let space = 1; space <= n - i; space++) {
        row += " ";
    }

    // Add stars with spaces
    for (let star = 1; star <= i; star++) {
        row += "* ";
    }

    console.log(row.trimEnd()); // Remove trailing space for cleaner output
}

// Lower part of the diamond
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Add spaces
    for (let space = 1; space <= n - i; space++) {
        row += " ";
    }

    // Add stars with spaces
    for (let star = 1; star <= i; star++) {
        row += "* ";
    }

    console.log(row.trimEnd());
}


*/

/*
1
2 3
4 5 6
7 8 9 10

let n = 4;
let num = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
        console.log(num)
    }
    console.log(row.trim());
}

*/

/*
*       * 
* *   * * 
* * * * * 
* *   * * 
*       * 
Print the above pattern
const n = 5; 

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (j === 0 || j === n - 1) {
      row += "* ";
    } else if (i === Math.floor(n / 2)) {
      row += "* ";
    } else if (j === i || j === n - i - 1) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

*/

/*
*****
   * 
  *  
 *   
*****
let n = 5;

for(let i = 1; i <= n; i++){
    let pattern = "";
    for(let j = 1; j <= n; j++){
        if(i === 1 || i === n || j === n - i + 1 ){
            pattern += "*"
        }else{
            pattern += " "
        }
        
    }
    console.log(pattern)
}

*/

/*
* * * * * * * 
*         * 
*       * 
*     * 
*   * 
* * 
* 

let n = 7;

for (let i = n; i >= 1; i--) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
     if(j === 1 || i === n || j === i){
         pattern += "* "
     }else{
         pattern += "  "
     }
  }
  console.log(pattern);
}
*/

/*
        * 
      *   * 
    *       * 
  *           * 
* * * * * * * * * 

let num = 5;

if (num > 1) {  
    for (let i = 1; i <= num; i++) {
        let pattern = "";  
        for (let j = 1; j <= (num - i); j++) { 
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {  
            if (k === 1 || k === ((2 * i) - 1) || i === num) { 
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        console.log(pattern);
    }
}

*/

/*

          * 
        * * * 
      * * * * * 
    * * * * * * * 
  * * * * * * * * * 
* * * * * * * * * * * 

let n = 6;
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i; j++) {
        pattern += "  ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
        pattern += "* ";
    }
    console.log(pattern);
}


*/


/*
    *    
   ***   
  *****  
 ******* 
*********
 ******* 
  *****  
   ***   
    *  
      

let n = 5;

// Upper triangle
for (let i = 1; i <= n; i++) {
  let pattern = "";

  // spaces
  for (let j = 1; j <= n - i; j++) {
    pattern += " ";
  }

  // stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }

  console.log(pattern);
}

// Lower triangle
for (let i = n - 1; i >= 1; i--) {
  let pattern = "";

  // spaces
  for (let j = 1; j <= n - i; j++) {
    pattern += " ";
  }

  // stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }

  console.log(pattern);
}

*/

/*
  
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
    
 let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {
  let pattern = "";

  // Leading spaces
  for (let j = 1; j <= n - i; j++) {
    pattern += " ";
  }

  // Stars and hollow space
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
  let pattern = "";

  // Leading spaces
  for (let j = 1; j <= n - i; j++) {
    pattern += " ";
  }

  // Stars and hollow space
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}



*/







