import { useState } from "react";
const Gallery = () => {
  var [counter,setCount] = useState(0);
  return (
    <section>
      <h1 style={{textAlign:'center',textDecoration:'underline'}}>This is my Gallery Page</h1>
      <h1 style={{textAlign:"center"}}>Learning State Concept</h1>
      <h3>The state of my variable counter is {counter}</h3>
      <button onMouseOver={()=>{setCount(counter + 1)}}>Increment</button>
      <button onDoubleClick={()=>{setCount(counter - 1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>    
    </section>
  );
};

export default Gallery;