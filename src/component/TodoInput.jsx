import React, { useState } from 'react'

export default function TodoInput({handleAddTodo, TodoValue, setTodoValue}) {
    

    

    function inputHandler(e) {
        console.log(e.target.value);
        setTodoValue(e.target.value);
    }


  return (
    <header>
        <input placeholder='Enter todo...' value={TodoValue} onChange={inputHandler}/>
        <button onClick={()=> {
            handleAddTodo(TodoValue);
            setTodoValue('');
            }}>Add</button>
    </header>
  )
}
