import React from "react";
import classes from "./Computing.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { computeValue, displayValue } from "../../../services/store/store";

const Computing: React.FC = () => {
  const inputValue: any = [];

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
