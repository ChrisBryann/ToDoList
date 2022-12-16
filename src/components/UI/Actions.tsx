import CheckIcon from "./Icons/CheckIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
import classes from './Actions.module.css'

const Actions: React.FC = (props) => {
  return (
    <div className={classes.action}>
      <button>
        <CheckIcon />
      </button>
      <button>
        <DeleteIcon />
      </button>
      <button>
        <EditIcon />
      </button>
    </div>
  );
};

export default Actions;