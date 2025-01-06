import React from "react";
import './App.css'
// import Slam from "./Slam";
// import List from './List'
// import Hook from './Hook'
// import Ref from './Ref'
import Hen from "./Hen";
//import Route from "./Route"; 
import { createContext } from 'react';
export let colour =createContext();

 function App(){
  return(
   
    <colour.Provider value="" >
   <Hen />
    </colour.Provider>

  )
}
export default App;
