import React, { useContext, useRef } from "react";
import ToDoListContext from "../../../store/todolist-context";
import classes from "./ToDoForm.module.css";

const ToDoForm: React.FC = () => {
  const toDoListCtx = useContext(ToDoListContext);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    const date = new Date(`${dateRef.current!.value}T00:00`);
    toDoListCtx.addItem({
      desc: descriptionRef.current!.value,
      date: `${('0' + (date.getMonth()+1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}/${date.getFullYear()}`,
      complete: false,
    });

    descriptionRef.current!.value = "";
    dateRef.current!.value = "";
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Description</label>
        <input type="text" ref={descriptionRef} required />
        <label>Deadline</label>
        <input type="date" ref={dateRef} required />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
