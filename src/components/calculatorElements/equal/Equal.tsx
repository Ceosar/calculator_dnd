import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { evaluate } from "mathjs";

import { computeValue, displayValue } from "../../../services/store/store";

import classes from "./Equal.module.css";

const Equal: React.FC = () => {
  const dispatch = useDispatch();
  const computingValue = useSelector((state: any) => state.value);
  const valueOnDisplay = useSelector((state: any) => state.value);
  const mode = useSelector((state: any) => state.mode);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mode) {
        const numKey = event.key;
        if (numKey === "Enter" || numKey === "=") {
          computeResult();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode, valueOnDisplay, dispatch]);

  const computeResult = () => {
    if (!mode) {
      try {
        const result = evaluate(computingValue);
        dispatch(displayValue(result.toString()));
        dispatch(computeValue(""));
        dispatch(computeValue(result.toString()));
      } catch (_error) {}
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
