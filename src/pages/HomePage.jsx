
// import ReactPlayer from "react-player/youtube";
import React, { useState } from "react"; 
 import Counter from "../components/data/Counter";
function HomePage() {
  // calculator state
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleChange = e => setInput(e.target.value);
  const parse = () => parseFloat(input) || 0;
  const add = () => setResult(prev => prev + parse());
  const subtract = () => setResult(prev => prev - parse());
  const multiply = () => setResult(prev => prev * parse());
  const divide = () => {
    const val = parse();
    setResult(prev => prev / (val === 0 ? 1 : val));
  };
  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  // inline styles for buttons
  const buttonStyle = {
    marginRight: "0.5rem",
    padding: "0.4rem 0.8rem",
    background: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer"
  };
  const resetStyle = {
    ...buttonStyle,
    background: "#ff5c5c",
    color: "#fff"
  };

  
  return (
    <div>
      <h2>Welcome to Dog App</h2>
      <p>Select Breeds to view dogs.</p>
      
    <div> 
        <button onClick={ () => console.log('clicked') }> 
  Click me
</button>
      </div>
  <Counter />
      {/* simple calculator section */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Simplest Working Calculator</h3>
        {/* result display */}
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{result}</div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ width: "240px", padding: "0.4rem", fontSize: "1rem", marginRight: "0.5rem" }}
        />
        <div style={{ marginTop: "0.5rem" }}>
          <button style={buttonStyle} onClick={add}>add</button>
          <button style={buttonStyle} onClick={subtract}>subtract</button>
          <button style={buttonStyle} onClick={multiply}>multiply</button>
          <button style={buttonStyle} onClick={divide}>divide</button>
          <button style={resetStyle} onClick={resetInput}>reset input</button>
          <button style={resetStyle} onClick={resetResult}>reset result</button>
        </div>
      </div>

      {/* <MyVideo /> */}
      {/* <img src={require("../assets/images/logo512.png")} alt="Dog" style={{ maxWidth: "400px" }} /> */}
    </div>
  );
}

// const MyVideo = () => {
//   return (
//     <ReactPlayer url='https://www.youtube.com/watch?v=T8TZQ6k4SLE' />
//   );
// };

export default HomePage;