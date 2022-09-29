
import { useContext } from 'react';
import Classes from '../Component/ToDoItem.module.css';
import { ToDo } from '../model/todo';

import '../App.css'
//<>fc merger own propd
//If you want to import entire model you need to pass todo:ToDo

const TodoItem: React.FC<{ items:ToDo}> = ({items}) => {
    const checkTodo: string = items.completed ? `line-through` : ''
    console.log("data in cart" , items)
    return(
        <>
        <div className='Card'>
      <div className='Card--text'>
        <h1 className={checkTodo}>{items.id}</h1>
        <span className={checkTodo}>{items.title.length >5  ? items.title.substring(0, 20)
                        : items.title} </span>
      </div>
      <div className='Card--button'>
        <button
         
          className={items.completed ? `hide-button` : 'Card--button__done'}
        >
          Complete
        </button>
        <button
        
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
            {/* <li>{items.completed}</li> */}
            {/* <li>{items.userId}</li> */}
            
        {/* <li className={Classes.item}>{props.text}
        <div className='button'><button onClick={props.onRemoveToDo}>Delete</button>
</div> */}
        
        
        </>
    )

}

export default TodoItem