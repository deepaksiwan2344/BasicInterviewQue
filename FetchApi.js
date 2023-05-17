
// In JavaScript, "fetch" is a built-in method that allows you to make network requests to a server and
//  retrieve data from it

// Browser compatibility: If you need to support older browsers, axios might be a better 
// choice as it works in all major browsers. fetch is not supported in older browsers, 
// such as Internet Explorer.

// API: If you need a more powerful and configurable API, axios might be a better choice. 
// axios provides features such as request and response interceptors, canceling requests,
//  and more, that are not available in the fetch API.

// Error handling: axios provides more user-friendly error handling as it throws an error 
// when the request fails or encounters a network error, whereas fetch doesn't always throw
//  an error on network errors.


// Size: fetch is a built-in browser API, whereas axios is a third-party library that 
// needs to be installed separately. If you need to keep your codebase lightweight, 
// fetch might be a better choice.


// In summary, both fetch and axios are good choices for making HTTP requests in 
// JavaScript applications. If you need a more powerful API and better error handling, 
// or if you need to support older browsers, axios might be a better choice. If you need to
//  keep your codebase lightweight and don't require advanced features, fetch might be a 
//  good choice.

















// const DataFetch = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
//         if (!response) {
//             console.log("somethings went wrong")
//         }
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("error", error)
//     }
// }
// DataFetch()



const userdata = async()=>{
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/")
        if(!res){
            console.log("something went wrong")
        }
        const data = await res.json()
        console.log("data", data)

    }catch(error){
        console.log("error", error)

    }

}
userdata();