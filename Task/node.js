//Q.1. Read the local directory and list all file names in it using JS

const fs = require('fs');
//console.log("fs", fs)

fs.readdir('./', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log("files", files); //OutPut ['node.js', 'Pattern.js', 'Prime.js', 'Schemas.js']
  }
});



