import React,{useRef} from "react";
import User from "./User"
const Home =()=>{
    let InputRef = useRef(null)
    function Updateinput(){
        InputRef.current.value = "1000"
        InputRef.current.focus()
        InputRef.current.style.color = "red"
    }
    return(
        <>
        <h2>Forward Ref Example</h2>
        <User ref={InputRef}/>
        <button onClick={Updateinput}>Update Input Box</button>
        </>
    )
}
export default Home