import React from "react"
import TodoListItem from "./TodoListItem"

var todoList = [
  { id: 1, title: "List.1" },
  { id: 2, title: "List.2" },
  { id: 3, title: "List.2" },
]
function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList