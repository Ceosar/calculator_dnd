import { Provider } from "react-redux";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Sidebar from "./components/sidebar/Sidebar";
import store from "./services/store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="main_app">
        <Sidebar />
        <Calculator />
      </div>
    </Provider>
  );
};

export default App;
