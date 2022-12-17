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
  complete: boolean;
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
      items: [...state.items, { id: state.counter, item: action.payload.item }],
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
  } else if (action.type === "COMPLETE") {
    const idx = state.items.findIndex((item) => item.id === action.payload.id);
    state.items[idx].item.complete = true;
    return {
      ...state,
    };
  } else if (action.type === "EDIT") {
    const idx = state.items.findIndex((item) => item.id === action.payload.id);
    state.items[idx].item = action.payload.item;
    return {
      ...state,
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
  const completeItemHandler = (id: string) => {
    dispatchToDoList({
      type: "COMPLETE",
      payload: {
        id,
      },
    });
  };

  const editItemHandler = (id: string, item: Item) => {
    dispatchToDoList({
      type: "EDIT",
      payload: {
        id,
        item
      },
    });
  };

  const toDoListContext = {
    items: toDoListState.items,
    totalAmount: toDoListState.totalAmount,
    counter: toDoListState.counter,
    addItem: addItemToListHandler,
    removeItem: removeItemFromListHandler,
    completeItem: completeItemHandler,
    editItem: editItemHandler,
  };

  return (
    <ToDoListContext.Provider value={toDoListContext}>
      {props.children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListProvider;
