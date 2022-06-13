import React, { useState } from "react";

const App = () => {
  const [state, setState]=useState();
  const [state1, setState1]=useState();
  const [Full,setFull]=useState();
  const [Last,setLast]=useState();
  const e=(dis)=>{
    var val=setState(dis.target.value);
    return val;
  }
  const e1=(dis)=>{
    var val1=setState1(dis.target.value);
    return val1;
  }
  const done=(event)=>{
    event.preventDefault();
    setFull(state);
    setLast(state1);
  }
  return (
    <>
    <form onSubmit={done}>
      <div>
        <h1>Hello {Full} {Last}</h1>
        <input type="text" placeholder="Enter your name" onChange={e} value={state}></input>
        <input type="text" placeholder="Enter your pw" onChange={e1} value={state1}></input>
        <button>Click Me ❤️</button>
      </div>
      </form>
    </>
  );
};

export default App;
