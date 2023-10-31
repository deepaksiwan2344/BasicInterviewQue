import React, { useState, useMemo } from 'react';

const  ExpensiveCalculationComponent = () =>{
  const [count, setCount] = useState(0);

  // Example of an expensive calculation function.
  const calculateExpensiveValue = (value) => {
    console.log('Calculating expensive value...');
    return value * 2;
  };




  // Using useMemo to memoize the result of calculateExpensiveValue.
  const memoizedValue = useMemo(() => calculateExpensiveValue(count), [count]);
  

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExpensiveCalculationComponent