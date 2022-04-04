import React from "react";
import "./SideBar-item.scss"

export function SideBarItem(props:{name:string}) {
    return (
        <a href="/" className="link">
            <span className="category">
                {props.name}
            </span>
        </a>
    )
}