import React from 'react'
import Todo from '../MyComponents/Todo'

const Todos = (props) => {
  // let todoCnt = props.todos.length

  return (
    <div className='container'>
      {
        props.todos.length === 0 ? "You Have Nothing To Do" : props.todos.map((todo) => 
          {
            return <Todo task={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        } 
      
      
    </div>
  )
}

export default Todos
