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
  // const [catFact,setCatFact] = useState("")
  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((result) => {
  //     setCatFact(result.data.fact)
  //   })
  // }
  // useEffect(() => {
  //   Axios.get("https://catfact.ninja/fact").then((result) => { // over here, result is passed as an object and not as a primitive data type as that in fetch method
  //     setCatFact(result.data.fact);
  //   })
  // }, []);
  const [name,setName] = useState("")
  const [PredictedAge,setPredictedAge] = useState(null)
    const fetchData = () => {
      Axios.get(`https://api.agify.io/?name=${name}`).then((result) => {
        console.log(result.data);
        setPredictedAge(result.data);
      }) // we have made the 'name' part of the link as a variable
    }
  return (
    <div className="App">
      <input placeholder='Ex : Sahil Lodhe' onChange={(event) => {
        setName(event.target.value);
      }}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Name : {PredictedAge?.name}</h1> {/*// the question mark states that "only access the data if the name/age/count is not null"*/}
      <h1>Predicted Age : {PredictedAge?.age}</h1>
      <h1>Predicted Count : {PredictedAge?.count}</h1>
    </div>
  );
}

export default App;
