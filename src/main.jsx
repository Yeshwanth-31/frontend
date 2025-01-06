import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Form from './Form.jsx'
//import Slam from './slam.jsx'
// import List from './List.jsx'
import Apps from './Apps'
import Rote from './Rote'
import Stomach from './Stomach'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
    
)
