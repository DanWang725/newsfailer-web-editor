import { useEffect, useState } from "react";
export const useSelectionMemory = (elementName) => {
  const [baseElement, setBaseElement] = useState({ key: null, offset: null });
  const [extentElement, setExtentElement] = useState({
    key: null,
    offset: null,
  });
  const [isSelectionInTextArea, setIsSelectionInTextArea] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleCaptureSelection);
    return () => {
      window.removeEventListener("mouseup", handleCaptureSelection);
    };
  }, []);
  unm;

  const handleCaptureSelection = () => {
    const selection = window.getSelection();
    if (
      selection?.anchorNode?.parentElement?.name !== "editor-text" ||
      selection?.extentNode?.parentElement?.name !== "editor-text"
    ) {
      setIsSelectionInTextArea(false);
      return;
    }

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
  };

  return { isSelectionInTextArea, baseElement, extentElement };
};
