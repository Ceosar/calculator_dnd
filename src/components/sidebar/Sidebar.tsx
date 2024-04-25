import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { setDraggableItems } from "../../services/store/store";

import Equal from "../calculatorElements/equal/Equal";
import Display from "../calculatorElements/display/Display";
import Numbers from "../calculatorElements/numbers/Numbers";
import Computing from "../calculatorElements/computing/Computing";

import classes from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const [displayDrag, setDisplayDrag] = useState(true);
  const [equalDrag, setEqualDrag] = useState(true);
  const [computingDrag, setComputingDrag] = useState(true);
  const [numbersDrag, setNumbersDrag] = useState(true);

  const draggableItems = useSelector((state: any) => state.draggableItems);
  const mode = useSelector((state: any) => state.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const layouts = localStorage.getItem("layout");
    if (layouts) {
      const layout = JSON.parse(layouts);
      const draggableItemsStore = layout.map((item: any) => item.i);
      setDisplayDrag(
        !draggableItemsStore.includes("display") ||
          draggableItems.some((item: any) => item.y === 0)
      );
      setEqualDrag(!draggableItemsStore.includes("equal"));
      setComputingDrag(!draggableItemsStore.includes("computing"));
      setNumbersDrag(!draggableItemsStore.includes("numbers"));
    }
    return () => {};
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const localStorageItems = Object.keys(localStorage);
      dispatch(setDraggableItems(localStorageItems));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  useEffect(() => {
    setDisplayDrag(
      !draggableItems.includes("display") ||
        draggableItems.some((item: any) => item.y === 0)
    );
    setEqualDrag(!draggableItems.includes("equal"));
    setComputingDrag(!draggableItems.includes("computing"));
    setNumbersDrag(!draggableItems.includes("numbers"));
    return () => {};
  }, [draggableItems]);

  const onDragStart = (event: React.DragEvent, params: any) => {
    event.dataTransfer.setData("paramsElem", JSON.stringify(params));
  };

  return (
    <div
      className={classes.sidebar_wrapper}
      style={{ visibility: mode ? "visible" : "hidden" }}
    >
      <div
        draggable={displayDrag}
        onDragStart={(e) => onDragStart(e, { elemId: "display", height: 1 })}
        style={{ opacity: !draggableItems.includes("display") ? 1 : 0.5 }}
      >
        <Display />
      </div>
      <div
        draggable={computingDrag}
        onDragStart={(e) => onDragStart(e, { elemId: "computing", height: 1 })}
        style={{ opacity: !draggableItems.includes("computing") ? 1 : 0.5 }}
      >
        <Computing />
      </div>
      <div
        draggable={numbersDrag}
        onDragStart={(e) => onDragStart(e, { elemId: "numbers", height: 4 })}
        style={{ opacity: !draggableItems.includes("numbers") ? 1 : 0.5 }}
      >
        <Numbers />
      </div>
      <div
        draggable={equalDrag}
        onDragStart={(e) => onDragStart(e, { elemId: "equal", height: 1 })}
        style={{ opacity: !draggableItems.includes("equal") ? 1 : 0.5 }}
      >
        <Equal />
      </div>
    </div>
  );
};

export default Sidebar;
