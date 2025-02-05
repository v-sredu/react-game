import "./css/reset.css";
import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import BlockKitchen from "./BlockKitchen";
import BlockMainInterface from "./BlockMainInterface";
import { useState } from "react";
import {ReactComponent as Svg} from "./img/icons.svg";
import { EAT, COOKED, IMAGES_BACKGROUND } from "./data";
function App() {
  const [openItems, addOpenItems] = useState(["id-23", "id-43", "id-62", "id-76", "id-13", "id-9", "id-37", "id-60", "id-44", "id-54", "id-92", "id-94", "id-22", "id-19", "id-39", "id-48", "id-12", "id-1", "id-86", "id-11", "id-46", "id-24", "id-32", "id-33", "id-90", "id-30", "id-87", "id-58", "id-38", "id-55", "id-57", "id-83"]);
  return (
      <div className="game">
          <Svg className={"hidden"}/>
          <BlockMainInterface
              openItems={openItems}
              EAT={EAT}
              IMAGES_BACKGROUND={IMAGES_BACKGROUND}
          />
          <BlockKitchen
              openItems={openItems}
              addOpenItems={addOpenItems}
              EAT={EAT}
              COOKED={COOKED}
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
