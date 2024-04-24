import React from "react";
import classes from "./Computing.module.css";

const Computing: React.FC = () => {
  return (
    <section className={classes.computing_wrapper} draggable>
      <span className={classes.computing_span}>
        <button>/</button>
        <button>x</button>
        <button>-</button>
        <button>+</button>
      </span>
    </section>
  );
};

export default Computing;
