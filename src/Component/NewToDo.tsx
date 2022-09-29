import React, { useContext, useRef, useState } from "react"
import ToDoContextProvider, { ToDoContext } from "../Store/todo-context";
import "../Component/NewToDo.style.css"


const NewToDo:React.FC  = () => {
    const todoContext = useContext(ToDoContext);
    const toDoinputRef = useRef<HTMLInputElement>(null);
    const [enterTitle, setTitle] = useState('')
    const titlehandlerClick = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>) => {

        setTitle(event.target.value)
    }
    const submitHandle = (event:React.FormEvent) => {
        event.preventDefault();

        // ? check value is assigned to entervalue if not it will assigned null
        //! assigned because we know value will not be null. it will assigned after we submit the form
        const entertedValue= toDoinputRef.current!.value
        if(entertedValue.trim().length===0){
            //throw the error
            return;
        }
       // todoContext.addTodo(entertedValue)
    }
    return(
        
        <>
       <form className="Form" onSubmit={submitHandle}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={titlehandlerClick} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={titlehandlerClick} type='text' id='description' />
        </div>
      </div>
      {/* <button disabled={formData === undefined ? true: false} >Add Todo</button> */}
      <button  >Add Todo</button>
    </form>
    
        </>
    )
}

export default NewToDo