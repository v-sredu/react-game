двойной клик через родительский
  // const clickHandler = () => (e) => {
  //   const isButton = e.target.parentNode.className === "item";
  //   if (!isButton) {
  //     return;
  //   }
  //   const id = e.target.id;
  //   if (!openItems.includes(id) || itemsActive.length >= 3) {
  //     return;
  //   }
  //   setItemsActive([...itemsActive, id]);
  // };
  // const clickDoubleHandler = () => (e) => {
  //   const isButton = e.target.parentNode.className === "item";
  //   if (!isButton) {
  //     return;
  //   }
  //   const id = e.target.id;
  //   setItemsActive([]);
  //   openRecipe(id);
  // };