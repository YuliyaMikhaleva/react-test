import React from "react";
import "./Header-item.scss"

export function HeaderItem(props:{name:string}) {

    return (
        <a href="/" className="header-item">
            {props.name}
        </a>
    )
}