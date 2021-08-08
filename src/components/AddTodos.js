import React from 'react';
import { useState } from "react";

export default function AddTodos({addTodos}){
    
    //STATES
    const [name,setName]=useState('')

    //EFFECTS

    //METHODS
    const handleChange=(e)=>{
        setName(e.target.value )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodos(name);
        document.querySelector('form').reset();
    }
   
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="item"></label>
            <input onChange={handleChange} type="text" placeholder="Add a todo..." id="item"/>
            <button className="btn btn-add">Add</button>
        </form>
    </div>
    )
}


