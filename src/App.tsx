import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const onDragEnd = () => {};

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="main_app">
        <Sidebar />
        <Calculator />
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
