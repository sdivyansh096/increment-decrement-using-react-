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
  <div>
    <div>Increment && Decrement</div>
    <div>
    <button onClick={decrement}>
      -
    </button>
    <div> 
     {count}
    </div>
    <button onClick={increment}>
      +
      </button>
    </div>
    <button onClick={reset}>
      Reset
      </button>
  </div>
  );
}

export default App;
