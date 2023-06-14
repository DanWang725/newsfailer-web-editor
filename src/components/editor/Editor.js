import { useState, useRef } from "react"
import { ActionTextArea } from "../ActionTextArea/ActionTextArea";


export const Editor = () => {
    const [selectedText, setSelectedText] = useState("");
    const currentRef = useRef(null);

    const selectionActiveHandler = (selection) => {
        setSelectedText(selection);
    }

    return (<div>
        <ActionTextArea currentRef={currentRef} id={1} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={2} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={3} selectionActiveHandler={selectionActiveHandler}/>
        <h1>{selectedText}</h1>
    </div>)
}