import './App.css';
import React from 'react'
import ColorBox from "./ColorBox.js"

function App() {

  return (
    <div className="App">
       
      <header> 
       <h1 className="head">color choice</h1>
         <ColorBox/>
      </header>
    </div>
  );
}

export default App;
