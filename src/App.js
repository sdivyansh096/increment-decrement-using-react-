import './App.css';
import React ,{useState} from 'react';

function App() {
const [count,setCount]=useState(0);
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  return (
  <div className="container">
    <div className="header">Increment && Decrement</div>
    <div className="counter-container">
    <button className="button" onClick={decrement}>
      -
    </button>
    <div className="counter"> 
     {count}
    </div>
    <button className="button" onClick={increment}>
      +
      </button>
    </div>
    <button className="button" onClick={reset}>
      Reset
      </button>
  </div>
  );
}

export default App;
