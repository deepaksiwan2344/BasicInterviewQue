//1. Promises is a egger whereas Observable is Lazy
//2. Promises can only return a single value or throw an error, 
//while observables can emit multiple values over time.

// const  pr = new Promise((resolve)=>{
//     console.log("done")
//     setTimeout(()=>{
//         resolve("hello")
//     }, 1000)

// })
// setTimeout(()=>{
//     pr.then((data)=>{
//         console.log(data)

//     });
    
// }, 4000)

//Observable
 const {Observable} = require("rxjs");
// const obs = new Observable((observer)=>{
//     console.log("done");
//     setTimeout(()=>{
//         observer.next("hello deepak")
//     }, 2000)

// })
// setTimeout(()=>{
//     obs.subscribe(console.log)
// }, 4000)


//Second Example

// const pr1 = new Promise((resolve)=>{
//     resolve("hello");
//     resolve('deepak');
//     resolve("noida")


// })
// pr1.then((data)=>{
//     console.log(data)
// })

const pr2 = new Observable((observer)=>{
    observer.next("hello");
    observer.next("deepak");
    observer.next("noida")
    
})
pr2.subscribe((data)=>{
    console.log(data);
})


