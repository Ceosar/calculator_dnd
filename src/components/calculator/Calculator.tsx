import React, { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Calculator.module.css";
import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";
import Numbers from "../calculatorElements/numbers/Numbers";
import Computing from "../calculatorElements/computing/Computing";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  // var height = 1;

  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });

  // const saveLayoutToLocalStorage = (newLayout: Layout[]) => {
  //   setLayout(newLayout);
  //   localStorage.setItem("layout", JSON.stringify(newLayout));
  // };

  const onLayoutChange = (layoutChange: Layout[]) => {
    layoutChange.map((item) => {
      if (item.i == "__dropping-elem__") {
        item.resizeHandles = [];
      }
    });
    setLayout(layoutChange);
    localStorage.setItem("layout", JSON.stringify(layoutChange));
    // saveLayoutToLocalStorage(layoutChange);
  };

  const onDrop = (lay: Layout[], item: Layout, e: any) => {
    const new_lay = [...lay].slice(0, -1);

    const elemParams = JSON.parse(e.dataTransfer.getData("paramsElem"));
    console.log(elemParams);
    // height = elemParams.height;

    setLayout([
      ...new_lay,
      {
        ...item,
        i: elemParams.elemId,
        h: elemParams.height,
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
            {item.i === "display" ? (
              <Display />
            ) : item.i === "equal" ? (
              <Equal />
            ) : item.i === "numbers" ? (
              <Numbers />
            ) : item.i === "computing" ? (
              <Computing />
            ) : (
              <div>Unknown element...</div>
            )}
          </div>
        );
      })}
      {/* {generateDOM()} */}
    </ResponsiveGridLayout>
  );
};

export default Calculator;
