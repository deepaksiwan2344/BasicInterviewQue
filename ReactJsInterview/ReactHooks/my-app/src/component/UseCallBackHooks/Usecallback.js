import React, {useCallback, useState} from 'react'
import ChildA from './ChildA'

const Usecallback = () => {
    const [Add, setAdd] = useState(0)
    const [count, setcount] = useState(0);
    const Learning = useCallback(()=>{
        //some operations
        console.log("hello deepak")

    }, [])
    return (
      <div>
      <ChildA Learnin={Learning} count={count}/>
      <h3> {Add}</h3>
      <button onClick={()=>setAdd(Add + 1)}>Addition</button>
      <h3>{count}</h3>
      <button onClick={()=>setcount(count + 2)}>count</button>
      
      </div>
    )
}

export default Usecallback