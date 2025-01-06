import {useState,useEffect} from 'react';
function Hook(){
    let[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("value updated");
        //code cleanup
        return(()=>{
            <h1>code cleanup</h1>
        })
    },[count])
    return(
        <div>
            <h1> count : {count}</h1>
            <button onClick={()=> setCount(count+1)}>increment</button>
            <button onClick={()=> setCount(count-1)}>decrement</button>
        </div>
    )
}
export default Hook
