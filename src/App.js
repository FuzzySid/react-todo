import React,{useState} from 'react';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';

export default function App(){

  const [todos,setTodos]=useState([
    'Walk the Dog',
    'Bake a Cake',
    'Study for the test'
  ])
   
    const addTodos=(newTodo)=>{
      setTodos([newTodo,...todos])
    }
    
    const deleteTodos=(todo)=>{
      let _todos=[...todos];
      _todos=_todos.filter(_todo=>_todo!==todo)
      setTodos(_todos)
    }

      return(
        <div className="card">
          <AddTodos  addTodos={addTodos}></AddTodos>
          <Todos deleteTodos={deleteTodos} todos={todos}></Todos>
        </div>
        
      )
}


