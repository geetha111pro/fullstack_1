import { useState,useRef, useEffect } from "react";
const UseRefno =() =>{
    const[count,setCount]=useState(0);

    function increasecount(){
        setCount(count+1);
    }
    function decreasecount(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }

    const[num,setNum]=useState("");
    const prevnum = useRef("");
    

    useEffect(()=>{
        prevnum.current =Number(num); 
      });

    return(
        <div>
            <h1 style={{textAlign:"center"}}>TASK</h1>
            <h2>Count : {count}</h2>
            <button onClick={increasecount}>increment</button>
            <button onClick={decreasecount}>decrement</button>
            <button onClick={reset}>reset</button>
            <br/>
            <br/>
            <h2>Number :</h2>
            <input type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
            <h3>Current Number : {num}</h3>
            <h3>previous number : {prevnum.current}</h3>
            

        </div>

    );
};
export default UseRefno;