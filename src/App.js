import React, { useState, useEffect } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_ID = process.env.REACT_APP_BASE_ID;

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${BASE_ID}/Default`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
      .then((response) => response.json())
      .then((dataFromAPI) => {
        const todos = dataFromAPI.records.map((todo) => {
          const newTodo = {
            id: todo.id,
            title: todo.fields.Title
          }
          return newTodo
        });
        setTodoList(todos);
        setIsLoading(false);
      })
  }, []);

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo])
  }

  const removeTodo = (id) => {
    setTodoList((currentList) => currentList.filter((todo) => todo.id !== id))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Todo List</h1>
            <hr />
            <AddTodoForm onAddTodo={addTodo} setInput={setInput} />
            {
              isLoading ?
                <p>Loading...</p>
                :
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
            }
          </>
        } />
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
