import React, { useState, useRef } from "react";
//https://stackoverflow.com/questions/54844314/getting-index-of-cursor-selected-text
export const BackgroundTextInput = ({ id, selectionActiveHandler, ...props }) => {
    const [currentText, setCurrentText] = useState("");
    const currentRef = useRef(null);

    const handleClick = (stuff) => {
        // console.log(currentRef.current)
        if(currentRef.current === stuff.target) {
            const selection = stuff.target.value.substring(stuff.target.selectionStart, stuff.target.selectionEnd);
            selection && selectionActiveHandler(selection);
        }
    }
    return (<span {...props} onMouseUpCapture={(stuff)=>handleClick(stuff)}>
        <input type="text" ref={currentRef} value={currentText} onChange={(e)=>setCurrentText(e.target.value)} />
        <text>test</text>
    </span>);
}