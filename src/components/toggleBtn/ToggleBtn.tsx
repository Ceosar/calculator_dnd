import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  computeValue,
  displayValue,
  setToggleBtn,
} from "../../services/store/store";

import { EyeOutlined, CodeOutlined } from "@ant-design/icons";

import classes from "./ToggleBtn.module.css";

const ToggleBtn: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  const draggableItems = useSelector((state: any) => state.draggableItems);

  const handleClickBtn = () => {
    dispatch(setToggleBtn(!mode));
    localStorage.setItem("mode", JSON.stringify(!mode));
    dispatch(displayValue(""));
    dispatch(computeValue(""));
  };

  return (
    <button
      className={`${classes.toggle__wrapper} ${
        mode ? classes.off : classes.on
      } `}
      style={{ pointerEvents: draggableItems.length ? "auto" : "none" }}
      onClick={() => {
        if (draggableItems.length !== 4) {
          alert("Соберите калькулятор полностью!");
        } else {
          handleClickBtn();
        }
      }}
    >
      <div className={classes.modes_wrapper}>
        <div className={`${classes.mode} ${mode ? "" : classes.active}`}>
          <EyeOutlined style={{ color: mode ? "initial" : "rgb(93,95,239)" }} />
          Runtime
        </div>
        <div className={`${classes.mode} ${mode ? classes.active : ""}`}>
          <CodeOutlined
            style={{ color: mode ? "rgb(93,95,239)" : "initial" }}
          />
          Constructor
        </div>
      </div>
    </button>
  );
};

export default ToggleBtn;
