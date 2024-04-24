import React from "react";
import classes from "./Numbers.module.css";

const Numbers: React.FC = () => {
  return (
    <section className={classes.numbers_wrapper}>
      <span className={classes.numbers_span}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className={classes.numbers_zero}>0</button>
        <button>,</button>
      </span>
    </section>
  );
};

export default Numbers;
