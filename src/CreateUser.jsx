import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateUser=()=>{
    
    const[name,setName]=useState();
    const[email,setemail]=useState();
    const[address,setaddress]=useState();
    
    const submit=(e)=>{
        e.preventDefault();
        axios.post('https://backenddemo-2-bcah.onrender.com/api/user/create',{name,email,address})
        .then(result=>{
            console.log(result.data);
          
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <div className="x">
          <form onSubmit={submit}>
            <h1>create</h1>
            <label>Name:</label>
        <input type="text"  onChange={(e)=>setName(e.target.value)}/>
        <label>Email</label>
        <input type="text" onChange={(e)=>setemail(e.target.value)} />
        <label>Address:</label>
        <input type="text" onChange={(e)=>setaddress(e.target.value)}/>
        <button type="submit" style={{backgroundColor:"green",color:"white"}}>Create</button>
       </form>
       </div>
    )
}
export default CreateUser