import { useState, useRef, useEffect } from "react"
import { ActionTextArea } from "../ActionTextArea/ActionTextArea";
import { TextSpan } from "../TextSpan/TextSpan";


export const Editor = () => {
    const [selectedText, setSelectedText] = useState([]);
    const currentRef = useRef(null);

    useEffect(() => {setSelectedText("this is a test text that should be a little long".split(" ").map((word, index) => {
        return <TextSpan text={word} id={index} mouseUpCapture={consoleLogSelect}></TextSpan>
    }))}, []);

    

    // const selectionActiveHandler = (selection) => {
    //     setSelectedText(selection);
    // }

    const consoleLogSelect = (selected) =>{
        console.log(selected);
        console.log(window.getSelection());
        console.log(window.getSelection()?.anchorNode?.parentElement?.id);
        console.log(selectedText);
        console.log(selectedText.filter((word) => `${word.props.id}` === window.getSelection()?.anchorNode?.parentElement?.id));
    }

    //init text

    return (<div>
        {/* <ActionTextArea currentRef={currentRef} id={1} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={2} selectionActiveHandler={selectionActiveHandler}/>
        <ActionTextArea currentRef={currentRef} id={3} selectionActiveHandler={selectionActiveHandler}/> */}
        {selectedText}
    </div>)
}