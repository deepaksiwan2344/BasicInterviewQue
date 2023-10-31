//Forward Ref is used when we need useRef pass form parrent to child 
//below example show

import { forwardRef } from "react";

const User = (props, ref)=>{
    console.log("ref", ref)
    return(
        <>
        <h2>hello deepak</h2>
        <input type="text" ref={ref}/>
        
        </>
    )
}
export default forwardRef(User);