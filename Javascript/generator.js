
//generator function provide better control over iteration and can save memory.


// function* eventNames(){
//     let num = 0;
//     while(true){
//         num += 2;
//         yield num;

//     }
// }
// const iterator = eventNames();
// console.log('addition', iterator.next().value);


// function* fibonacci() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }


// for (let value of fibonacci()) {
//   if (value > 100) {
//     break;
//   }
//   console.log(value);
// }

// Normal function that returns an array of values
// function getEvenNumbers(limit) {
//     let numbers = [];
//     for (let i = 2; i <= limit; i += 2) {
//       numbers.push(i);
//     }
//     return numbers;
//   }

//   console.log(getEvenNumbers(10)); // [2, 4, 6, 8, 10] 

// Generator function that returns a sequence of values
//   function* getEvenNumbersGenerator(limit) {
//     for (let i = 2; i <= limit; i += 2) {
//         console.log("i", i)
//       yield i;
//     }
//   }

//   const iterator = getEvenNumbersGenerator(10);
//   console.log(iterator.next().value); // 2

// function* fetchData() {
//   const response = yield fetch("https://example.com/data.json");
//   const data = yield response.json();
//   return data;
// }

// function runGenerator(generator) {
//   const iterator = generator();

//   function iterate(iteration) {
//     if (iteration.done) {
//       return Promise.resolve(iteration.value);
//     }

//     return Promise.resolve(iteration.value).then((x) =>
//       iterate(iterator.next(x))
//     );
//   }

//   return iterate(iterator.next());
// }

// runGenerator(fetchData)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

function* countUpTo(max) {
  let count = 1;
  while (count <= max) {
    yield count;
    count++;
  }
}

const iterator = countUpTo(5);
for (const num of iterator) {
  console.log(num);
}

function* addition(){
  console.log("hello generator function")
}



console.log(addition().next().value)


