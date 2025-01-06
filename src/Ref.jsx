
//function Ref(){
    // let[count,setCount]=useState(0);
    // let countref=useRef(0);
    // let increament = ()=>{
    //     setCount(count+1);
    //     countref.current++;
    //     console.log("state:",count);
    //     console.log("Ref: ",countref.current);

    // }
    // return(
    //     <div>
    //         <h1>Count: {countref.current}</h1>
    //         <button onClick={increament}>++++</button>
    //     </div>
    // )

import React from 'react'
import { useState,useRef } from 'react';
import download from './assets/download.jpg';


const Ref = () => {
  
    let[Count,setCount]=useState(0);
    let CountRef=useRef(0)
    let[image,setimage]=useState(false);
        let increment=()=>{
        setCount(Count+1);
        CountRef.current++;
        console.log("State",Count);
        console.log("REf",CountRef.current);
        
        if(image){
            setimage(false);
        }
        else{
            setimage(true);
        }
        
    }
    return (
    <div>   
        <div className='imageontrue'>
            {image && <img src={download}/>}
        </div>
        <h1> count:{CountRef.current}</h1>
        <button onClick={increment}>+++</button>
        <button >---</button>
      
    </div>
  )
}
export default Ref