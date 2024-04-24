import React from "react";
import classes from "./Sidebar.module.css";
import Equal from "../calculatorElements/equal/Equal";
import Display from "../calculatorElements/display/Display";
import Numbers from "../calculatorElements/numbers/Numbers";
import Computing from "../calculatorElements/computing/Computing";

const Sidebar: React.FC = () => {
  const onDragStart = (event: React.DragEvent, params:any) => {
    event.dataTransfer.setData("paramsElem", JSON.stringify(params));
  }
  return (
    <div className={classes.sidebar_wrapper}>
        <div draggable onDragStart={(e) => onDragStart(e, {elemId: "display", height: 1} )}>
          <Display />
        </div>
        <div draggable onDragStart={(e) => onDragStart(e, {elemId: "computing", height: 1} )}>
          <Computing />
        </div>
        <div draggable onDragStart={(e) => onDragStart(e, {elemId: "numbers", height: 4} )}>
          <Numbers />
        </div>
        <div draggable onDragStart={(e) => onDragStart(e, {elemId: "equal", height: 1} )}>
          <Equal />
        </div>
    </div>
  );
};


export default Sidebar;
