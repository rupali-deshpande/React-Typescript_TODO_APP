//context api in react ontext provides a way to share values like these between components 
//without having to explicitly pass a prop through every level of the tree.

import React, { useState } from "react";
import ToDo from "../model/todo";

type TodoContextObj = {
    item: ToDo[],
    addTodo: (text: string) => void,
    removeToDo: (id: string) => void

}

export const ToDoContext = React.createContext<TodoContextObj>({
    item: [],
    addTodo: () => { },
    removeToDo: (id: string) => { }
});

const ToDoContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<ToDo[]>([]);


    const addToDoHandler = (toDoText: string) => {
        const newToDo = new ToDo(toDoText);
        setTodos((prevTodo) => {
            return prevTodo.concat(newToDo)
        })
    };
    const onRemoveToDoHandler = (id: string) => {
        setTodos((prevToDo => {
            return prevToDo.filter(todos => todos.id !== id);
        }))
    }
    const contextValue: TodoContextObj = {
        item: todos,
        addTodo: addToDoHandler,
        removeToDo: onRemoveToDoHandler

    }
    return <ToDoContext.Provider value={contextValue}>
      {/* {props.children} */}
    </ToDoContext.Provider>
}

export default ToDoContextProvider