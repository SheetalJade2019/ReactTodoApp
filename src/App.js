import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';


function App() {
  const onDelete=(todo)=>{
    console.log("deleting todo ",todo)
    
    setTodos(todos.filter=(e)=>
    {
      return e!==todo;
    })
  }
  const [todos,setTodos] = useState( [
    {
      sno:1,
      todo:"Go to market",
      desc:"You have to go to market to get this job done."
    },
    {
      sno:2,
      todo:"Go to mall",
      desc:"You have to go to mall to get this job done."
    },
    {
      sno:3,
      todo:"Go to college",
      desc:"You have to go to college to get this job done."
    }
  ])

  return (
    <>
    <Header title="MyTodoList" searchBar={false} />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;
