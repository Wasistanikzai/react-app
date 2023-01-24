import React from "react";

const list = [
  {id:1,title:"Assignment 1"},
  {id:2,title:"Assignment 2"},
  {id:3,title:"Assignment 3"},
];
let TodoList=function(){
    return (
        <div>
            <h1>Hey CodeTheDream</h1>
          <ul>    
           {list.map(function(l){
             return <li key={l.id}>{l.title}</li>
           })}
           </ul>
        </div>
    )
}

export default TodoList;  