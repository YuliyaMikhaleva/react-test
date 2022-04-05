import React from "react";
import {useButtons} from "../../../hooks/hooks";
import {HeaderItem} from "./Header-item/Header-item";
import "./Header-menu.scss"

export function HeaderMenu() {
    //кнопки меню хедера
    const headerButtonsArr:Array<any> = useButtons( -1)
    return (
        <nav className="header-menu">
            {headerButtonsArr.map(el => {
                return(
                    <HeaderItem name={el} key={el}/>
                )
            })}
        </nav>
    )
}