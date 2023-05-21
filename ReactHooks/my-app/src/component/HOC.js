//Hoc Higher order is a component that pass as a component and retrun 
//some addition as a compoent


import React,{useState} from "react";
function HOC ()  {
  return (
    <>
      <h1>HOC</h1>
      <Counter />
      <HOCred cmp={Counter} />
      <HOCgreen cmp={Counter} />
    </>
  );
};
function HOCred  (props){
  //console.log("props")
  return (
    <h2 style={{ background: "red", width: "100%" }}>
      <props.cmp />
    </h2>
  );
};

function HOCgreen  (props) {
  //console.log("props")
  return (
    <h2 style={{ background: "green", width: "100%" }}>
      <props.cmp />
    </h2>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default HOC;
