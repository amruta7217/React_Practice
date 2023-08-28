import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log("old effect sas")
    const localData = localStorage.getItem("todos")
    if(localData){
      setTodos(JSON.parse(localData))
    }
  }, []);

  
  const addTodoList = async todo => {
    setTodos([...todos, todo])
  };
  
  const deleteTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };
  
  useEffect(() => {
    console.log("new effect")
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);
  
  return (
    <Container fluid>
      <Todos todos={todos}  deleteTodo={deleteTodo} />
      <TodoForm addTodoList={addTodoList}/> 
    </Container>
  );
}

export default App;
