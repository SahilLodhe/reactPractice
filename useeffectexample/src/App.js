import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import { useState,useEffect } from "react"
fetch("https://catfact.ninja/fact")
  .then((response) => response.json()) // response to javascript object
  .then((data) => {
    console.log(data)
});

function App() {
  const [catFact,setCatFact] = useState("")
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((result) => {
      setCatFact(result.data.fact)
    })
  }
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((result) => { // over here, result is passed as an object and not as a primitive data type as that in fetch method
      setCatFact(result.data.fact);
    })
  }, []);
  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
