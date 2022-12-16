import "./App.css";
import Header from "./components/Layout/Header";
import ToDo from "./components/ToDo/ToDo";
import ToDoListProvider from "./store/ToDoListProvider";

function App() {
  return (
    <ToDoListProvider>
      <Header />
      <main>
        <ToDo />
      </main>
    </ToDoListProvider>
  );
}

export default App;
