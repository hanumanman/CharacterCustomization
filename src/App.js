import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import CharacterFrame from "./components/CharacterFrame";
import ListItems from "./components/ListItems";
import Header from "./components/Header";
import { getTotalItems } from "./components/constants";

let selectedItems = [];

const total = getTotalItems();
console.log(total);

export default function App() {
  const {
    accessories,
    facial_hair,
    eyebrows,
    body,
    clothes,
    hair,
    mouth,
    nose,
    eyes,
  } = total;

  const { earring, glass, hat, neckwear } = accessories;
  const { layer_1, layer_2, layer_3 } = clothes;
  const [earringsList, setEarringsList] = useState(earring);
  const [glassesList, setGlassesList] = useState(glass);
  const [hatsList, setHatsList] = useState(hat);
  const [neckwearList, setNeckwearList] = useState(neckwear);
  const [bodyList, setBodyList] = useState(body);
  const [layer1List, setLayer1List] = useState(layer_1);
  const [layer2List, setLayer2List] = useState(layer_2);
  const [layer3List, setLayer3List] = useState(layer_3);
  const [eyebrowsList, setEyebrowsList] = useState(eyebrows);
  const [eyesList, setEyesList] = useState(eyes);
  const [facialHairList, setFacialHairList] = useState(facial_hair);
  const [hairList, setHairList] = useState(hair);
  const [mouthsList, setMouthsList] = useState(mouth);
  const [nosesList, setNosesList] = useState(nose);

  const [charPreviewList, setCharPreviewList] = useState([]);

  const earringsRef = useRef();
  const glassesRef = useRef();
  const hatsRef = useRef();
  const neckwearRef = useRef();
  const bodyRef = useRef();
  const layer1Ref = useRef();
  const layer2Ref = useRef();
  const layer3Ref = useRef();
  const eyebrowsRef = useRef();
  const eyesRef = useRef();
  const facialHairRef = useRef();
  const hairRef = useRef();
  const mouthRef = useRef();
  const nosesRef = useRef();

  const modifySelectedArray = (item) => {
    const indexForListNameCheck = selectedItems
      .map((selectedItem) => selectedItem.listName)
      .indexOf(`${item.listName}`);
    const indexForIdCheck = selectedItems
      .map((selectedItem) => selectedItem.id)
      .indexOf(`${item.id}`);

    if (indexForListNameCheck === -1) {
      selectedItems.push(item);
      setCharPreviewList(selectedItems);
    } else {
      if (indexForIdCheck === -1) {
        selectedItems = selectedItems.filter(function (selectedItem) {
          return selectedItem.listName !== `${item.listName}`;
        });
        selectedItems.push(item);
        setCharPreviewList(selectedItems);
      } else {
        selectedItems = selectedItems.filter(function (selectedItem) {
          return selectedItem.id !== `${item.id}`;
        });
        setCharPreviewList(selectedItems);
      }
    }
  };

  function randomizeAll() {
    earringsRef.current.randomize();
    glassesRef.current.randomize();
    hatsRef.current.randomize();
    neckwearRef.current.randomize();
    bodyRef.current.randomize();
    layer1Ref.current.randomize();
    layer2Ref.current.randomize();
    layer3Ref.current.randomize();
    eyebrowsRef.current.randomize();
    eyesRef.current.randomize();
    facialHairRef.current.randomize();
    hairRef.current.randomize();
    mouthRef.current.randomize();
    nosesRef.current.randomize();
    console.log("randomize");
  }

  useEffect(() => {
    randomizeAll();
  }, []);

  return (
    <>
      <div className="container">
        <Header />

        <div id="box">
          <CharacterFrame charPreviewList={charPreviewList} />

          <button className="randomizeBtn" onClick={() => randomizeAll()}>
            RANDOMIZE!
          </button>
        </div>

        <ListItems
          ref={earringsRef}
          list={earringsList}
          listName={earring}
          setList={setEarringsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={bodyRef}
          list={bodyList}
          listName={body}
          setList={setBodyList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={eyebrowsRef}
          list={eyebrowsList}
          listName={eyebrows}
          setList={setEyebrowsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={eyesRef}
          list={eyesList}
          listName={eyes}
          setList={setEyesList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={facialHairRef}
          list={facialHairList}
          listName={facial_hair}
          setList={setFacialHairList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={hairRef}
          list={hairList}
          listName={hair}
          setList={setHairList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={mouthRef}
          list={mouthsList}
          listName={mouth}
          setList={setMouthsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={nosesRef}
          list={nosesList}
          listName={nose}
          setList={setNosesList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={glassesRef}
          list={glassesList}
          listName={glass}
          setList={setGlassesList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={hatsRef}
          list={hatsList}
          listName={hat}
          setList={setHatsList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={neckwearRef}
          list={neckwearList}
          listName={neckwear}
          setList={setNeckwearList}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={layer1Ref}
          list={layer1List}
          listName={layer_1}
          setList={setLayer1List}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={layer2Ref}
          list={layer2List}
          listName={layer_2}
          setList={setLayer2List}
          modifySelectedArray={modifySelectedArray}
        />

        <ListItems
          ref={layer3Ref}
          list={layer3List}
          listName={layer_3}
          setList={setLayer3List}
          modifySelectedArray={modifySelectedArray}
        />
      </div>
    </>
  );
}
