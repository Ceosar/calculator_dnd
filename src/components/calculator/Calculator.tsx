import React, { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Calculator.module.css";
import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  const [layouts, setLayouts] = useState<Layout[]>([]);
  // const [layout, setLayout] = useState<Layout[]>([]);

  const onLayoutChange = (layoutChange: Layout[]) => {
    console.log(layoutChange);
  }

  const onDrop = (layout: Layout[], item: Layout, event: React.DragEvent) => {
    const pluginId = event.dataTransfer.getData("text/plain");
    const newItem: Layout = {
      x: item.x,
      y: item.y,
      w: 2,
      h: 2,
      i: pluginId,
      isResizable:false
    };
    setLayouts([...layouts, newItem]);
  };

  const generateDOM = () => {
    return layouts.map((l: Layout, i: number) => (
      <div key={i} className="layout-item">
        {l.i === "display" ? <Display/> : <Equal/>}
      </div>
    ));
  };

  return (
    <ResponsiveReactGridLayout
      layouts={{ lg: layouts }}
      cols={{ lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 }}
      onDrop={onDrop}
      className={classes.calculator_wrapper}
      isDraggable
      isDroppable
      compactType={null}
      preventCollision
      onLayoutChange={onLayoutChange}
    >
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};

export default Calculator;
