import React from "react";
export const TextSpan = ({ text, mouseUpCapture, ...props }) => {
  return (
    <span
      name={"editor-text"}
      {...props}
      onMouseUpCapture={(stuff) => mouseUpCapture(stuff)}
      style={{ border: "1px solid black" }}
    >
      {text}
    </span>
  );
};
