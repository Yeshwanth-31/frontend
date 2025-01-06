import React from "react";
import Home from "./Home";
import Aboutus from "./Aboutus"
import Contactus from "./Contactus"
import './App.css'
 import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import logo from './assets/logo.png'
function Rote(){
    return( 
        <Router>
            <div class= "hh">
                <img src={logo} style={{height:"30px",width:"30px",padding:"5px 3px 3px",backgroundcolor: "#ee8f17"}}/>
                <h3 class="xy" style={{position:"absolute",top:"-8px",left:"50px",padding:"5px 6px 6px",color:"White",backgroundColor:"#ee8f17"}}>Logo</h3>
                <nav class="x">
                   <Link className='Home' to="/">Home</Link>
                   <Link className='Aboutus' to= "/Aboutus">Aboutus</Link>
                   <Link className='Contactus' to= "/Contactus">Contactus</Link> 
                </nav>
                </div>
                <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
         <div class="f"> 
         <footer>
            <p>copyrights &copy; 2024</p>
         </footer>
         </div>
         </Router>
       
    )
}
export default Rote;