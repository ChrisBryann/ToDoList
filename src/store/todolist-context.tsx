import React from "react";
import { Item } from "./ToDoListProvider";

const ToDoListContext = React.createContext({
  items: [] as any,
  totalAmount: 0,
  counter: 0,
  addItem: (item: Item) => {},
  removeItem: (id: string) => {},
  completeItem: (id: string) => {},
  editItem: (id: string, item: Item) => {},
});

export default ToDoListContext;
