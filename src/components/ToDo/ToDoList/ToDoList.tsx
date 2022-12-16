import { useContext } from 'react'
import ToDoListContext from '../../../store/todolist-context'
import { Item } from '../../../store/ToDoListProvider'
import ToDoItem from './ToDoItem/ToDoItem'
import classes from './ToDoList.module.css'

const ToDoList: React.FC = () => {
    const toDoListCtx = useContext(ToDoListContext)

    return <ul className={classes.todos}>
        {toDoListCtx.items.map( (item :{id: string; item: Item;}) => <ToDoItem item={item.item} key={item.id}/>)}
    </ul>
}

export default ToDoList;