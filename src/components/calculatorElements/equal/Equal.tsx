import React, { useEffect } from "react";
import classes from "./Equal.module.css";
import math, { evaluate } from "mathjs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { computeValue, displayValue } from "../../../services/store/store";

const Equal: React.FC = () => {
  const dispatch = useDispatch();
  const computingValue = useSelector((state: any) => state.value);
  const valueOnDisplay = useSelector((state: any) => state.value);
  const mode = useSelector((state: any) => state.mode);

  const computeResult = () => {
    if (!mode) {
      try{
        const result = evaluate(computingValue);
        dispatch(displayValue(result.toString()));
      }
      catch(error){
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mode) {
        const numKey = event.key;
        if(numKey === "Enter" || numKey === "="){
          computeResult();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode, valueOnDisplay, dispatch]);

  return (
    <section className={classes.equal_wrapper}>
      <button onClick={() => computeResult()} className={classes.equal_span}>
        =
      </button>
    </section>
  );
};

export default Equal;
