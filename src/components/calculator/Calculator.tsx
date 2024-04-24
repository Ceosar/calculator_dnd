import React, { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Calculator.module.css";
import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";
import Numbers from "../calculatorElements/numbers/Numbers";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });

  const saveLayoutToLocalStorage = (newLayout: Layout[]) => {
    setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(newLayout));
  };

  const onLayoutChange = (layoutChange: Layout[]) => {
    saveLayoutToLocalStorage(layoutChange);
  };

  const onDrop = (lay: Layout[], item: Layout, e: any) => {
    var height = 1;
    const new_lay = [...lay].slice(0, -1);
    const elemId = e.dataTransfer.getData("text/plain");
    const uniqueId = Math.random().toString(36).substring(7); // Генерация уникального идентификатора

    switch (elemId) {
      case "numbers":
        height = 4;
        break;
      default:
        height = 1;
        break;
    }

    setLayout([
      ...new_lay,
      {
        ...item,
        i: elemId,
        h:height
      },
    ]);
  };

  const generateDOM = () => {
    return layout.map((l: Layout, i: number) => {
      return (
        <div key={l.i} className="layout-item">
          {l.i === "display" ? <Display /> : <Equal />}
        </div>
      );
    });
  };

  return (
    <ResponsiveGridLayout
      className={classes.calculator_wrapper}
      cols={{ lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 }}
      layouts={{ lg: layout }}
      isDraggable
      isDroppable
      onDrop={onDrop}
      compactType={null}
      preventCollision
      rowHeight={100}
      onLayoutChange={onLayoutChange}
    >
      {layout.map((item: Layout, i: number) => {
        return (
          <div key={item.i} id={item.i} className="layout-item">
            {item.i === "display" ? <Display /> : item.i === "equal" ? <Equal /> : item.i === "numbers" ? <Numbers/> : null}
          </div>
        );
      })}
      {/* {generateDOM()} */}
    </ResponsiveGridLayout>
  );
};

export default Calculator;
