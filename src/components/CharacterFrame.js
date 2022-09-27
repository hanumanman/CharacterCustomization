import React from "react";
import "./CharacterFrame.css";
import PreviewItem from "./PreviewItem";

function CharacterFrame({ charPreviewList }) {
  return (
    <>
      <div id="charPreview">
        <div id="charFrame">
          {charPreviewList.map((item) => (
            <PreviewItem key={`${item.listName}${item.index}`} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CharacterFrame;
