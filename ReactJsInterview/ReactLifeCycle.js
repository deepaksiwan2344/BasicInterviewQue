//ReactLife Cycle

//componentDidMount  *********************************************
//Mounting:These methods are called when an instance of a component is created and inserted into the DOM.

//componentDidUpdate ***********************************************
//Updating:  These methods are called when a component is re-rendered due to changes in props or state.

//componentWillUnmount  **********************************************
//Unmounting This method is called when a component is removed from the DOM.  



//React life cycle in functional component


import React, { useEffect, useState } from 'react';
const ExampleComponent = () => {
  const [data, setData] = useState([]);
  // componentDidMount
  useEffect(() => {
    console.log('Component mounted');
    // Fetch data or perform any other side effects
    fetchData()
      .then(data => setData(data))
      .catch(error => console.error(error));
    // componentWillUnmount
    return () => {
      console.log('Component unmounted');
      // Clean up any resources, subscriptions, etc.
    };
  }, []); // Empty array as second argument for componentDidMount and componentWillUnmount
  // componentDidUpdate
  useEffect(() => {
    console.log('Component updated');
    // Perform any side effects or updates when component is updated
    updateData();
  }, [data]); // Array with dependencies for componentDidUpdate
  // Other business logic of the functional component
//   return (
//     // JSX to render component
//   );

};


export default ExampleComponent;