import React from "react";

let AddTodoForm =function(){

    return (
        <div>
           <form>
        <label htmlFor="todoTitle">
            Title:
        </label>
            <input type="text" id="todoTitle" name="name" />

        <button>Add</button>
        </form>  
        </div>
    )

}


export default AddTodoForm;



