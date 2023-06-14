import React, { useRef, useState } from 'react';
import { BackgroundTextInput } from './BackgroundTextInput';

export const ActionTextArea = ({selectionActiveHandler, ...props}) => {

    const [textArea, setTextArea] = useState([<BackgroundTextInput id={props.id} selectionActiveHandler={selectionActiveHandler}/>]);
    
    return (textArea)
}