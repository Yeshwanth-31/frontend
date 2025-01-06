import React from "react";
import { BrowserRouter as Router,Routes,Link,Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import User from "./User";
const Apps=()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<User />}/> 
                    <Route path="/create" element={<CreateUser />}/> 
                    <Route path="/update/:id" element={<UpdateUser />}/> 
                </Routes>
            </Router>
        </div>   
    )
}
export default Apps