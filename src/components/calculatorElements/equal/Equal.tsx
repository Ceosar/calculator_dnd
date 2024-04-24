import React from "react";
import classes from "./Equal.module.css";

const Equal: React.FC = () => {
  return (
    <section className={classes.equal_wrapper}>
      <span className={classes.equal_span}>=</span>
    </section>
  );
};

export default Equal;
