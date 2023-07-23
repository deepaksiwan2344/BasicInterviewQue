//Head and Tail Recursion



// function test(){
//     let data = "mongo";
//     console.log(data)
// }

// function test1(){
//     test()
// }
// function test2(){
//     test1()
// }

// function final(){
//     test2()
// }
// final()

function test(x)
{
    // console.log(x) head recursion
    if(x> 0){
        test(x -1);
    }
    console.log(x) //Tail recursion
}
let data = 5;
test(data)

