import React, {useState} from 'react'
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Container
  } from "reactstrap";
  import { v4 } from "uuid";

const TodoForm = ({addTodoList}) => {
    const [todoName, setTodoName] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if(!todoName){
            return alert("Please enter your todo")
        }

        const todos = {
            todoName,
            id: v4()
        }

        addTodoList(todos)
        setTodoName("")
    }

   return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
        <Input 
            type="text"
            placeholder='Please enter your todo'
            value = {todoName}
            onChange={(e) => setTodoName(e.target.value)}
        />
        <Button color="success">Add Todo</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default TodoForm
