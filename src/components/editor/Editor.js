import React, { useState, useRef, useEffect } from "react";
import { ActionTextArea } from "../ActionTextArea/ActionTextArea";
import { TextSpan } from "../TextSpan/TextSpan";
import { consoleLogSelect } from "./utils";
import { useSelectionMemory } from "./useSelectionMemory";

export const Editor = () => {
  const { isSelectionInTextArea, baseElement, extentElement } =
    useSelectionMemory("editor-text");

  const [selectedText, setSelectedText] = useState(
    "this is a tesdafsdfst text thaasdfsd should be a little long"
      .split(" ")
      .map((word, index) => {
        return (
          <TextSpan
            text={word}
            id={index}
            key={index}
            mouseUpCapture={consoleLogSelect}
          ></TextSpan>
        );
      })
  );
  const currentRef = useRef(null);

  useEffect(() => {
    if (isSelectionInTextArea) {
      reformatText();
    }
  }, [isSelectionInTextArea]);

  const reformatText = () => {
    // console.log(selectedText);
    // console.log(selectedText.filter((word) => `${word.props.id}` === selection?.anchorNode?.parentElement?.id));
    setSelectedText(
      selectedText.reduce((acc, word, index) => {
        // console.log(word.props.text, index);
        if (index > extentElementId || index < baseElementId) {
          acc.push(
            <TextSpan
              text={word.props.text}
              id={acc.length}
              key={acc.length}
              mouseUpCapture={consoleLogSelect}
            ></TextSpan>
          );
        } else {
          let editMe = word.props.text;
          if (index === baseElementId) {
            editMe = word.props.text.substring(
              selection?.anchorOffset,
              index === extentElementId
                ? selection?.extentOffset
                : word.props.text.length
            );
            acc.push(
              <TextSpan
                text={word.props.text.substring(0, selection?.anchorOffset)}
                id={acc.length}
                mouseUpCapture={consoleLogSelect}
              ></TextSpan>
            );
            acc.push(
              <TextSpan
                text={""}
                id={acc.length}
                mouseUpCapture={consoleLogSelect}
              ></TextSpan>
            );
          }
          if (acc.length > 0 && getLastElement(acc).props.text !== "") {
            acc.push(
              <TextSpan
                text={""}
                id={acc.length}
                mouseUpCapture={consoleLogSelect}
              ></TextSpan>
            );
          }
          acc[acc.length - 1] = (
            <TextSpan
              text={getLastElement(acc).props.text.concat(editMe)}
              id={acc.length - 1}
              mouseUpCapture={consoleLogSelect}
            ></TextSpan>
          );

          if (index === extentElementId) {
            acc.push(
              <TextSpan
                text={word.props.text.substring(
                  selection?.extentOffset,
                  word.props.text.length
                )}
                id={acc.length}
                mouseUpCapture={consoleLogSelect}
              ></TextSpan>
            );
          }
        }

        return acc;
      }, [])
    );
  };

  // const selectionActiveHandler = (selection) => {
  //     setSelectedText(selection);
  // }

  const getLastElement = (arr) => {
    return arr?.[arr.length - 1];
  };

  //init text

  return (
    <div>
      {/* <ActionTextArea currentRef={currentRef} id={1} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={2} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={3} selectionActiveHandler={selectionActiveHandler}/> */}
      {selectedText}
      <button onClick={reformatText}></button>
    </div>
  );
};
