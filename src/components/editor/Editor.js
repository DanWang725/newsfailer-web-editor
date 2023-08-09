import React, { useState } from "react";
// import { ActionTextArea } from "../ActionTextArea/ActionTextArea";
import { TextSpan } from "../TextSpan/TextSpan";
import { consoleLogSelect } from "./utils";
import { useSelectionMemory } from "./useSelectionMemory";

export const Editor = () => {
  const {
    isSelectionInTextArea,
    baseElement,
    extentElement,
    selectedText: selText,
    parentDiv,
  } = useSelectionMemory("editor-text");

  const [textContent, setSelectedText] = useState(
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

  // const currentRef = useRef(null);

  // useEffect(() => {
  //   if (isSelectionInTextArea) {
  //     // console.log(true);
  //     reformatText();
  //   }
  // }, [isSelectionInTextArea]);

  const reformatText = () => {
    if (!isSelectionInTextArea) return;

    // console.log(selectedText);
    // console.log(selectedText.filter((word) => `${word.props.id}` === selection?.anchorNode?.parentElement?.id));
    setSelectedText(
      textContent.reduce((acc, word, index) => {
        // console.log(word.props.text, index);
        if (index < baseElement.id || index > extentElement.id) {
          acc.push(
            <TextSpan
              text={word.props.text}
              id={acc.length}
              key={acc.length}
              mouseUpCapture={consoleLogSelect}
            ></TextSpan>
          );
        } else {
          let spanText = word.props.text;
          if (index == baseElement.id) {
            baseElement.offset &&
              acc.push(
                <TextSpan
                  text={spanText.substring(0, baseElement.offset)}
                  id={acc.length}
                  mouseUpCapture={consoleLogSelect}
                ></TextSpan>
              );
            acc.push(
              <TextSpan
                text={selText}
                id={acc.length}
                mouseUpCapture={consoleLogSelect}
              ></TextSpan>
            );
            // window
            //   .getSelection()
            //   .setBaseAndExtent(
            //     baseElement.id,
            //     0,
            //     baseElement.id,
            //     selText.length - 1
            //   );
            console.log(window.getSelection());
            // window.getSelection().modify("extend", "forward", selText.length);
            // window.getSelection().extend(selText.length);
            console.log(parentDiv.children[baseElement.id]);
          }

          if (index == extentElement.id) {
            extentElement.offset !== word.props.text.length &&
              acc.push(
                <TextSpan
                  text={spanText.substring(
                    extentElement.offset,
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

  //init text

  return (
    <div>
      {/* <ActionTextArea currentRef={currentRef} id={1} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={2} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={3} selectionActiveHandler={selectionActiveHandler}/> */}
      {textContent}
      <button onClick={reformatText}></button>
    </div>
  );
};
