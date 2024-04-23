import React from "react";
import classes from "./Calculator.module.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Calculator: React.FC = () => {
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshotDroppable) => (
        <div
          className={`${classes.calculator} ${
            snapshotDroppable.isDraggingOver ? classes.droppableHighlighted : ""
          }`}
          // className={classes.calculator}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Draggable draggableId="draggable1" index={0}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Block 1
              </div>
            )}
          </Draggable>
          <Draggable draggableId="draggable2" index={1}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Block 2
              </div>
            )}
          </Draggable>
          <Draggable draggableId="draggable3" index={2}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Block 3
              </div>
            )}
          </Draggable>
          <Draggable draggableId="draggable4" index={3}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Block 4
              </div>
            )}
          </Draggable>
          {provided.placeholder}
          {snapshotDroppable.isDraggingOver && (
            <div
              className={classes.draggableGhost}
              style={{ height: "50px" }}
            />
          )}
        </div>
      )}
    </Droppable>
  );
};

export default Calculator;
