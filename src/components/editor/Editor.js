import React, { useState } from "react";
// import { ActionTextArea } from "../ActionTextArea/ActionTextArea";
import { TextSpan } from "../TextSpan/TextSpan";
import { consoleLogSelect } from "./utils";
import { useSelectionMemory } from "./useSelectionMemory";
import { EditableMultiSpanContent } from "./EditableMultiSpanContent";
// import ContentEditable from "react-contenteditable";

export const Editor = () => {
  const {
    isSelectionInTextArea,
    baseElement,
    extentElement,
    selectedText: selText,
    parentDiv,
  } = useSelectionMemory("editor-text");

  const [textContent, setSelectedText] = useState([
    <TextSpan
      text={"Some Tasdfasdfasdf asdfasdfasdfasd ext"}
      id={0}
      key={0}
      mouseUpCapture={consoleLogSelect}
    ></TextSpan>,
  ]);

  const reformatText = () => {
    if (!isSelectionInTextArea) return;

    setSelectedText(
      textContent.reduce((accumulator, word, index) => {
        if (index < baseElement.id || index > extentElement.id) {
          accumulator.push(
            <TextSpan
              text={word.props.text}
              id={accumulator.length}
              key={accumulator.length}
              mouseUpCapture={consoleLogSelect}
            ></TextSpan>
          );
        } else {
          let spanText = word.props.text;
          if (index == baseElement.id) {
            baseElement.offset &&
              accumulator.push(
                <TextSpan
                  text={spanText.substring(0, baseElement.offset)}
                  id={accumulator.length}
                  mouseUpCapture={consoleLogSelect}
                ></TextSpan>
              );
            accumulator.push(
              <TextSpan
                text={selText}
                id={accumulator.length}
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
              accumulator.push(
                <TextSpan
                  text={spanText.substring(
                    extentElement.offset,
                    word.props.text.length
                  )}
                  id={accumulator.length}
                  mouseUpCapture={consoleLogSelect}
                ></TextSpan>
              );
          }
        }

        return accumulator;
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
      <EditableMultiSpanContent></EditableMultiSpanContent>
      <span contentEditable={true} onChange={(e) => console.log(e)}>
        {textContent}
      </span>
      <button onClick={reformatText}>Redo Spans</button>
      <button onClick={reformatText}>Redo Spans</button>
      <button onClick={reformatText}>Redo Spans</button>
    </div>
  );
};
