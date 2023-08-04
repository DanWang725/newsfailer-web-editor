import React, { useState } from 'react';
import { BackgroundTextInput } from './BackgroundTextInput';

export const ActionTextArea = ({selectionActiveHandler, ...props}) => {

    const [textArea] = useState([<BackgroundTextInput id={props.id} selectionActiveHandler={selectionActiveHandler}/>]);
    
    return (textArea)
}