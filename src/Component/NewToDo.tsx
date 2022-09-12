import React, { useContext, useRef } from "react"
import Classes from '../Component/NewToDo.module.css';
import ToDoContextProvider, { ToDoContext } from "../Store/todo-context";

const NewToDo:React.FC  = () => {
    const todoContext = useContext(ToDoContext);
    const toDoinputRef = useRef<HTMLInputElement>(null);

    const submitHandle = (event:React.FormEvent) => {
        event.preventDefault();

        // ? check value is assigned to entervalue if not it will assigned null
        //! assigned because we know value will not be null. it will assigned after we submit the form
        const entertedValue= toDoinputRef.current!.value
        if(entertedValue.trim().length===0){
            //throw the error
            return;
        }
        todoContext.addTodo(entertedValue)
    }
    return(
        <>
        <form onSubmit={submitHandle} className={Classes.form}>
            <label htmlFor="text">ToDo's</label>
            <input  type="text" ref={toDoinputRef}/>
            <button>Add ToDo's</button>
        </form>
        </>
    )
}

export default NewToDo