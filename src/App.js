import "./App.css";
import React, { useState } from "react";
import CharacterFrame from "./components/CharacterFrame";
import ListItems from "./components/ListItems";
import Header from "./components/Header";

export default function App() {
  const [earringsList, setEarringsList] = useState(earrings);
  const [glassesList, setGlassesList] = useState(glasses);
  const [hatsList, setHatsList] = useState(hats);
  const [neckwearList, setNeckwearList] = useState(neckwear);
  const [bodyList, setBodyList] = useState(body);
  const [layer1List, setLayer1List] = useState(layer1);
  const [layer2List, setLayer2List] = useState(layer2);
  const [layer3List, setLayer3List] = useState(layer3);
  const [eyebrowsList, setEyebrowsList] = useState(eyebrows);
  const [eyesList, setEyesList] = useState(eyes);
  const [facialHairList, setFacialHairList] = useState(facialHair);
  const [hairList, setHairList] = useState(hair);
  const [mouthsList, setMouthsList] = useState(mouths);
  const [nosesList, setNosesList] = useState(noses);

  const [charPreviewList, setCharPreviewList] = useState([]);

  const modifySelectedArray = (item) => {
    const indexForListNameCheck = selectedItems
      .map((selectedItem) => selectedItem.listName)
      .indexOf(`${item.listName}`);
    const indexForIdCheck = selectedItems
      .map((selectedItem) => selectedItem.id)
      .indexOf(`${item.id}`);

    if (indexForListNameCheck === -1) {
      selectedItems.push({
        index: item.index,
        id: item.id,
        listName: item.listName,
        path: item.path,
      });
      setCharPreviewList(selectedItems);
    } else {
      if (indexForIdCheck === -1) {
        selectedItems = selectedItems.filter(function (selectedItem) {
          return selectedItem.listName !== `${item.listName}`;
        });
        selectedItems.push({
          index: item.index,
          id: item.id,
          listName: item.listName,
          path: item.path,
        });
        setCharPreviewList(selectedItems);
      } else {
        selectedItems = selectedItems.filter(function (selectedItem) {
          return selectedItem.id !== `${item.id}`;
        });
        setCharPreviewList(selectedItems);
      }
    }
  };

  return (
    <>
      <div className="container">
        <Header />

        <CharacterFrame charPreviewList={charPreviewList} />

        <ListItems
          list={bodyList}
          listName={body}
          setList={setBodyList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={eyebrowsList}
          listName={eyebrows}
          setList={setEyebrowsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={eyesList}
          listName={eyes}
          setList={setEyesList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={facialHairList}
          listName={facialHair}
          setList={setFacialHairList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={hairList}
          listName={hair}
          setList={setHairList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={mouthsList}
          listName={mouths}
          setList={setMouthsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={nosesList}
          listName={noses}
          setList={setNosesList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={earringsList}
          listName={earrings}
          setList={setEarringsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={glassesList}
          listName={glasses}
          setList={setGlassesList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={hatsList}
          listName={hats}
          setList={setHatsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={neckwearList}
          listName={neckwear}
          setList={setNeckwearList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={layer1List}
          listName={layer1}
          setList={setLayer1List}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={layer2List}
          listName={layer2}
          setList={setLayer2List}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          list={layer3List}
          listName={layer3}
          setList={setLayer3List}
          modifySelectedArray={modifySelectedArray}
        />
      </div>
    </>
  );
}

let selectedItems = [];

let earrings = [];
for (let i = 1; i <= 32; i++) {
  earrings.push({
    index: i,
    id: `earring${i}`,
    listName: "earrings",
    path: "accessories/earrings",
    status: "",
  });
}

let glasses = [];
for (let i = 1; i <= 17; i++) {
  glasses.push({
    index: i,
    id: `glass${i}`,
    listName: "glasses",
    path: "accessories/glasses",
    status: "",
  });
}

let hats = [];
for (let i = 1; i <= 17; i++) {
  hats.push({
    index: i,
    id: `hat${i}`,
    listName: "hats",
    path: "accessories/hats",
    status: "",
  });
}

let neckwear = [];
for (let i = 1; i <= 18; i++) {
  neckwear.push({
    index: i,
    id: `neckwear${i}`,
    listName: "neckwear",
    path: "accessories/neckwear",
    status: "",
  });
}

let body = [];
for (let i = 1; i <= 17; i++) {
  body.push({
    index: i,
    id: `body${i}`,
    listName: "body",
    path: "body",
    status: "",
  });
}

let layer1 = [];
for (let i = 1; i <= 5; i++) {
  layer1.push({
    index: i,
    id: `layer1-item${i}`,
    listName: "layer1",
    path: "clothes/layer_1",
    status: "",
  });
}

let layer2 = [];
for (let i = 1; i <= 5; i++) {
  layer2.push({
    index: i,
    id: `layer2-item${i}`,
    listName: "layer2",
    path: "clothes/layer_2",
    status: "",
  });
}

let layer3 = [];
for (let i = 1; i <= 9; i++) {
  layer3.push({
    index: i,
    id: `layer3-item${i}`,
    listName: "layer3",
    path: "clothes/layer_3",
    status: "",
  });
}

let eyebrows = [];
for (let i = 1; i <= 15; i++) {
  eyebrows.push({
    index: i,
    id: `eyebrows${i}`,
    listName: "eyebrows",
    path: "eyebrows",
    status: "",
  });
}

let eyes = [];
for (let i = 1; i <= 24; i++) {
  eyes.push({
    index: i,
    id: `eye${i}`,
    listName: "eyes",
    path: "eyes",
    status: "",
  });
}

let facialHair = [];
for (let i = 1; i <= 17; i++) {
  facialHair.push({
    index: i,
    id: `facialHair${i}`,
    listName: "facialHair",
    path: "facial_hair",
    status: "",
  });
}

let hair = [];
for (let i = 1; i <= 73; i++) {
  hair.push({
    index: i,
    id: `hair${i}`,
    listName: "hair",
    path: "hair",
    status: "",
  });
}

let mouths = [];
for (let i = 1; i <= 24; i++) {
  mouths.push({
    index: i,
    id: `mouth${i}`,
    listName: "mouths",
    path: "mouths",
    status: "",
  });
}

let noses = [];
for (let i = 1; i <= 1; i++) {
  noses.push({
    index: i,
    id: `nose${i}`,
    listName: "noses",
    path: "noses",
    status: "",
  });
}
