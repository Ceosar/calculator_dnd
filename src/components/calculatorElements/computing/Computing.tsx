import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { computeValue, displayValue } from "../../../services/store/store";

import classes from "./Computing.module.css";

const Computing: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  const computingValue = useSelector((state: any) => state.value);
  const valueOnDisplay = useSelector((state: any) => state.dispValue);

  const handleClickBtn = (compute: string) => {
    if (!mode) {
      dispatch(displayValue(""));
      dispatch(computeValue(computingValue + compute));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mode) {
        const numKey = event.key;
        switch (numKey) {
          case "+":
            handleClickBtn("+");
            break;
          case "-":
            handleClickBtn("-");
            break;
          case "*":
            handleClickBtn("*");
            break;
          case "/":
            handleClickBtn("/");
            break;

          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode, valueOnDisplay, dispatch]);

  return (
    <section className={classes.computing_wrapper}>
      <span className={classes.computing_span}>
        <button onClick={() => handleClickBtn("/")}>/</button>
        <button onClick={() => handleClickBtn("*")}>x</button>
        <button onClick={() => handleClickBtn("-")}>-</button>
        <button onClick={() => handleClickBtn("+")}>+</button>
      </span>
    </section>
  );
};

export default Computing;
