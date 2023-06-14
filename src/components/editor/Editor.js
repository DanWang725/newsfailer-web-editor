import { useState, useRef } from "react"


export const Editor = () => {
    const [selectedText, setSelectedText] = useState("");
    const currentRef = useRef(null);

    const handleClick = (stuff) => {
        if(currentRef.current === stuff.target) {
        const selection = stuff.target.value.substring(stuff.target.selectionStart, stuff.target.selectionEnd);
        console.log(selection);
        setSelectedText(selection);
        }
    }
    return (<div>
        <textarea id="editor" name="editor" rows="10" cols="80" ref={currentRef} onMouseUpCapture={(stuff)=>handleClick(stuff)}>
        {/* probably have a bunch of text areas*/}
        </textarea>

    </div>)
}