import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import ToDo from "./components/ToDo/ToDo";
import EditForm from "./components/ToDo/ToDoForm/EditForm";
import ToDoListProvider from "./store/ToDoListProvider";

function App() {
  const [showEdit, setShowEdit] = useState(false);
  const [editID, setEditID] = useState("");

  const showEditHandler = () => {
    setShowEdit(true);
  }

  const setEditIDHandler = (id :string) => {
    setEditID(id);
  }

  const resetEditIDHandler = () => {
    setEditID("");
  }

  const hideEditHandler = () => {
    setShowEdit(false);
  }
  return (
    <ToDoListProvider>
      {showEdit && <EditForm id={editID} onHideEdit={hideEditHandler} onResetID={resetEditIDHandler}/>}
      <Header />
      <main>
        <ToDo onShowEdit={showEditHandler} onEditID={setEditIDHandler}/>
      </main>
    </ToDoListProvider>
  );
}

export default App;
