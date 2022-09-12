import React, { useRef } from "react"

import Classes from '../Component/NewToDo.module.css';

const NewToDo:React.FC<{onAddToDo: (text:string) => void}>  = (props) => {
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
        props.onAddToDo(entertedValue)
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