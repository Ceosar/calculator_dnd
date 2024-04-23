import React from "react";
import classes from "./Sidebar.module.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Sidebar: React.FC = () => {
  return (
    <Droppable droppableId="sidebarDroppable">
      {(provided) => (
        <div
          className={classes.sidebar}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Draggable draggableId="draggableSidebar1" index={5}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Sidebar Block 1
              </div>
            )}
          </Draggable>
          <Draggable draggableId="draggableSidebar2" index={6}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Sidebar Block 2
              </div>
            )}
          </Draggable>
          <Draggable draggableId="draggableSidebar3" index={7}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Sidebar Block 3
              </div>
            )}
          </Draggable>
          <Draggable draggableId="draggableSidebar4" index={8}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classes.draggable}
              >
                Sidebar Block 4
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Sidebar;
