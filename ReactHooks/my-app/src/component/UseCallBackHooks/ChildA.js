import React, {memo} from 'react'

function ChildA  ({Learning, count}) {
    console.log("child component")
    return(
       <div></div>
    )
  
   
}

export default memo(ChildA);