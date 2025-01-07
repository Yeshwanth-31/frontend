import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import './table.css'
const User = () => {
    const [user, setUser] = useState([ ])

    useEffect(() => {
        axios.get('https://backenddemo-2-bcah.onrender.com/api/user/fetch')
        .then((res) => {
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handleDelete = (id) => {
        axios.delete(`https://backenddemo-2-bcah.onrender.com/api/user/delete/${id}`)
        .then(res => {
            console.log("user deleted")
        })
        .catch(err => console.log(err)) 
    }
    
    return(
        <div className="tablecont">
            <h1>USER DETAILS</h1>
           <Link to="/create"className="cr">Create user</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                {
                    user.map((users)=>(
                        <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td>
                               <button ><Link to={`/update/${users._id}`} className="up">update</Link></button>
                                <button className="delbut" onClick={(e) => handleDelete(users._id)}>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default User