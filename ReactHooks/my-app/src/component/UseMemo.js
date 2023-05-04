

import React, {useState, useMemo} from "react";

const  UseMemo =()=>{
    const [count, setCount] = useState(0)
    const [Item, setItem] = useState(10)
    const Muilticountmemo = useMemo(function maultiCount(){
        console.log("maulticount")
        return count *5
    }, [count] )

   
    return(
        <>
        <h2> Hooks in react</h2>
        <h3>Count: {count}</h3>
        <h3>Item: {Item}</h3>
        <h3>{Muilticountmemo}</h3>
        <button onClick={()=>setCount(count + 1)}>Update count</button>
        <button onClick={()=>setItem(Item *10)}>Update item</button>
        </>

    )
}
export default UseMemo;