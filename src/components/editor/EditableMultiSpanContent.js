import ContentEditable from "react-contenteditable";
import React, { useRef, useState } from "react";
import { updateSpans } from "./utils";
import { useSelectionMemory } from "./useSelectionMemory";

export const EditableMultiSpanContent = () => {
  const {
    isSelectionInTextArea,
    baseElement,
    extentElement,
    selectedText: selText,
  } = useSelectionMemory("content-editor");

  const [textContent, setTextContent] = useState(
    `<span name="content-editor" id="0">the joel hops over the lol</span>`
  );
  const ref = useRef(null);

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(updateSpans(e.target.value));
    setTextContent(e.target.value);
  };

  const handleSplit = () => {
    if (!isSelectionInTextArea) return;
    const newString = [...textContent.matchAll(/<span [^>]*>(.*?)<\/span>/g)]
      .reduce((accumulator, match, index) => {
        console.log(selText);
        const matchResult = match[1];
        if (index < baseElement.id || index > extentElement.id) {
          accumulator.push(
            `<span name="content-editor" id=${accumulator.length}>${matchResult}</span>`
          );
        } else {
          if (index == baseElement.id) {
            baseElement.offset &&
              accumulator.push(
                `<span name="content-editor" id=${
                  accumulator.length
                }>${matchResult.substring(0, baseElement.offset)}</span>`
              );
            accumulator.push(
              `<span name="content-editor" id=${accumulator.length}>${selText}</span>`
            );
          }
          if (index == extentElement.id) {
            extentElement.offset !== matchResult.length &&
              accumulator.push(
                `<span name="content-editor" id=${
                  accumulator.length
                }>${matchResult.substring(
                  extentElement.offset,
                  matchResult.length
                )}</span>`
              );
          }
        }
        console.log(accumulator);
        return accumulator;
      }, [])
      .join("");
    console.log(newString);
    setTextContent(newString);
  };

  return (
    <>
      <ContentEditable
        innerRef={ref}
        html={textContent}
        onChange={(e) => handleChange(e)}
      ></ContentEditable>
      <button onClick={handleSplit}>push me</button>
    </>
  );
};
