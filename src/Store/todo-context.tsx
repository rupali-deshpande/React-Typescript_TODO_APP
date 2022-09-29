//context api in react on text provides a way to share values like these between components 
//without having to explicitly pass a prop through every level of the tree.

import axios from "axios";
import React, { useEffect, useState } from "react";
import  { newlyaddedTodo, ToDo }  from "../model/todo";


type TodoContextObj = {
    item: ToDo[]|undefined,
    addTodo: (data:ToDo) => void,
    // removeToDo: (id: string) => void

}

interface Props {
    children: React.ReactNode;
  }

export const ToDoContext = React.createContext<TodoContextObj>({
    item: [],
     addTodo: () => { },
    // removeToDo: (id: string) => { }
});




const ToDoContextProvider: React.FC<Props> = ({children}) => {

    const [todos, setTodos] = useState<ToDo[]>();
    const [addedProducts, setAddedProducts] = useState<newlyaddedTodo[]>([]);
    
    useEffect(() => {
      
     fetchData()

    } , [])
    const fetchData = () => {
      axios.get("https://jsonplaceholder.typicode.com/users/1/todos").then((res) => {
      console.log("product data" ,res)
      setTodos(res.data);
       //setTodos(false);
     })
     .catch(
       (error) => {
         console.log(error);
      }
     
     )
    }
    const addToDoHandler = (toDoText: newlyaddedTodo) => {
      setAddedProducts((prevProd) => {
        const arr = [...prevProd, toDoText];
        return arr;
        
      });
      console.log("form", toDoText)
    };
    // const onRemoveToDoHandler = (id: string) => {
    //     setTodos((prevToDo => {
    //         return prevToDo.filter(todos => todos.id !== id);
    //     }))
    // }
    
    return <ToDoContext.Provider value={{item:todos ,addTodo:addToDoHandler }}>{children}</ToDoContext.Provider>;
};

export default ToDoContextProvider;