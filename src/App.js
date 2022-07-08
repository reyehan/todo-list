import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus ] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);



  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default: 
        setFilteredTodos(todos);
        break;
    }
  }

    //useEffect 
    useEffect(() => {
      filterHandler();
    }, [todos, status]);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Reyhan's toDo List</h1>
      </header>
      <Form 
      inputText={inputText}
       setTodos={setTodos} 
       todos={todos} 
       setInputText={setInputText}
       setStatus={ setStatus }/>
      <TodoList
       setTodos={setTodos} 
       filteredTodos={filteredTodos}
       todos={todos} />
    </div>
  );
}

export default App;
