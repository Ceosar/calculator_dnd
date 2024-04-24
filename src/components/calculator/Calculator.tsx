import React, { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Calculator.module.css";
import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });

  // const [layout, setLayout] = useState<Layout[]>([]);

  // const onLayoutChange = (layoutChange: Layout[]) => {
  //   setLayout(layoutChange);
  //   console.log(layoutChange);
  //   localStorage.setItem("layout", JSON.stringify(layoutChange));
  // };

  const onLayoutChange = (layoutChange: Layout[]) => {
    console.log("onchange");
    localStorage.setItem("layout", JSON.stringify(layout));
  };

  const onDrop = (lay: Layout[], item: Layout, e: any) => {
    const elemId = e.dataTransfer.getData("text/plain");
    const new_lay = [...lay].slice(0, -1);

    console.log("ondrop");
    setLayout([
      ...new_lay,
      {
        ...item,
        i: elemId === "display" || elemId === "equal" ? elemId : item.i,
        x: item.x,
        y: item.y,
        w: 1,
        h: 1,
      },
    ]);
  };

  const generateDOM = () => {
    return layout.map((l: Layout, i: number) => {
      return (
        <div key={i} className="layout-item">
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
      onLayoutChange={onLayoutChange}
    >
      {layout.map((item: Layout, i: number) => {
        return (
          <div key={i} id={item.i} className="layout-item">
            {item.i === "display" ? <Display /> : <Equal />}
          </div>
        );
      })}
      {/* {generateDOM()} */}
    </ResponsiveGridLayout>
  );
};

export default Calculator;
