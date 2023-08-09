import { useEffect, useState } from "react";
export const useSelectionMemory = (elementName) => {
  const [baseElement, setBaseElement] = useState({ key: null, offset: null });
  const [extentElement, setExtentElement] = useState({
    key: null,
    offset: null,
  });
  const [selectedText, setSelectedText] = useState("");
  const [parentDiv, setParentDiv] = useState(null);
  const [isSelectionInTextArea, setIsSelectionInTextArea] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleCaptureSelection);
    return () => {
      window.removeEventListener("mouseup", handleCaptureSelection);
    };
  }, []);

  const handleCaptureSelection = () => {
    const selection = window.getSelection();
    // console.log(selection);
    console.log(selection?.anchorNode?.parentElement?.parentElement.children);
    if (selection.type !== "Range") {
      return;
    }
    if (
      selection?.anchorNode?.parentElement?.attributes?.name?.value !==
        elementName ||
      selection?.extentNode?.parentElement?.attributes?.name?.value !==
        elementName
    ) {
      console.log("is not selected");
      setIsSelectionInTextArea(false);
      return;
    }
    setParentDiv(selection?.anchorNode?.parentElement?.parentElement);
    console.log("is selected");
    setIsSelectionInTextArea(true);
    const baseElement = {
      id: selection?.baseNode?.parentElement?.id,
      offset: selection?.anchorOffset,
    };
    const extentElement = {
      id: selection?.extentNode?.parentElement?.id,
      offset: selection?.extentOffset,
    };
    setBaseElement(
      baseElement.id <= extentElement.id ? baseElement : extentElement
    );
    setExtentElement(
      baseElement.id <= extentElement.id ? extentElement : baseElement
    );
    setSelectedText(selection.toString());
  };

  return {
    isSelectionInTextArea,
    baseElement,
    extentElement,
    selectedText,
    parentDiv,
  };
};
