import { useState } from 'react';

// Define your custom hook
const  useCounter = (initialValue) =>{
  const [count, setCount] = useState(initialValue);
  
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };

}


function CounterComponent() {

    //coutom Hooks
    //Benefit of custom Hooks 
    //1.Reusability
    //2.Cleaner Components
    // 3. In summary, custom hooks are a powerful feature in React that promotes code reusability, maintainability, 
    // and organization. 
    

  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;