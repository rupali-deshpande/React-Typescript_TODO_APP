
import Classes from '../Component/ToDoItem.module.css';
//<>fc merger own propd
//If you want to import entire model you need to pass todo:ToDo

const TodoItem: React.FC<{text:string ; onRemoveToDo: () => void}> = (props) => {
    return(
        <>
        <li className={Classes.item}>{props.text}
        <div className='button'><button onClick={props.onRemoveToDo}>Delete</button>
</div>
        </li>
        
        </>
    )

}

export default TodoItem