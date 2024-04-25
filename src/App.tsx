import { useEffect } from "react";

import { Provider } from "react-redux";

import gsap from "gsap";

import store from "./services/store/store";

import Calculator from "./components/calculator/Calculator";
import Sidebar from "./components/sidebar/Sidebar";
import ToggleBtn from "./components/toggleBtn/ToggleBtn";

import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 2 } });
    t1.from(".main_app", { opacity: 0 });
  }, []);

  return (
    <Provider store={store}>
      <div className="main_app">
        <div className="calculator__container"></div>
        <ToggleBtn />
        <Sidebar />
        <Calculator />
      </div>
    </Provider>
  );
};

export default App;
