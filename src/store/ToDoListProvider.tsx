import { useReducer } from "react";
import ToDoListContext from "./todolist-context";

const defaultToDoListState = {
  items: [],
  totalAmount: 0,
  counter: 0,
};

export interface Item {
  desc: string;
  date: string;
}

interface State {
  items: any[];
  totalAmount: number;
  counter: number;
}

interface Action {
  type: string;
  payload: {
    id?: string;
    item?: Item;
  };
}

const toDoListReducer = (state: State, action: Action) => {
  if (action.type === "ADD") {
    return {
      items: [
        ...state.items,
        { id: state.counter, item: action.payload.item },
      ],
      totalAmount: state.totalAmount + 1,
      counter: state.counter + 1,
    };
  } else if (action.type === "REMOVE") {
    const updatedItems = state.items.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - 1,
      counter: state.counter,
    };
  } else if (action.type === "CLEAR") {
    return defaultToDoListState;
  }
  return defaultToDoListState;
};

const ToDoListProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [toDoListState, dispatchToDoList] = useReducer(
    toDoListReducer,
    defaultToDoListState
  );

  const addItemToListHandler = (item: Item) => {
    dispatchToDoList({
      type: "ADD",
      payload: {
        item,
      },
    });
  };
  const removeItemFromListHandler = (id: string) => {
    dispatchToDoList({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  };
  const toDoListContext = {
    items: toDoListState.items,
    totalAmount: toDoListState.totalAmount,
    counter: toDoListState.counter,
    addItem: addItemToListHandler,
    removeItem: removeItemFromListHandler,
  };

  return (
    <ToDoListContext.Provider value={toDoListContext}>
      {props.children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListProvider;
