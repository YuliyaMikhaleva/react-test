import React from "react";
import "./Button.scss"

interface Props{
    title: string
}

export function Button (props:Props) {
    return (
        <button className="button button__params" >{props.title}</button>
    )
}