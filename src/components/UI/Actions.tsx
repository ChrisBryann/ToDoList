import CheckIcon from "./Icons/CheckIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
import classes from "./Actions.module.css";

const Actions: React.FC<{
  completeHandler: () => void;
  deleteHandler: () => void;
  editHandler: () => void;
  editID: () => void;
}> = (props) => {
  return (
    <div className={classes.action}>
      <button onClick={props.completeHandler}>
        <CheckIcon />
      </button>
      <button onClick={props.deleteHandler}>
        <DeleteIcon />
      </button>
      <button onClick={() => {props.editHandler(); props.editID()}}>
        <EditIcon />
      </button>
    </div>
  );
};

export default Actions;
