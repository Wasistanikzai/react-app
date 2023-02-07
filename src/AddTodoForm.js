import React, { useState } from "react"

function AddTodoForm(AddTodoForm) {
  const [todoTitle, setTodoTitle] = useState()

function handleTitleChange(event){
  let newTodoTitle=event.target.value;
  console.log(event.target.value)
  setTodoTitle(newTodoTitle);


}
  function handleAddTodo(event) {
    event.preventDefault()

    // let todoTitle = event.target.title.value
    // event.target.title.value = ""
    console.log(todoTitle)
    AddTodoForm.onAddTodo({title:todoTitle,id:Date.now()})  
    setTodoTitle("")
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"> Title</label>
      <input type="text" id="todoTitle" value={todoTitle} name="title" onChange={handleTitleChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm