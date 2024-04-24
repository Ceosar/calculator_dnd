import React from "react";
import classes from "./Display.module.css";

const Display: React.FC = () => {
  return (
    <section className={classes.display_wrapper}>
      <span className={classes.display_span}>1</span>
    </section>
  );
};

export default Display;
