//props is object
//FC  type is  

import ToDo from "../model/todo";
import TodoItem from "./TodoItem";
import Csslassess from '../model/Todo.module.css';
import ToDoContextProvider, { ToDoContext } from "../Store/todo-context";
import { useContext } from "react";


const Todos: React.FC = () => {
const todoContext =useContext(ToDoContext)
    return (
        <>
            <ul className={Csslassess.todos}>
                {todoContext.item.map((item) => (
                    <TodoItem key={item.id} text={item.text} onRemoveToDo={todoContext.removeToDo.bind(null , item.id)} />
                ))}
            </ul>
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

