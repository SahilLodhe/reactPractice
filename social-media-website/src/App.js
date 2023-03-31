import logo from './logo.svg';
import './App.css';
import { User } from './User' // must keep a space before and after the 'User' in the curly brackets
import { useState } from "react"

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setnewTask] = useState("");
  const handleChange = (event) => {
    setnewTask(event.target.value)
  }
  const addTask = () => {
    const newTodoList = [...todoList,newTask]; // this means to add the "newTask" to the end of the todoList
    setTodoList(newTodoList);
  };
  const deleteTask = (task) => {
    const newArray = (taskName) => {
      
    }
  }
  return(
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} type="text" name="" id="" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {newTask}
        {todoList.map((task) => {
          return <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}> X </button>  /*general and correct way of callng a onclick function with a parameter is to return it with an unnamed function*/
          </div>
        })}
        
      </div>
    </div>
  )
  // const [showText,setShowText] = useState(true)
  // // const toggleText = (event) => {
  // //   if(showText)
  // // }
  // return (
  //   <div className="App">
  //     <button onClick={() => {
  //       setShowText(!showText);
  //     }}>
  //       Show/Hide
  //     </button>
  //     {showText && <h1 style={{color : "red" }}> hi my name is sahil</h1>}
      
  //   </div>
  // )
  // const [inputValue,setInputValue] = useState("");
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  // }
  // return (
  //   <div className="App">
  //     <input type="text"  onChange={handleInputChange}/>
  //     {inputValue}
  //   </div>
  // )
  // return (
  //   <div className="App">
  //     <User name="sahil" age={21} email="sahillodhe17@gmail.com"/>
  //   </div>
  // );
  // const names = ["sahil","aditya","harsh"];
  // const users = [
  //   {name:"sahil",age:21},
  //   {name:"aditya",age:21},
  //   {name:"harsh",age:21},
  // ]
  // const[age,setAge] = useState(0);
  // const increaseAge = () => {
  //   setAge(age + 1)
  // }
  // const decreaseAge = () => {
  //   setAge(age - 1)
  // }
  // return (
  //   <div className="App">
  //     {age}
  //     <button onClick={increaseAge}>Increase Age</button>
  //     <button onClick={decreaseAge}>Decrease Age</button>
  //   </div>
  // )

  
  // return (
  //   <div className="App">
  //     {users.map((user,key) => {
  //       return <User name={user.name} age={user.age} />;
  //     })}
  //   </div>
  // )
  // if(age >= 18){
  //   return <h1>too old!</h1>
  // }
  // else{
  //   return <div className="App">underage!</div>
  // // }
  // return <div className="App">{age >= 18 ? <h1>too old!</h1> : <h1>underage!</h1>}
  //   <h1 style={{color:"red"}}>this has color</h1>
  // </div>
  // ternary operators

}

// write this keeping the first letter capital
// const User = (props) => {
//   return (
//     <div>{props.name} {props.age}</div>

//   )
// }
// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }
// const getName = () => {
//   return "sahil"
// }

// const getComponent = () => {
//   return <h1>Sahil</h1>
// }
export default App;
