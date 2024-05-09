import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import BlockKitchen from "./BlockKitchen";
import BlockMainInterface from "./BlockMainInterface";
import { useState, useRef, useEffect } from "react";
import { EAT, COOKED, IMAGES_BACKGROUND } from "./data";

function App() {
  const [openItems, addOpenItems] = useState(["id-1", "id-2", "id-7"]);
  const [draggedElement, setDraggedElement] = useState();
  const [draggedElements, setDraggedElements] = useState([]);


  const ref = useRef(null);

  function addPhisic(element) {
    let minusX = 0;
    let minusY = 0;

    element.style.position = "absolute";
    element.style.bottom = Math.random() * 100 + "%";
    element.style.left = Math.random() * 100 + "%";

    function listener(e) {
      element.style.left = e.pageX - minusX - 20 + "px";
      element.style.top = e.pageY - minusY - 20 + "px";
    }
    element.addEventListener("mousedown", function (e) {
      document.addEventListener("mousemove", listener);
      element.style.cursor = "grabbing";
      minusX = e.clientX - element.getBoundingClientRect().left;
      minusY = e.clientY - element.getBoundingClientRect().top;
    });
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", listener);
      element.style.cursor = "grab";
      console.log("stop");
    });
  }

  if (ref.current) {
    addPhisic(ref.current);
  }

  const onDrag = (e) => {
    setDraggedElement(e.target.id);
  };
  const onDrop = (e) => {
    if (
      Object.keys(EAT).includes(draggedElement) &&
      draggedElements.length < 15
    ) {
      setDraggedElements([...draggedElements, draggedElement]);
    }
    setDraggedElement();
  };

  const dropItems = draggedElements.map((id, count) => (
    <img
      draggable={false}
      className="drag-drop-item"
      key={count}
      src={require(EAT[id]["url"] + "")}
      alt=""
      ref={ref}
    />
  ));

  return (
    <div className="game">
      <BlockMainInterface
        openItems={openItems}
        EAT={EAT}
        IMAGES_BACKGROUND={IMAGES_BACKGROUND}
        dropItems={
          <div
            // ref={ref}
            className="container"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {dropItems}
          </div>
        }
      />
      <BlockKitchen
        openItems={openItems}
        addOpenItems={addOpenItems}
        EAT={EAT}
        COOKED={COOKED}
        onDrag={onDrag}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
