// JavaScript is a high-level, interpreted programming language that is primarily 
// used for web development
//Event Loop: Monitors the call stack and callback queue.
// JavaScript is single-threaded, meaning it can do one thing at a time. The event loop allows it to handle
// asynchronous operations without blocking the main execution flow.



/*
How Javascript work?
When JavaScript code runs (in the browser or Node.js), it goes through these main phases:
Note:  Parsing → 2. Compilation → 3. Execution
Each step is handled by the JavaScript engine (e.g., V8 in Chrome/Node.js, SpiderMonkey in Firefox).

Js Engine:
1. parsing:
The JavaScript engine (when parsing your code to run it)
Before your code runs, the JavaScript engine (like V8 in Chrome) parses your code into
an Abstract Syntax Tree (AST) — a data structure that represents your code.

2.compilation (Just-In-Time (JIT) Compilation);
Compilation is the process of converting source code (human-readable code) into a 
lower-level form that a computer can understand and execute.

3.execution
Execution is the process of running your JavaScript code, step by step, so the browser
or environment (like Node.js) can perform the actions you've written.

*/


/*
Event Loop
call Stack
web API
microStack queue(Promises)
callback queue



*/
//Javascript is used for both Frontend and Backend like using  node js 
//ES6
// ECMAScript is the standardized specification that JavaScript follows.
// It is a major update to the JavaScript programming language, introducing several 
// new features

/*
Array.prototype is an object in JavaScript that contains all the methods shared by arrays,
such as .map(), .filter(), .forEach(), .push(), etc.
*/

/*
ECMA = European Computer Manufacturers Association
Script = Scripting language specification

JavaScript was created by Netscape in the 1990s. To standardize the language across different browsers,
ECMAScript was developed and maintained by ECMA International.

JavaScript follows the ECMAScript standard, which means:
JavaScript is the language you write.
ECMAScript is the set of rules it follows.


Note: How Javascript work(step by step)
JavaScript runs inside a program called a JavaScript engine (like V8 in Chrome and Node.js, or
SpiderMonkey in Firefox).
Step 1: Parsing
The engine reads the code line by line.
It checks syntax and turns the code into a Data Structure called the Abstract Syntax Tree (AST).

Step 2: Compilation
JavaScript is interpreted, but modern engines compile it on the fly (JIT).
It converts code into bytecode or machine code just before execution for better performance.

Step 3: Execution
The engine runs the compiled code in the Execution Context using the Call Stack.

 3. Key Components of JavaScript
 Execution Context
This is where your code runs. There are three types:
Global Execution Context (default one)
Function Execution Context (for each function)
Eval Execution Context (rarely used)
Every time a function runs, a new context is created and pushed onto the Call Stack.


Call Stack
A stack data structure that keeps track of which function is being run.
When a function is called, it's added (pushed) to the stack.
When a function finishes, it’s removed (popped) from the stack.


 Memory Heap
 A large, unstructured memory area where JavaScript stores objects and variables.
 All objects and functions are stored here.


4. JavaScript Runtime Environment
The JavaScript runtime environment includes:
JavaScript engine (executes code)
Web APIs (like setTimeout, DOM, etc. – provided by browser)
Callback queue (messages waiting to be processed)
Event loop (handles async code)


Event Loop – Handles Async Code (Very Important)
JavaScript is single-threaded, so it uses the event loop to handle async tasks like setTimeout,
promises, API calls, etc.

 Summary Diagram (Text Version)
 
        Code
         ↓
      Parser
         ↓
   Abstract Syntax Tree
         ↓
       JIT Compiler
         ↓
   Machine Code Execution
         ↓
  ┌────────────┐
  │ Call Stack │ ← Execution Contexts (global + functions)
  └────────────┘
         ↓
 Async → Web APIs → Callback Queue → Event Loop → Call Stack
         ↑
     Memory Heap (for variables/objects)


*/


/*
Lexical scope
Lexical scope in JavaScript means that a variable’s accessibility is determined by its position in
the source code at the time of declaration.

function outer() {
  let a = 10;

  function inner() {
    console.log(a); // inner has access to 'a' from outer
  }

  inner();
}
outer();

*/


/*
What is Polyfills?
Polyfills in JavaScript are code (usually JavaScript code) that implement modern features 
on older browsers that do not natively support them.

or
A polyfill is a piece of code that adds missing functionality to older browsers by emulating 
modern JavaScript features.

if (!Array.prototype.includes) {
  Array.prototype.includes = function(element, fromIndex) {
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }
    var array = Object(this);
    var len = array.length >>> 0;
    if (len === 0) {
      return false;
    }
    var start = fromIndex | 0;
    var k = Math.max(start >= 0 ? start : len - Math.abs(start), 0);

    while (k < len) {
      if (array[k] === element || (typeof element === 'number' && typeof array[k] === 'number' && isNaN(element) && isNaN(array[k]))) {
        return true;
      }
      k++;
    }
    return false;
  };
}

*/































