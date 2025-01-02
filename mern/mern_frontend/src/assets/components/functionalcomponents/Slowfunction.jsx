import { useState, useMemo } from "react";

var SlowFunction = (number) =>{
    for(let i=0 ; i < 1000000;i++){
        return number;
    }

}
var UseMemo =()=>{
    var [num,setNum] = useState(0);
    var [theme,setTheme]= useState(true);
    var darklight={
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black",

    }

    var doublingANumber = useMemo(() =>{return SlowFunction(num)}, [num]);

    
    return(<section>
        <h1> This is the example of useMemo</h1>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
        <button onClick={()=>setTheme(theme = !(theme))}>Toggle Theme</button>
        <h2 style={darklight}>{doublingANumber}</h2>
    </section>)
}
export default UseMemo;