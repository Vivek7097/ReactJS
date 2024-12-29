import { useState, useEffect } from "react"
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {

  const [todos, setTodos] = useState([]);

  const[TodoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }))
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList);
    persistData(newTodoList);
  } 

  function handleDeleteTodo (index) {
    const newTodo =  todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })

    setTodos(newTodo);
    persistData(todos);
  }

  function handleEditTodo (index){
    setTodoValue(todos[index]);
    handleDeleteTodo(index);  
    persistData(todos); 
  }

  useEffect ( () => {
    if(!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return;
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

    }, [])

  return (
    <>
      <TodoInput TodoValue={TodoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
