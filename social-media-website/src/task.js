export const Task = (props) => {
    return (
        <div className='task'>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}> X </button>  /*general and correct way of callng a onclick function with a parameter is to return it with an unnamed function*/
            <button onClick={() => props.completeTask(props.id)}> Complete </button>  /*general and correct way of callng a onclick function with a parameter is to return it with an unnamed function*/
            </div>
    )
}