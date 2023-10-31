//useRef is used when we need to direct manupulate DOM in react and when we need to focus on input 
//show below as a example

//1: Accessing and Modifying DOM Elements:

import React,{useRef} from "react";
const UseRef = ()=>{
    let inputRef = useRef(null)
    console.log("inputRef", inputRef)
    const HandleInput=()=>{
        console.log("hello")
        inputRef.current.value= '1000'
        inputRef.current.style.color= "red";
        // inputRef.current.focus();
    }
    return(
        <>
        <h2>UseRef</h2>
        <input type="text" ref={inputRef}/>
        <button onClick={HandleInput}>Handle Input</button>
        </>

    )
}
export default UseRef;