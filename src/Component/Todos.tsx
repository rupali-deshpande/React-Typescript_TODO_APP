//props is object
//FC  type is  

import TodoItem from "./TodoItem";
import Csslassess from '../model/Todo.module.css';
import ToDoContextProvider, { ToDoContext } from "../Store/todo-context";
import { useContext, useEffect } from "react";
import NewToDo from "./NewToDo";
import Card from "./UI/card";
import classes from '../Component/Home/Home.module.css'
import { Grid } from "@mui/material";

const Todos: React.FC = () => {
const {item } =useContext(ToDoContext)
useEffect(() =>{
    console.log("items" , item)
} ,[item])
console.log("data in cart" , item)
    return (
        <>
        
   <NewToDo />
   <Grid container spacing={3}>
            <ul className={Csslassess.todos}>
                { 
                item?.map((item) => (
                   <TodoItem key={item.userId}   items={item}  />
                )
                ) }
            </ul>
            </Grid>
          
        </>
    );
}
// function Todos(props: {items:string[] , children}) {
//     return(
//         <>
//         <ul>
//             <li>Learn Todo</li>
//             <li>learn React</li>
//         </ul>
//         </>
//     );
// }

export default Todos;

