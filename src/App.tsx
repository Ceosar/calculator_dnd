import { Provider } from "react-redux";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Sidebar from "./components/sidebar/Sidebar";
import store from "./services/store/store";
import ToggleBtn from "./components/toggleBtn/ToggleBtn";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="main_app">
        <ToggleBtn />
        <div className="calculator__container">
          <Sidebar />
          <Calculator />
        </div>
      </div>
    </Provider>
  );
};

export default App;
