// import React, { useEffect, useState } from "react";
// import { Responsive, WidthProvider, Layout } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
// import classes from "./Calculator.module.css";
// import Display from "../calculatorElements/display/Display";
// import Equal from "../calculatorElements/equal/Equal";
// import Numbers from "../calculatorElements/numbers/Numbers";
// import Computing from "../calculatorElements/computing/Computing";
// import { useDispatch } from "react-redux";
// import { setDraggableItems } from "../../services/store/store";

// const ResponsiveGridLayout = WidthProvider(Responsive);

// const Calculator: React.FC = () => {
//   const [layout, setLayout] = useState(() => {
//     const savedLayout = localStorage.getItem("layout");
//     return savedLayout ? JSON.parse(savedLayout) : [];
//   });

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const savedLayout = localStorage.getItem("layout");
//     if (savedLayout) {
//       console.log(1);
//       const parsedLayout = JSON.parse(savedLayout);
//       setLayout(parsedLayout);

//       const draggableItems = parsedLayout.map((item: any) => item.i);
//       dispatch(setDraggableItems(draggableItems));
//     }
//   }, [dispatch]);

//   const onLayoutChange = (layoutChange: Layout[]) => {
//     const updatedLayout = layoutChange.filter(item => item.i !== "__dropping-elem__");
//     setLayout(updatedLayout);
//     localStorage.setItem("layout", JSON.stringify(updatedLayout));
//   };

//   const onDrop = (lay: Layout[], item: Layout, e: any) => {
//     const new_lay = [...lay].slice(0, -1);

//     const elemParams = JSON.parse(e.dataTransfer.getData("paramsElem"));
//     console.log(elemParams);

//     setLayout([
//       ...new_lay,
//       {
//         ...item,
//         i: elemParams.elemId,
//         h: elemParams.height,
//         resizeHandles: []
//       },
//     ]);
//   };

//   const handleDoubleClick = (itemId: string) => {
//     const newLayout = layout.filter((item: { i: string }) => item.i !== itemId);
//     setLayout(newLayout);
//     localStorage.setItem("layout", JSON.stringify(newLayout));
//   };

//   return (
//     <ResponsiveGridLayout
//       className={classes.calculator_wrapper}
//       cols={{ lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 }}
//       layouts={{ lg: layout }}
//       isDraggable
//       isDroppable
//       onDrop={onDrop}
//       compactType={null}
//       preventCollision
//       rowHeight={100}
//       onLayoutChange={onLayoutChange}
//     >
//       {layout.map((item: Layout, i: number) => {
//         return (
//           <div
//             key={item.i}
//             id={item.i}
//             className="layout-item"
//             onDoubleClick={() => handleDoubleClick(item.i)}
//           >
//             {item.i === "display" ? (
//               <Display />
//             ) : item.i === "equal" ? (
//               <Equal />
//             ) : item.i === "numbers" ? (
//               <Numbers />
//             ) : item.i === "computing" ? (
//               <Computing />
//             ) : null}
//           </div>
//         );
//       })}
//     </ResponsiveGridLayout>
//   );
// };

// export default Calculator;


import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Calculator.module.css";
import Display from "../calculatorElements/display/Display";
import Equal from "../calculatorElements/equal/Equal";
import Numbers from "../calculatorElements/numbers/Numbers";
import Computing from "../calculatorElements/computing/Computing";
import { useDispatch } from "react-redux";
import { setDraggableItems } from "../../services/store/store";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Calculator: React.FC = () => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const savedLayout = localStorage.getItem("layout");
    if (savedLayout) {
      const parsedLayout = JSON.parse(savedLayout);
      setLayout(parsedLayout);
      
      const draggableItems = parsedLayout.map((item: any) => item.i);
      dispatch(setDraggableItems(draggableItems));
    }
  }, [dispatch]);

  const onLayoutChange = (layoutChange: Layout[]) => {
    setLayout(layoutChange);
    localStorage.setItem("layout", JSON.stringify(layoutChange));
    const draggableItems = layoutChange.map((item) => item.i);
    dispatch(setDraggableItems(draggableItems));
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
        resizeHandles: []
      },
    ]);
  };

  const handleDoubleClick = (itemId: string) => {
    const newLayout = layout.filter((item: { i: string }) => item.i !== itemId);
    setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(newLayout));
    const draggableItems = newLayout.map((item: { i: any; }) => item.i);
    dispatch(setDraggableItems(draggableItems));
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
          <div
            key={item.i}
            id={item.i}
            className="layout-item"
            onDoubleClick={() => handleDoubleClick(item.i)}
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
  );
};

export default Calculator;
