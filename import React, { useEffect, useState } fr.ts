// import React, { useEffect, useState } from "react";
// import { Input } from "semantic-ui-react";

// const InputExampleInput = () => {
//   const [input, setInput] = useState("");
//   const [btnText, setBtnText] = useState("");

//   useEffect(() => {
//     let timeOut = setTimeout(() => {
//       setBtnText(input);
//     }, 3000);

//     return () => clearTimeout(timeOut);
//   }, [input]);

//   return (
//     <>
//       <Input
//         placeholder="Search..."
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button
//         style={{ minWidth: "50px", minHeight: "30px" }}
//         onClick={(e) => setInput("")}
//       >
//         {btnText}
//       </button>
//     </>
//   );
// };
// export default InputExampleInput;
