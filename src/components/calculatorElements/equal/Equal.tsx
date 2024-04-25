import React from "react";
import classes from "./Equal.module.css";
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
      const result = eval(computingValue);
      dispatch(displayValue(result));
    }
  };

  return (
    <section className={classes.equal_wrapper}>
      <button onClick={() => computeResult()} className={classes.equal_span}>
        =
      </button>
    </section>
  );
};

export default Equal;
