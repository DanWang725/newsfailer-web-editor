import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
export const BackgroundTextInput = ({ selectionActiveHandler, ...props }) => {
  const [currentText, setCurrentText] = useState("");
  const currentRef = useRef(null);

  const handleClick = (stuff) => {
    // console.log(currentRef.current)
    if (currentRef.current === stuff.target) {
      const selection = stuff.target.value.substring(
        stuff.target.selectionStart,
        stuff.target.selectionEnd
      );
      selection && selectionActiveHandler(selection);
    }
  };
  return (
    <span {...props} onMouseUpCapture={(stuff) => handleClick(stuff)}>
      <input
        type="text"
        ref={currentRef}
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      />
      <text>test</text>
    </span>
  );
};
BackgroundTextInput.propTyes = {
  selectionActiveHandler: PropTypes.func,
};
