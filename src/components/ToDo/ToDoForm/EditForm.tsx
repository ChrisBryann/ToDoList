import { useContext, useRef } from "react";
import ToDoListContext from "../../../store/todolist-context";
import { Item } from "../../../store/ToDoListProvider";
// import { Item } from "../../../store/ToDoListProvider";
import Modal from "../../UI/Modal";
import classes from "./ToDoForm.module.css";

const EditForm: React.FC<{
  onHideEdit: () => void;
  id: string;
  onResetID: () => void;
}> = (props) => {
  const toDoListCtx = useContext(ToDoListContext);
  const item = toDoListCtx.items.find(
    (item: { id: string; item: Item }) => item.id === props.id
  ).item;
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  let date = item.date.split("/");
  date = [date[2], date[0], date[1]].join("-");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const desc = descriptionRef.current!.value;
    const date = new Date(`${dateRef.current?.value}T00:00`);

    toDoListCtx.editItem(props.id, {
      desc,
      date: `${("0" + (date.getMonth() + 1)).slice(-2)}/${(
        "0" + date.getDate()
      ).slice(-2)}/${date.getFullYear()}`,
      complete: item.complete,
    });
    props.onResetID();
    props.onHideEdit(); //once finish editing, close the editing box
  };

  return (
    <Modal onClick={props.onHideEdit}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Description</label>
        <input
          type="text"
          ref={descriptionRef}
          defaultValue={item.desc}
          required
        />
        <label>Deadline</label>
        <input type="date" ref={dateRef} defaultValue={date} required />
        <button>Edit</button>
      </form>
    </Modal>
  );
};

export default EditForm;
