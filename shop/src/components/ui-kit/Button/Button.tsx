import React from "react";
import "./Button.scss"

interface Props{
    title: string,
    className?: string,
    add?:()=> void
}

export function Button (props:Props) {
    let className = "button button__params"
    if (props.className){
        className += ` ${props.className}`
    }
    return (
        <button className={className} onClick={props.add} >{props.title}</button>
    )
}