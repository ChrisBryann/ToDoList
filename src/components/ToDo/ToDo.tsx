import { Fragment } from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const ToDo: React.FC<{onShowEdit: () => void, onEditID: (id: string) => void}> = (props) => {
    return <Fragment>
        <ToDoForm />
        <ToDoList onShowEdit={props.onShowEdit} onEditID={props.onEditID}/>
    </Fragment>
}

export default ToDo;