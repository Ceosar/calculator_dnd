import React, { useEffect, useState } from "react";

import { Responsive, WidthProvider, Layout } from "react-grid-layout";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setDraggableItems, setToggleBtn } from "../../services/store/store";

import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";
import Numbers from "../calculatorElements/numbers/Numbers";
import Computing from "../calculatorElements/computing/Computing";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import classes from "./Calculator.module.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });

  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);

  useEffect(() => {
    const savedLayout = localStorage.getItem("layout");
    if (savedLayout) {
      const parsedLayout = JSON.parse(savedLayout);
      setLayout(parsedLayout);
      const draggableItems = parsedLayout.map((item: any) => item.i);
      dispatch(setDraggableItems(draggableItems));
    }

    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      const parsedSavedMode = JSON.parse(savedMode);
      dispatch(setToggleBtn(parsedSavedMode));
    }
  }, [dispatch]);

  const onLayoutChange = (layoutChange: Layout[]) => {
    const isYOccupied = layoutChange.some((layoutItem) => layoutItem.y === 0);

    if (!isYOccupied) {
      layoutChange.forEach((item) => {
        if (item.i === "display") {
          item.y = 0;
        }
      });
    }

    layoutChange.map((item) => {
      if (item.i == "__dropping-elem__") {
        item.resizeHandles = [];
      }
    });
    setLayout(layoutChange);
    const draggableItems = layoutChange.map((item) => item.i);
    dispatch(setDraggableItems(draggableItems));
    localStorage.setItem("layout", JSON.stringify(layoutChange));
  };

  const onDrop = (lay: Layout[], item: Layout, e: any) => {
    const newLayout = [...lay].slice(0, -1);
    const elemParams = JSON.parse(e.dataTransfer.getData("paramsElem"));
    setLayout([
      ...newLayout,
      {
        ...item,
        i: elemParams.elemId,
        h: elemParams.height,
        resizeHandles: [],
      },
    ]);
  };

  const handleDoubleClick = (itemId: string) => {
    const newLayout = layout.filter((item: { i: string }) => item.i !== itemId);
    setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(newLayout));
    const draggableItems = newLayout.map((item: { i: any }) => item.i);
    dispatch(setDraggableItems(draggableItems));
  };

  return (
    <>
      {mode ? (
        <ResponsiveGridLayout
          className={classes.calculator_wrapper}
          cols={{ lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 }}
          layouts={{ lg: layout }}
          isDraggable
          isDroppable
          onDrop={onDrop}
          compactType={null}
          preventCollision
          rowHeight={90}
          onLayoutChange={onLayoutChange}
        >
          {layout.map((item: Layout, _i: number) => {
            return (
              <div
                key={item.i}
                id={item.i}
                className="layout-item"
                onDoubleClick={() => handleDoubleClick(item.i)}
                style={{ position: "static" }}
              >
                {item.i === "display" ? (
                  <Display />
                ) : item.i === "equal" ? (
                  <Equal />
                ) : item.i === "numbers" ? (
                  <Numbers />
                ) : item.i === "computing" ? (
                  <Computing />
                ) : null}
              </div>
            );
          })}
        </ResponsiveGridLayout>
      ) : (
        <div className={classes.calculator_wrapper__active}>
          {layout
            .sort((a: any, b: any) => a.y - b.y)
            .map((item: Layout, _i: number) => {
              return (
                <div key={item.i} id={item.i}>
                  {item.i === "display" ? (
                    <Display />
                  ) : item.i === "equal" ? (
                    <Equal />
                  ) : item.i === "numbers" ? (
                    <Numbers />
                  ) : item.i === "computing" ? (
                    <Computing />
                  ) : null}
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Calculator;
