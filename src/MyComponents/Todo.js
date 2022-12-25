import React from 'react'

const Todo = (props) => {
  return (
    <div className='container'>
      <h1 className='text-center' >Todo List</h1>
      <div>
      <h4>{props.task.todo}</h4>
      <p>{props.task.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete}}>Delete</button>
      </div>
    </div>
  )
}

export default Todo
