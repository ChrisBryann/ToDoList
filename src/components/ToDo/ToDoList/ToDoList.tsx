import React, { useCallback, useContext, useEffect, useState } from "react";
import ToDoListContext from "../../../store/todolist-context";
import { Item } from "../../../store/ToDoListProvider";
import ToDoItem from "./ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList: React.FC<{
  onShowEdit: () => void;
  onEditID: (id: string) => void;
}> = (props) => {
  const toDoListCtx = useContext(ToDoListContext);

  const fetchTodos = useCallback(async () => {
    let data: any = null;
    await fetch(
      "https://react-to-do-app-b4317-default-rtdb.firebaseio.com/todos.json"
    )
      .then(async (response) => {
        data = await response.json();
        console.log(data, "fetched data");
      })
      .catch((err) => {
        console.log(err.message, "fetch error");
      });
    if (data != null) {
      toDoListCtx.postTodo(data.items, data.totalAmount, data.counter);
    }
  }, []);

  const postTodos = useCallback(async (items :any[], totalAmount : number, counter: number) => {
    console.log("putting", totalAmount);

    if (totalAmount === 0) return;

    await fetch(
      "https://react-to-do-app-b4317-default-rtdb.firebaseio.com/todos.json",
      {
        method: "PUT",
        body: JSON.stringify({
          items: [...items],
          totalAmount: totalAmount,
          counter: counter,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((msg) => {
        console.log(msg, "post saved");
      })
      .catch((err) => {
        console.log(err.message, "post error");
      });
  }, []);

  useEffect(() => {
    console.log("list started!");
    fetchTodos();
  }, [fetchTodos]); //runs when list is first loaded

  useEffect(() => {
    const handleTabClose = (event: any) => {
      event.preventDefault();
      postTodos(toDoListCtx.items, toDoListCtx.totalAmount, toDoListCtx.counter);
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, [postTodos, toDoListCtx])

  return (
    <ul className={classes.todos}>
      {toDoListCtx.items.map(
        (item: { id: string; item: Item }) =>
          !item.item.complete && (
            <ToDoItem
              onComplete={toDoListCtx.completeItem.bind(null, item.id)}
              onDelete={toDoListCtx.removeItem.bind(null, item.id)}
              onEdit={props.onShowEdit}
              onEditID={() => {
                props.onEditID(item.id);
              }}
              item={item.item}
              key={item.id}
            />
          )
      )}
    </ul>
  );
};

export default ToDoList;
