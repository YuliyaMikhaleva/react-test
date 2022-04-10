import React from "react";
import {useButtonsObj} from "../../../hooks/hooks";
import {HeaderItem} from "./Header-item/Header-item";
import "./Header-menu.scss"


export function HeaderMenu() {
    /**
     * Кнопки хедера по id
     */
    let headerButtonns = useButtonsObj(-1)

    return (
        <nav className="header-menu">
            {headerButtonns.map(el => {
                return(
                    <HeaderItem name={el.name} key={el.name} id={el.id}/>
                )
            })}
        </nav>
    )
}