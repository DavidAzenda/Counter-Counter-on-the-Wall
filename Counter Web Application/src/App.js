// import logo from './logo.svg';
import './App.css';

import { useState} from 'react';


function App(){  
  const [count,setCount] = useState(0);
  const [text, setText] = useState(" ");
 
  function getData(val){
    setCount(val.target.value)
    console.warn(val.target.value)
  }
  function increase(){
    setCount(count + 1)
  }
  
  function decrease(){
    setCount(count - 1)
  };

  function assign(){ 
    setCount(parseInt(text))
  };
  
  return(
    <header className = "App"> 
      <div className = "App-grid-container">
        <div className = "App-grid-item1">
          <input type="text" placeholder = "Put a number" className = "App-input" onChange={e => setText(e.target.value)} />
          <button  className = "App-button2" onClick = {assign}> Assign</button> 
            
        </div>
        <div className = "App-grid-item2">
        <h1 > {count} </h1>
        </div>
        <div className = "App-grid-item3">
        <button className = "App-button4" onClick = {increase}>+</button>
        <button className = "App-button3" onClick = {decrease}> - </button>
        </div>
      </div>

    </header>
    
      
  );
  
}
export default App;
