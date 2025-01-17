import React, { useState } from "react";

const App = () => {
	
  // set state of totos and input area to empty
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  
  // add todo to list function
  const addTodoItem = () => {
    // add new todo item to todo array and use spread to copy current todo items
      setTodos([...todos, input])
    // set the input field to '' after adding new todo item  
      setInput('')
    }

  // check off todo item function  
  const checkOffTodo = (index) => {
    // use filter to update todo list by the index of todo item you wanna check off
    setTodos(todos.filter((_, i) => i !== index))
  }
  
  return <>
		<h1>Todo List</h1>

    <ul>
      {/* maps through each todo item in the todos array */}
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          {/* button that runs check off function for individual todo item */}
          <button onClick={() => checkOffTodo(index)}>Done!</button>
        </li>
      ))}
    </ul>

    {/* input field for adding new todo item */}
    <input
    type="text"
    // connects whatever's in the input field to the input state
    value={input}
    // placeholder text so we can getByPlaceholder
    placeholder="Add to your todo list"
    // when the input field changes, update input state
    onChange={(event) => setInput(event.target.value)}
    />
    {/* button that when clicked runs function to add item to list */}
    <button onClick={addTodoItem}>Add to list</button>
	</>
}

export default App;