import { Fragment } from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const ToDo = () => {
    return <Fragment>
        <ToDoForm />
        <ToDoList />
    </Fragment>
}

export default ToDo;