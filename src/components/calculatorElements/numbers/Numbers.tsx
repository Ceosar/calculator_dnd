import React from "react";
import classes from "./Numbers.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { computeValue, displayValue } from "../../../services/store/store";

const Numbers: React.FC = () => {
  const dispatch = useDispatch();
  const valueOnDisplay = useSelector((state: any) => state.dispValue)
  const computingValue = useSelector((state: any) => state.value)
  const mode = useSelector((state: any) => state.mode);

  const handleClickBtn = (num:string) => {
    if(!mode){
      dispatch(displayValue(""))
      dispatch(displayValue(valueOnDisplay + num))
      dispatch(computeValue(computingValue + num))
    }
  }

  return (
    <section className={classes.numbers_wrapper}>
      <span className={classes.numbers_span}>
        <button onClick={() => handleClickBtn("7")}>7</button>
        <button onClick={() => handleClickBtn("8")}>8</button>
        <button onClick={() => handleClickBtn("9")}>9</button>
        <button onClick={() => handleClickBtn("4")}>4</button>
        <button onClick={() => handleClickBtn("5")}>5</button>
        <button onClick={() => handleClickBtn("6")}>6</button>
        <button onClick={() => handleClickBtn("1")}>1</button>
        <button onClick={() => handleClickBtn("2")}>2</button>
        <button onClick={() => handleClickBtn("3")}>3</button>
        <button onClick={() => handleClickBtn("0")} className={classes.numbers_zero}>0</button>
        <button onClick={() => handleClickBtn(",")}>,</button>
      </span>
    </section>
  );
};

export default Numbers;
