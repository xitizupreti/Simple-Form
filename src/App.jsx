import React, { useState } from "react";

const App = () => {
  const [state, setState]=useState();
  const e=(dis)=>{
    var val=setState(dis.target.value);
    return val;
  }
  return (
    <>
      <div>
        <h1>Hello {state}</h1>
        <input type="text" placeholder="Enter your name" onChange={e}></input>
        <button>Click Me ❤️</button>
      </div>
    </>
  );
};

export default App;
