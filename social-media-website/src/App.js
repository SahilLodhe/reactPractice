import logo from './logo.svg';
import './App.css';
import { User } from './User' // must keep a space before and after the 'User' in the curly brackets
import { useState,useEffect } from "react"
import { Task } from "./task"

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setnewTask] = useState("");
  const handleChange = (event) => {
    setnewTask(event.target.value)
  }
  useEffect(() => {
    console.log("component mounted")
    return () => {
      console.log("component unmounted") // the return value of an useeffect is used by default as the stuff to return when component is unmounted 
    }
  }, [newTask])
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList,task])
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id){
          return{...task, completed: true }
        }
        else{
          return task;
        }
      })
    )
  }
  return(
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} type="text" name="" id="" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask = {completeTask}/>
        })}
        
      </div>
    </div>
  )

}

 }
