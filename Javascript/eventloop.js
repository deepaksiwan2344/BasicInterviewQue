// The event loop is a mechanism in JavaScript that allows for asynchronous code execution in a
//  single-threaded environment.

// callstack
//  Task Queue or Macro task Queue
// Microtask Queue


//function
//function is a reusable block of code that performs a specific task 
//thread


//threads are units of execution that allow multiple tasks to run concurrently

/*
Event loop:
The event loop continuously checks if the call stack is empty, and if so, 
it moves pending tasks (from the queue) into the stack to be executed.

Why do we need?
JavaScript is single-threaded (it can do one thing at a time).
But with the event loop, JS can handle async tasks without blocking the main thread.

How It Works (Step-by-Step):
Call Stack – where code is executed (line by line)
Web APIs – browser-provided APIs (e.g., setTimeout, fetch)
Callback Queue – stores async callbacks waiting to run

Event Loop – keeps checking:
If call stack is empty
If any callbacks are waiting
If yes → pushes the callback into the call stack

What is call Stack?
The Call Stack is a data structure used by the JavaScript engine to keep track of function calls.
Last In, First Out (LIFO)


*/






