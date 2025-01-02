import { useEffect, useState } from "react";
import axios from 'axios';
const UseEffectEg = () => {
    /*const[text,setText]=useState("kongu");
    useEffect(()=>{
        console.log(text);
        setText("KEC");
    },[]);
    return(
        <section>
        <h1>Use Effect example</h1>
        <input type="text" placeholder="enter your text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </section>
    );
    const [post,setPost] = useState();
    return(
        <section>
            <h1>Fetching the data from the placeholder</h1>
            <h2>post are {post}</h2>
        </section>*/
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => { console.log(res.data);setPost(res.data)}).catch((error)=> {console.log(error)})
        },[])
return (
    <section>
        <h1>Fetching the data from the placeholder</h1>
\        <ol>
            
                {post.map((data) => (<li key ={data.userId}>{data.title}</li>))}
    
            
        </ol>
    </section>

)
};
export default UseEffectEg;