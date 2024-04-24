import React from "react";
import classes from "./Sidebar.module.css";
import Equal from "../calculatorElements/equal/Equal";
import Display from "../calculatorElements/display/Display";
import Numbers from "../calculatorElements/numbers/Numbers";

const Sidebar: React.FC = () => {
  return (
    <div className={classes.sidebar_wrapper}>
        <div draggable onDragStart={(e) => onDragStart(e, "display")}>
          <Display />
        </div>
        <div draggable onDragStart={(e) => onDragStart(e, "equal")}>
          <Equal />
        </div>
        <div draggable onDragStart={(e) => onDragStart(e, "numbers")}>
          <Numbers />
        </div>
    </div>
  );
};

function onDragStart(event: React.DragEvent, elemId:string) {
  event.dataTransfer.setData("text/plain", elemId);
}

export default Sidebar;
