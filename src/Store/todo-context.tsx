//context api in react on text provides a way to share values like these between components 
//without having to explicitly pass a prop through every level of the tree.

import axios from "axios";
import React, { useEffect, useState } from "react";
import  { newlyaddedTodo, ToDo }  from "../model/todo";


type TodoContextObj = {
    item: ToDo[],
    addTodo: () => void,
    updateTodo:(data:ToDo)=>void 
    removeToDo: (data:ToDo) => void

}

interface Props {
    children: React.ReactNode;
  }

export const ToDoContext = React.createContext<TodoContextObj>({
    item: [],
     addTodo: () => { },
     updateTodo:() => {},
    removeToDo: () => {}
});




const ToDoContextProvider: React.FC<Props> = ({children}) => {

    const [todos, setTodos] = useState<ToDo[]>([]);
    const [addedProducts, setAddedProducts] = useState<newlyaddedTodo[]>([]);
    
    useEffect(() => {
      if(localStorage.getItem('NewTodos')){
        const allTodos = JSON.parse(localStorage.getItem('NewTodos')|| '')
        setTodos(allTodos)
      }
      else{
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
      
    

    } , [])
    
    
    const addToDoHandler = () => {
      if(localStorage.getItem('NewTodos')){
        const allTodos = JSON.parse(localStorage.getItem('NewTodos')|| '')
        setTodos(allTodos)
      }
      
      };
     
      const statusHandler = (item:ToDo) => {
        const todoitme= todos.map((currentitem) =>{
          if(item==currentitem){
            item.completed=true
          }
          
          return currentitem
        }
        
        )
        setTodos(todoitme)
        console.log("updated" , todos)
      }
    const onRemoveToDoHandler = (id:ToDo) => {
      
        setTodos((prevToDo => {
          return prevToDo.filter(todos => todos!==id);

      }))
      console.log("updated" , todos)
      }
       
        
    
    
    return <ToDoContext.Provider value={{item:todos ,addTodo:addToDoHandler , updateTodo:statusHandler , removeToDo:onRemoveToDoHandler}}>{children}</ToDoContext.Provider>;
};

export default ToDoContextProvider;