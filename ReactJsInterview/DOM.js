// the Virtual DOM is a key feature of
// ReactJS that helps to optimize the rendering of the UI,
//In ReactJS, the Virtual DOM (Document Object Model) 


//React js is a library of javascript
//React creates a Virtual DOM, which is a lightweight copy of the actual DOM in memory.



 
let a = window;
console.log(a)
console.log("javascript")

  /********************  How React Work ********************/
// 1. Virtual DOM (VDOM)
// React doesn’t touch the real DOM directly.
// It creates a Virtual DOM, which is a lightweight copy of the actual DOM in memory.

// 2. Initial Render
// a. When your component first renders:
// JSX is converted to JavaScript objects.
// React builds a Virtual DOM tree.
// It then updates the real DOM based on that tree.

// 3. Re-rendering on State/Prop Change
// React creates a new Virtual DOM.
// It compares it with the previous Virtual DOM using a process called "diffing".
// React calculates the minimal set of changes needed.

// 4. Efficient DOM Update
// React updates only the parts of the real DOM that actually changed — not the entire page.
// This makes updates very fast and efficient.

// 5.Reconciliation
// The process of comparing old VDOM and new VDOM and syncing real DOM is called reconciliation.





































