import { useContext, useState } from "react";
import Classes from "../Component/ToDoItem.module.css";
import { ToDo } from "../model/todo";

import "../App.css";
import { ToDoContext } from "../Store/todo-context";
//<>fc merger own propd
//If you want to import entire model you need to pass todo:ToDo

const TodoItem: React.FC<{ item: ToDo }> = ({ item }) => {
  const checkTodo: string = item.completed ? `line-through` : "";
  const{updateTodo , removeToDo} = useContext(ToDoContext)
  
 
  return (
    <>
      <div className="Card">
        <div className="Card--text">
          <h1 className={checkTodo}>{item.id}</h1>
          <span className={checkTodo}>
            {item.title.length > 40
              ? item.title.substring(0, 40)
              : item.title}{" "}
          </span>
        </div>
        <div className="Card--button">
                {!item.completed && 
          <button onClick={() => {
            console.log("button click" )
            updateTodo(item)}}
            
          >
            Complete
          </button>}
          <button  onClick={()=>removeToDo(item)} className="Card--button__delete">Delete</button>
        </div>
      </div>
      {/* <li>{items.completed}</li> */}
      {/* <li>{items.userId}</li> */}

      {/* <li className={Classes.item}>{props.text}
        <div className='button'><button onClick={props.onRemoveToDo}>Delete</button>
</div> */}
    </>
  );
};

export default TodoItem;
