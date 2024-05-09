import { useState } from "react";
import "./girl.css";

function BlockMainInterface({
  EAT,
  IMAGES_BACKGROUND,
  openItems,
  dropItems,
}) {
  const [background, setBackground] = useState(null);
  // должны сохраняться
  const [openBackground, addOpenBackground] = useState(["item-1"]);
  const [changeBackground, openChangeBackground] = useState(false);

  const maxWidth = Object.keys(EAT).length;
  const openWidth = openItems.length;
  const width = (100 / maxWidth) * openWidth + "%";

  function AddBackground() {
    const handlerClose = () => {
      openChangeBackground(false);
    };

    // если не svg то + default
    const items = Object.keys(IMAGES_BACKGROUND).map((key) => (
      <li className="item-background" key={key}>
        <img
          src={require("" + IMAGES_BACKGROUND[key]["icon"])}
          alt=""
          className={openBackground.includes(key) ? "" : "disabled"}
          id={key}
        />
      </li>
    ));

    const changeBackground = (e) => {
      const isButton = e.target.parentNode.className === "item-background";
      if (!isButton) {
        return;
      }
      const id = e.target.id;
      if (e.target.className === "disabled") {
        addOpenBackground([...openBackground, id]);
      }
      openChangeBackground(false);
      setBackground(IMAGES_BACKGROUND[id]["background"]);
    };

    return (
      <div
        className="wrapper-window"
        style={{ backgroundImage: "url(./img/background/back.png)" }}
      >
        <div className="background-checked">
          <div className="button" onClick={handlerClose} />
          <ul className="items-background" onClick={changeBackground}>
            {items}
          </ul>
        </div>
      </div>
    );
  }

  const handlerChandgeBackground = () => openChangeBackground(true);

  return (
    <>
      {changeBackground ? <AddBackground /> : ""}
      <div className="wrapper-main" style={background ? {backgroundImage: `url(${require(background + '')})`} : {backgroundImage: "none"}}>
        <header>
          <div className="setting icon" />
          <div className="streak-lover-wrapper">
            <div className="streak-lover" style={{ width: width }} />
            <span>{`${openWidth}/${maxWidth}`}</span>
          </div>
          <div
            onClick={handlerChandgeBackground}
            className="selected-background icon"
          />
        </header>
        {dropItems}
      </div>
    </>
  );
}

export default BlockMainInterface;
