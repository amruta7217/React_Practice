import React from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const TodoList = ({todos, deleteTodo}) => {
  return (
    <ListGroup className='mt-5 mb-3 items'>
        {todos.map(todo => (
            <ListGroupItem key={todo.id}>
                {todo.todoName}
                <span className="float-right" onClick={() => deleteTodo(todo.id)}>
                    <FaCheckDouble />
                </span>
            </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default TodoList
