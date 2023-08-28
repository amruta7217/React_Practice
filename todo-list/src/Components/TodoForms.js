import React, {useState, useContext} from 'react'
import {
    Input,
    InputGroup,
    Form,
    FormGroup,
    InputGroupAddon,
    Button
} from "reactstrap"

import {v4} from 'uuid'
import {TodoContext} from "../Context/TodoContext"
import {ADD_TODO} from "../Context/action.types"

 const TodoForms = () => {
    const [todoString, setTodoString] = useState("")
    const {dispatch} = useContext(TodoContext)

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            alert("Please enter a todo")
        }

        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("")
        
    }


  return (
    <Form style={{bottom:"200px"}} onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder='Your Next todo'
                    value={todoString}
                    onChange={(e) => setTodoString(e.target.value)}
                />
                <div className="input-group-append">
                    <Button color = "success">Add</Button>
                </div>
            </InputGroup>
        </FormGroup>
    </Form>
  )
}

export default TodoForms
