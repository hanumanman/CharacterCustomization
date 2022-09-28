import React, { useImperativeHandle } from "react";
import Items from "./Items";
import "./ListItems.css";

function ListItems({ list, listName, setList, modifySelectedArray }, ref) {
  useImperativeHandle(ref, () => ({
    randomize() {
      const setSelectedForRandomize = (itemId) => {
        listName.map((item) => {
          if (item.id === itemId) {
            console.log(`found object w id`);
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
      console.log(randomIndex);
      let randomItemId = list[randomIndex].id;
      console.log(randomItemId);
      setSelectedForRandomize(randomItemId);
    },
  }));

  const setSelected = (itemId) => {
    listName.map((item) => {
      if (item.id === itemId) {
        console.log(`found object w id`);
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
    <ul className="partList" ref={ref}>
      {list.map((item) => (
        <Items
          key={`${listName}${item.index}`}
          item={item}
          setSelected={setSelected}
        />
      ))}
    </ul>
  );
}

export default React.forwardRef(ListItems);
