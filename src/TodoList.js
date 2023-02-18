import React from "react"
import TodoListItem from "./TodoListItem"

function TodoList(props) {
 
  return (
    <ul>
      {props.todoList.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList