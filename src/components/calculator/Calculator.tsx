import React, { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Calculator.module.css";
import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });
  // const [layout, setLayout] = useState<Layout[]>([]);
  const [dropCoordinates, setDropCoordinates] = useState<{
    x: number;
    y: number;
  } | null>(null);

  console.log(layout);

  const onLayoutChange = (layoutChange: Layout[]) => {
    layoutChange.map((item) => {
      if (item.i == "__dropping-elem__") {
        // setDropCoordinates((prevDropCoordinates) => ({
        //   ...prevDropCoordinates,
        //   x: item.x,
        //   y: item.y,
        // }));
        setDropCoordinates({ x: item.x, y: item.y });
      }
      else{
        localStorage.setItem("layout", JSON.stringify(layoutChange));
        console.log(1);
        console.log(layoutChange);
      }
    });
    // setLayout(layoutChange)
  };

  const onDrop = (lay: Layout[], item: Layout, e: any) => {
    e.preventDefault();
    // const pluginId = e.dataTransfer.getData("text/plain");
    if (dropCoordinates) {
      console.log(dropCoordinates);
      const { pluginId } = JSON.parse(e.dataTransfer.getData("text/plain"));
      // const { x, y, ...rest } = item;
      // const newItem: Layout = {
      //   ...rest,
      //   w: 1,
      //   h: 1,
      //   i: pluginId,
      //   isResizable: false,
      // };
      // setLayouts([...layouts, newItem]);


      const new_lay = [...lay].slice(0, -1);

      // saveDataElement(item, dataElement);

      setLayout([
        ...new_lay,
        {
          ...item,
          x: item.x,
          y: dropCoordinates.y,
          w: 1,
          h: 1,
          i: pluginId,
          isResizable: false,
        },
      ]);
      // localStorage.setItem("layout", JSON.stringify(layout));
    }
  };

  const generateDOM = () => {
    console.log(layout);
    return layout.map((l: Layout, i: number) => {
      console.log(l.i);
      return (
        <div key={i} className="layout-item">
          {l.i === "display" ? <Display /> : <Equal />}
        </div>
      );
    });
  };

  return (
    <ResponsiveReactGridLayout
      layouts={{ lg: layout }}
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
