import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Sidebar from "./components/sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <>
      <div className="main_app">
        <Sidebar />
        <Calculator />
      </div>
    </>
  );
}

export default App;
