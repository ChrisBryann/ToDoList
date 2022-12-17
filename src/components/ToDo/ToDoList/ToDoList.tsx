import { useContext } from "react";
import ToDoListContext from "../../../store/todolist-context";
import { Item } from "../../../store/ToDoListProvider";
import ToDoItem from "./ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList: React.FC<{onShowEdit: () => void, onEditID: (id: string) => void}> = (props) => {
  const toDoListCtx = useContext(ToDoListContext);

  return (
    <ul className={classes.todos}>
      {toDoListCtx.items.map((item: { id: string; item: Item }) => (
        !item.item.complete && <ToDoItem onComplete={toDoListCtx.completeItem.bind(null, item.id)} onDelete={toDoListCtx.removeItem.bind(null, item.id)} onEdit={props.onShowEdit} onEditID={() => {props.onEditID(item.id)}} item={item.item} key={item.id} />
      ))}
    </ul>
  );
};

export default ToDoList;
