import React from "react";
import classes from "./Display.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { computeValue, displayValue } from "../../../services/store/store";

const Display: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  const valueOnDisplay = useSelector((state: any) => state.dispValue);
  const computingValue = useSelector((state: any) => state.value);
  const inputNumber = valueOnDisplay;

  console.log(computingValue);
  const handleClickBtn = () => {
    if (!mode && valueOnDisplay.lenght>0) {
      dispatch(computeValue(computingValue.slice(0, -1)));
      dispatch(displayValue(valueOnDisplay.slice(0, -1)));
    }
  };
  return (
    <section className={classes.display_wrapper}>
      <span onClick={() => handleClickBtn()} className={classes.display_span}>
        {inputNumber}
      </span>
    </section>
  );
};

export default Display;
