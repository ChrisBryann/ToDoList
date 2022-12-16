import { Item } from "../../../../store/ToDoListProvider";
import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{ item: Item }> = (props) => {
  return <li className={classes.item}>
    <h3>{props.item.desc}</h3>
    <p>Do by: {props.item.date}</p>
  </li>;
};

export default ToDoItem;
