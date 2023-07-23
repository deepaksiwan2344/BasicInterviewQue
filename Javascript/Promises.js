//three type of Promises
// Promise.race
// Promise.all
// Promise.allSettled

//Promises is a code either executed or fails
//Promises are a way to handle asynchronous operations in JavaScript

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { foo: 'bar' };
//             if (data) {
//                 resolve(data);
//             } else {
//                 reject('Error fetching data');
//             }

//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log(data);

//     })
//     .catch((error) => {
//         console.error(error);
//     });

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data1 = { name: "deepak" }
//             if (data1) {
//                 resolve(data1);
//             } else {
//                 reject('error fetching data')
//             }
//         }, 2000)
//     });
// };

const Promises = () => {
  return new Promise((resolve, reject) => {
    let x = "10";
    if (x > 9) {
      resolve("right");
    } else {
      reject("wrong");
    }
  });
};
console.log(Promises());

// getData()
//     .then((data1) => {
//         console.log("data", data1)
//     })
//     .catch((error) => {
//         console.error("error", error)

//     })

// var promise1 = new Promise((resolve, reject) => {
//     resolve("deepak1")

// })

// var promise2 = new Promise((resolve, reject) => {
//     resolve("deepak2")

// })
// var promise3 = new Promise((resolve, reject) => {
//     resolve("deepak2")

// })
// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log("result", result)

//     })

var pl = new Promise((resolve, reject) => {
  let sqldata = {
    id: 1,
    name: "code Improve",
    ssId: "1234",
  };
  resolve(sqldata);
});

var pl1 = new Promise((resolve, reject) => {
  let sqldata1 = "deepak";
  resolve(sqldata1);
});

Promise.all([
  pl.catch((err) => {
    return err;
  }),
  pl1.catch((err) => {
    return err;
  }),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("err", err);
  });

function user() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = "deepak noida";
      if (name) {
        resolve(name);
      } else {
        reject(data);
      }
    }, 1000);
  });
}

user()
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  });

function DataList() {
  return new Promise((resolve, reject) => {
    let x = 12;
    if (x > 10) {
      resolve("right");
    } else {
      reject("wrong");
    }
  });
}

//Promise.allSettled example
// If any Promises is reject then remaining promises is resolve

let Promise1 = new Promise((resolve, reject) => {
  let data = {
    name: "deekap",
    age: 34,
  };
  if (data) {
    resolve(data);
  } else {
    reject(data);
  }
});

let Promises3 = new Promise((resolve, reject) => {
  let data = {
    name: "deekap",
    age: 35,
  };
  if (data) {
    resolve(data);
  } else {
    reject(data);
  }
});

let Promises2 = new Promise((resolve, reject) => {
  //   let data = {
  //     name: "deekap",
  //     age: 36
  //   };
  if (data) {
    resolve(data);
  } else {
    reject(data);
  }
});

Promise.allSettled([Promise1, Promises2, Promises3])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

//Promise.race
//In race Promise result show whose promise resolve first

let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "the first promise");
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "the second promise");
});
setTimeout(() => {
  console.log("sfsdf");
}, 300);
Promise.race([p1, p2]).then((value) => {
  console.log(value);
});

//asyncronus function
// asyncronus function
// Microtask
// MacroTask

//code execution sequence
// asyncronus function > Microtask >  MacroTask

// 1.The JavaScript engine always executes synchronous code first, then
//  asynchronous code.
//  2.Microtasks have a higher priority than macrotasks.

//example of microtask and macrotask


const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);
