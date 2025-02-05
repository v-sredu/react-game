import { useState } from "react";

function BlockKitchen({ openItems, addOpenItems, EAT, COOKED, onDrag }) {
  const [idRecipe, openRecipe] = useState();
  const [error, addError] = useState(false);
  const [newItem, addNewItem] = useState();

  // данные надо сохранять как-то
  const [itemsActive, setItemsActive] = useState([]);
  const [showRecipe, addShowRecipe] = useState([]);
  // авпвап

  // двойной и одиночный клик по продукту
  let count = 0;
  let flag = true;
  const clickHandler = () => (e) => {
    const isButton = e.target.parentNode.className === "item";
    if (!isButton) {
      return;
    }
    const id = e.target.id;
    count = count + 1;
    if (flag) {
      setTimeout(() => {
        if (count === 1) {
          if (openItems.includes(id) && itemsActive.length < 3) {
            setItemsActive([...itemsActive, id]);
          }
        }
        if (count > 1) {
          setItemsActive([]);
          openRecipe(id);
        }
        count = 0;
        flag = true;
      }, 250);
    }
    flag = false;
  };

  const items = Object.keys(EAT).map((id, count) => (
      <li className="item" key={count}>
        {openItems.includes(id) ? (
            <img
                className={"item-img"}
                src={require("" + EAT[id]["url"])}
                alt=""
                id={id}
            />
        ) : (
            <svg className={"item-img"} id={id}>
              <use xlinkHref={"#question"}></use>
            </svg>
  )
}
</li>
))
  ;

  const wrapperElements = (listItems = itemsActive) => {
    return [0, 1, 2].map((i) => (
      <div className={`wrapper`} key={i}>
        <img
          src={
            listItems[i]
              ? require("" + EAT[listItems[i]]["url"])
              : require("./img/question.svg")
          }
          alt=""
        />
      </div>
    ));
  };

  const resultCalculation = (isError, id = "") => {
    if (isError) {
      addError(true);
      setTimeout(() => {
        addError(false);
      }, 300);
      return;
    }
    if (!openItems.includes(id)) {
      addOpenItems([...openItems, id]);
    }
    addNewItem(id);
    setTimeout(() => {
      addNewItem();
    }, 3300);
  };

  const calculation = () => {
    setItemsActive([]);
    if (itemsActive.length <= 1) {
      return resultCalculation(true);
    }
    for (let items of Object.values(COOKED)) {
      let a = JSON.stringify(items.sort());
      let b = JSON.stringify(itemsActive.sort());
      if (a === b) {
        const id = Object.keys(EAT).find((key) => COOKED[key] === items);
        return resultCalculation(false, id);
      }
    }
    return resultCalculation(true);
  };
  function Recipe({ id }) {
    const handlerClose = () => {
      openRecipe();
    };
    const showMediaRecipe = () => {
      addShowRecipe(id);
    };
    const open = openItems.includes(id) || showRecipe.includes(id);
    const listItems = open ? COOKED[id] : [];
    return (
      <div className="wrapper-window">
        <div className="recept">
          <div onClick={handlerClose} className="button"></div>
          Рецепт <span>{open ? EAT[id]["name"] : "???"}</span>
          <div className="kitchen">
            {wrapperElements(listItems)}
            <div className="wrapper sign-equal"></div>
            <div className="wrapper result">
              <img
                src={
                  open
                    ? require("" + EAT[id]["url"])
                    : require("./img/question.svg").default
                }
                alt=""
              />
            </div>
          </div>
          <div
            onClick={showMediaRecipe}
            className={`button-media ${open ? "disabled" : ""}`}
          >
            {open ? "посмотреть рекламу.." : "УЗНАТЬ РЕЦЕПТ"}
          </div>
        </div>
      </div>
    );
  }

  function NewItem({ newItem }) {
    return (
      <div className="wrapper-window">
        <div className="new-item">
          <span>{EAT[newItem]["name"]}</span>
          <img src={require("" + EAT[newItem]["url"])} alt="" />
        </div>
      </div>
    );
  }
  return (
    <>
      {idRecipe ? <Recipe id={idRecipe}/> : ""}
      {newItem ? <NewItem newItem={newItem} /> : ""}
      <div className="block-kitchen">
        <ul className="list-items" onClick={clickHandler()}>
          {items}
        </ul>
        <div className={`kitchen main ${error ? "error" : ""}`}>
          {wrapperElements()}
          <div className="wrapper sign-equal"/>
          <div className="wrapper result" onClick={calculation}>
            <img
                className="result"
                src={require("./img/cooked.svg").default}
                alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockKitchen;
