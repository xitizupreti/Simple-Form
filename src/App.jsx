import React, { useState } from "react";

function Time() {
  var current = new Date();
  var tim = current.toLocaleTimeString();
  return tim;
}

const App = () => {
  var t = Time();
  const state = useState();
  const [timee /*current value*/, setTime /*Updated value*/] =
    useState(t); /*initial value*/

  const time = () => {
    setTime(t);
  };

  return (
    <>
      <div>
        <h1>{timee}</h1>
        <button onClick={time}>Get time</button>
      </div>
    </>
  );
};

export default App;
