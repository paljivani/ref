import { useRef } from "react";
import './App.css';


let App =() => {
  const input = useRef();

  const focIn = () => {
    console.log(input.current.value)
    input.current.focus();
  }
  return (
    <div style={{textAlign:'center',marginTop:'20px'}}>
      <input type="text" ref={input}/>
      <button onClick={focIn}>click hear</button>
    </div>
  );
}
export default App;
