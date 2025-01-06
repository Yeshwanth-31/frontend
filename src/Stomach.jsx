
import React,{ useContext }from 'react'
import { useState } from 'react'
import { colour } from './App'
 const Stomach=()=>{
    let dog=useContext(colour)
    let [togg,settog]=useState(false)
    let fun=()=>{

        
        settog(!togg)
    }
    return(
        <div>
            <button onClick={fun} >BUTTON</button>
            <h1 style={{color:togg?'black':'white',backgroundColor:togg?'white':'black'}}>Stomach {dog}</h1>
        </div>
    )
 }
 export default Stomach