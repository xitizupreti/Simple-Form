import React,{useState} from 'react';

const App = () =>{
    const state= useState();
const [count /*current value*/ ,setCount /*Updated value*/] = useState(0)/*initial value*/; 

const Inc=()=>{
setCount(count+1);
}

return(
    <>
    <div>
    <h1>{count}</h1>
    <button onClick={Inc} >Click here</button>
    </div>
    </>
)
}

export default App;