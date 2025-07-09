// Beginner-Level Questions
// What is React?
// React is a JavaScript library for building user interfaces, maintained by Facebook.
//  It uses a component-based architecture and a virtual DOM for efficient updates.

// What are components in React?
// Components are independent, reusable pieces of UI in a React app. They can be functional or class-based.

// What is JSX?
// JSX is a syntax extension that allows writing HTML-like code inside JavaScript. It’s used with React to describe UI structure.

// What is the virtual DOM?
// A virtual DOM is a lightweight copy of the real DOM that React uses to determine the most efficient way to update the UI.

// What are props in React?
// Props are inputs passed from a parent to a child component, used to customize and control behavior.

// What is state in React?
// State is a local data storage that is mutable and managed within a component.

// What is the difference between props and state?
// Props are read-only and passed from parent to child state is internal and can be updated.

// What is a functional component?
// A function that returns JSX and does not use lifecycle methods or local state (before hooks).


// What is a class component?
// A component defined using ES6 classes that can use state and lifecycle methods.

// What is a pure component?
// A component that does a shallow comparison of props and state to prevent unnecessary renders.


// Intermediate-Level Questions
// What are hooks in React?
// Hooks are functions that let you use state and other React features in functional components.

// What is useState?
// A hook that lets you add state to a functional component.

// What is useEffect?
// A hook for performing side effects (e.g., data fetching, subscriptions).

// What is useRef?
// A hook used to access and persist values across renders or interact with the DOM.

// What is useContext?
// A hook that allows a component to subscribe to React context.

// What is lifting state up?
// Moving state to a common parent so it can be shared between child components.

// What is prop drilling?
// Passing props through multiple levels of components unnecessarily.

// What is the Context API?
// A way to pass global data (like themes or auth) without prop drilling.

// What is conditional rendering?
// Rendering different UI elements based on conditions (e.g., if, ternary operator).

// What is an event in React?
// A synthetic wrapper around native browser events used in React components.

// Advanced-Level Questions
// What is reconciliation in React?
// The process of comparing the current and previous virtual DOM to update the real DOM efficiently.

// What is the role of keys in React lists?
// Keys help React identify which items have changed or been added/removed.

// What are fragments in React?
// A way to return multiple elements without adding extra nodes to the DOM.

// What is memoization?
// A performance optimization technique to cache the result of expensive calculations.

// What is React.memo?
// A higher-order component that prevents unnecessary re-renders by memoizing the component.

// What is useMemo?
// A hook that memoizes a computed value between renders.

// What is useCallback?
// A hook that memoizes a function between renders.

// What is a higher-order component (HOC)?
// A function that takes a component and returns a new enhanced component.

// What is lazy loading in React?
// Loading components only when needed using React.lazy.

// What is Suspense in React?
// A component that allows waiting for something before rendering (usually used with React.lazy).

//  Performance Optimization
// How to optimize React app performance?
// Use memoization (useMemo/useCallback), lazy loading, React.memo, and avoid unnecessary re-renders.

// What is code splitting?
// Breaking the app into smaller bundles to load only what’s needed.

// How to prevent re-renders?
// Use React.memo, PureComponent, and proper key usage.

// What is a controlled component?
// A form input where the value is controlled by React via state.

// What is an uncontrolled component?
// A form input that maintains its own state using the DOM.

// What is forwardRef?
// A React API that allows a parent component to access a child’s ref.

// How to handle forms in React?
// Use controlled inputs with onChange handlers and useState.

// What is the difference between BrowserRouter and HashRouter?
// BrowserRouter uses the HTML5 history API; HashRouter uses the URL hash for navigation.

// What is useImperativeHandle?
// A hook used with forwardRef to expose specific methods to parent components.

// What is debounce in React?
// A technique to delay execution of a function after a pause in input events.

//  Testing and Ecosystem
// How to test React components?
// Use Jest and React Testing Library for unit and integration testing.

// What is Enzyme?
// A testing utility for React that provides shallow rendering and component introspection.

// What is React Testing Library?
// A library for testing React components by simulating user interactions.

// What is Redux?
// A state management library for JavaScript applications.

// What are actions in Redux?
// Plain JavaScript objects that describe an event in the app.

// What are reducers in Redux?
// Functions that handle actions and update the state accordingly.

// What is the Redux store?
// The centralized state container in a Redux application.


// Difference between Redux and Context API?
// Redux is more powerful and suited for complex state management, while Context API is simpler and built-in.

// What is redux-thunk?
// A middleware that allows writing async logic that interacts with the store.
// What is the use of useSelector and useDispatch in Redux?
// useSelector accesses state from the store; useDispatch sends actions to the store.

/*
1.What is React Fiber?
React Fiber is the reconciliation engine in React — it’s the algorithm that figures out what
changed in the UI and what to update in the DOM.

key feature of Fiber:
Reconciliation	Finds what changed in the UI
Prioritization	Handles urgent tasks first (like user input)
Incremental Work	Breaks large updates into small steps
Interruptible	Can pause and resume rendering
Concurrent Mode	Enables React to prepare multiple screens at once
*/

/*

Hooks
useState,
useEffect,
useContext,
useReducer,
useRef

Important Hooks for Experience

useReducer:
useReducer is a React hook used to manage more complex state logic than useState.
when to use:
When the next state depends on previous state
When you have multiple related pieces of state,
When you want to Redux like pattern is a simpler way
Example: const [state, dispatch] = useReducer(reducer, initialState);


useContext:
useContext is used to consume values from a React Context without manually drilling props.
When you want to share state/data (like theme, user info, language) across many components.
Shares data between deeply nested components	

useRef:
useRef is a React hook that gives you a way to create a mutable reference which persists across renders.
const myRef = useRef(initialValue);
1. Accessing DOM Elements (like document.querySelector)
2. Storing Mutable Values Without Re-render



*/
/*
Custom Hooks:
Why Use Custom Hooks?
Logic written once and reused
Easier to maintain and test
Cleaner, more modular components
*/


/*
NPM (Node package manager)
The default package manager for Node.js
A tool that helps you install, manage, and update third-party libraries, tools, and frameworks
node_modules contains all your installed packages
package.json: Declares what packages your app uses
package-lock.json: It saves the exact version installed (e.g., 1.5.0) and all nested dependencies.

*/

/*
Component Optimization in React js
 useCallback,
 useMemo,
 React.memo

*/

/*
What is Babel?
Babel is a JavaScript compiler that allows you to write modern JavaScript (ES6/ES7/ESNext) and convert it 
into backward-compatible JavaScript that can run in older browsers or environments.

*/

/*
 What is Webpack?
Webpack is a module bundler that takes many files and dependencies (JavaScript, CSS, images) 
and bundles them into a small set of optimized files, usually bundle.js.
 Key Features:
JSX to JS conversion (for React).

Supports TypeScript conversion.

Plugin system (@babel/preset-env, @babel/preset-react).

*/

/*
What is NPM?
NPM is the default package manager for Node.js. It lets you install libraries, frameworks, 
tools, and dependencies for JavaScript development.
Why NPM is important?
Manages project dependencies (React, Babel, Webpack, etc.).
Shares and reuses open-source code.


Scripts automation (npm run dev, npm start).
Key Concepts:
package.json: File that lists your project's dependencies and scripts.
node_modules/: Folder where all downloaded packages are stored.

*/

/*
SSG – Static Site Generation
What is SSG?
Pages are pre-rendered at build time.
HTML files are generated once and reused on every request.
*/

/*
SSR – Server-Side Rendering
What is SSR?
Page is generated on each request on the server.
Ensures up-to-date content always.


*/
/*
ISR – Incremental Static Regeneration
What is ISR?
Combines best of SSG and SSR.
Static HTML is generated at build, and then regenerated on the server in the background after a set time.
Update static pages without rebuilding the whole app.


*/
/*
latest version of node js
Node.js v24.2.0:

latest version of React js
  React 19.1.0

*/

/*
difference between react query and redux toolkit
React Query is a data-fetching library focused on managing server state like API calls, caching, 
pagination, and background syncing.
Redux Toolkit is a state management library used for managing client-side (UI) state, like user authentication, 
modals, theme toggles, and shared UI data.


React Query: Manage server state
Redux toolkit: Manage client/UI state

Client/UI state refers to data that lives only in the frontend (browser) and is used to control the 
behavior or appearance of the user interface (UI).

*/

/*
What is render props in react js
Render props is a technique in React where a component receives a function as a prop and 
calls it to determine what to render.

Render props is a pattern in React that allows components to share logic by passing a function as a prop, 
which returns JSX to control the rendered output.

*/

/*
useDeferredValue Hooks:
 1. A React hook that delays rendering
 2. Use for Delaying rendering of slow UI

*/








