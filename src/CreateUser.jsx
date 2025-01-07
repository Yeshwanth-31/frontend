import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './create.css'
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
        <div className="create-form">
        <div>
            <h1>Create User</h1>
        </div>
        <form onSubmit={submit}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)}/><br />

            <label htmlFor="email">email</label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/> <br />

            <label htmlFor="address">address</label>
            <input type="text" id="address" onChange={(e) => setAddress(e.target.value)}/> <br />

            <button type="submit">Create</button>
        </form>
    </div>
    )
}
export default CreateUser