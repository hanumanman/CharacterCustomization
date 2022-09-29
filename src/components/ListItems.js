import React, { useImperativeHandle } from "react";
import Items from "./Items";
import "./ListItems.css";

function ListItems({ list, listName, setList, modifySelectedArray }, ref) {
  useImperativeHandle(ref, () => ({
    randomize() {
      const setSelectedForRandomize = (itemId) => {
        listName.map((item) => {
          if (item.id === itemId) {
            if (item.status === "") {
              item.status = "selected";
              modifySelectedArray(item);
            }
            return { ...item };
          } else {
            item.status = ""; //keep only 1 item selected at a time

            return { ...item };
          }
        });
        setList([...listName]);
      };

      let randomIndex = Math.floor(Math.random() * list.length);
      let randomItemId = list[randomIndex].id;
      setSelectedForRandomize(randomItemId);
    },
  }));

  const setSelected = (itemId) => {
    listName.map((item) => {
      if (item.id === itemId) {
        if (item.status === "") {
          item.status = "selected";
          modifySelectedArray(item);
        } else {
          item.status = "";
          modifySelectedArray(item);
        }
        return { ...item };
      } else {
        item.status = ""; //keep only 1 item selected at a time

        return { ...item };
      }
    });
    setList([...listName]);
  };

  return (
    <>
      <div className="listHeader">Pick your {list[0].listName}</div>
      <ul className="partList" ref={ref}>
        {list.map((item) => (
          <Items
            key={`${listName}${item.index}`}
            item={item}
            setSelected={setSelected}
          />
        ))}
      </ul>
    </>
  );
}

export default React.forwardRef(ListItems);
