import React, {useReducer} from "react"
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {TodoContext} from "./Context/TodoContext"
import todoReducer from "./Context/reducer"
import TodoForms from "./Components/TodoForms"
import TodoList from "./Components/TodoList"

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>TODO app with Context API</h1>
        <TodoList />
        <TodoForms />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
