import React, {ComponentProps} from "react";
import "./Button.scss"

interface Props extends ComponentProps<'button'> {
    title: string,
    add?:()=> void,
}

export function Button ({ add, title, ...props}:Props) {
    let className = "button button__params"
    if (props.className){
        className += ` ${props.className}`
    }
    return (
        <button {...props} className={className} onClick={add}>{title}</button>
    )
}