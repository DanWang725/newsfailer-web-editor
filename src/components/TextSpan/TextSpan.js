export const TextSpan = ({text, mouseUpCapture, ...props}) => {
    return <span {...props} onMouseUpCapture={(stuff)=>mouseUpCapture(stuff)}>{text}</span>
}