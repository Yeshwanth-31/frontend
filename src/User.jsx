import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
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
        <div>
            <h1>User</h1>
            <Link to="/create">Create user</Link>
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
                                <Link to={`/update/${users._id}`}>update</Link>
                                <button onClick={(e) => handleDelete(users._id)}>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default User