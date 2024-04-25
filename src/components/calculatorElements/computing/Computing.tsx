import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { computeValue, displayValue } from "../../../services/store/store";

import classes from "./Computing.module.css";

const Computing: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  const computingValue = useSelector((state: any) => state.value);
  const valueOnDisplay = useSelector((state: any) => state.dispValue);

  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {
    if (computingValue) {
      if (
        !computingValue.endsWith("+") ||
        !computingValue.endsWith("-") ||
        !computingValue.endsWith("*") ||
        !computingValue.endsWith("/")
      ) {
        setActiveBtn("");
      }
    }
    switch (computingValue.slice(-1)) {
      case "+":
        setActiveBtn("+");
        break;
      case "-":
        setActiveBtn("-");
        break;
      case "*":
        setActiveBtn("*");
        break;
      case "/":
        setActiveBtn("/");
        break;

      default:
        break;
    }
  }, [computingValue]);

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

  const handleClickBtn = (compute: string) => {
    if (!mode) {
      dispatch(displayValue(""));
      dispatch(computeValue(computingValue + compute));
    }
  };

  return (
    <section className={classes.computing_wrapper}>
      <span className={classes.computing_span}>
        <button
          className={activeBtn === "/" ? classes.activeBtn : ""}
          onClick={() => handleClickBtn("/")}
        >
          /
        </button>
        <button
          className={activeBtn === "*" ? classes.activeBtn : ""}
          onClick={() => handleClickBtn("*")}
        >
          x
        </button>
        <button
          className={activeBtn === "-" ? classes.activeBtn : ""}
          onClick={() => handleClickBtn("-")}
        >
          -
        </button>
        <button
          className={activeBtn === "+" ? classes.activeBtn : ""}
          onClick={() => handleClickBtn("+")}
        >
          +
        </button>
      </span>
    </section>
  );
};

export default Computing;
