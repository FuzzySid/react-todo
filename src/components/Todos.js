import React from 'react';

const Todos=({deleteTodos,todos})=>{
    
    const todoItems=[];
    todos.forEach(todo => {
        todoItems.push(
                <li key={todo} >{todo} 
                <button className="btn btn-delete" onClick={()=>{deleteTodos(todo)}}>
                    ✖
                </button>
                </li>
         
        )
    });

    return(
        <div className="list-container">
            <ul className="list">
                {todoItems}
            </ul>
        </div>
    )
}
export default Todos;