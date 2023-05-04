// Hooks are functions that allow you to "hook into" the React lifecycle and state management 
// features from functional components. React provides several built-in hooks, including:

import { useCallback, useMemo } from "react"
// useState - Allows you to add state to your functional component.
// useEffect - Allows you to run side-effects (like fetching data from an API) in your component.
// useContext - Allows you to access data stored in the context API from your component.
// useReducer - Allows you to manage state with a reducer function, similar to how Redux works.
// useCallback - Allows you to return memoize a function so that it only re-renders when its dependencies change.
//useCallback is used to memoize a callback function,
// useMemo - Allows you to memoize a value so that it only re-computes when its dependencies change.
// useRef - it is use for DOM Manipulate


// Using hooks, functional components can now have state, side-effects, and other advanced features previously only 
// available in class components. This has simplified React code and made it 
// easier to write and maintain.


//difference between useCallback and useMemo
//useCallback is used to memoize callback functions, while useMemo is used to memoize computed values or results. 

