
//Promises
// const pr = new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("hello deepak")
//     }, 1000 )

// })
// console.log(pr);


//Observable

const {Observable}= require("rxjs");
const obs = new Observable((observer)=>{
    console.log("done");
    setTimeout(()=>{
        observer.next("hello deepak")
    }, 2000)
})
obs.subscribe()