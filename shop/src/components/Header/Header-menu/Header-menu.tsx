import React from "react";
import {useAppSelector} from "../../../hooks/hooks";
import {productsList} from "../../../store/products/selectors";
import {HeaderItem} from "./Header-item/Header-item";
import "./Header-menu.scss"

interface headerBtn {
    parent_id: number,
    name: string
}

export function HeaderMenu() {
    //кнопки меню хедера
    const headerButtons: Array<any> = useAppSelector(productsList).filter((item:headerBtn) => item.parent_id === -1).map((el:headerBtn) => el.name)
    console.log(headerButtons)


    return (
        <nav className="header-menu">
            {headerButtons.map(el => {
                return(
                    <HeaderItem name={el} key={el}/>
                )
            })}
        </nav>
    )
}