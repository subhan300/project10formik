import React from 'react';
import './App.css';
import StepperComponent  from './Stepper';
import FormTwo from "./form2"
function App() {
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",alignItems:"center",
    padding:"40px"}}>
 <div>
 <h1 style={{color:"blue"}}>FORMIK FORM <span style={{color:"red"}}>PROJECT 10</span></h1>
  <StepperComponent />
 </div>
    </div>
  );
}

export default App;
