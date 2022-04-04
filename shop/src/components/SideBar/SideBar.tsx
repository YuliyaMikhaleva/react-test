import React from "react";
import "./SideBar.scss"
import {useAppSelector} from "../../hooks/hooks";
import {productsList} from "../../store/products/selectors";
import {SideBarItem} from "./SideBar-item/SideBar-item";


interface sideBar {
    parent_id: number,
    name: string
}

export function SideBar() {
    //кнопки сайдбара
    const sideBarButtons: Array<any> = useAppSelector(productsList).filter((item:sideBar) => item.parent_id === 100).map((el:sideBar) => el.name)
    console.log(sideBarButtons)

    return (
        <nav className="side-bar">
            {sideBarButtons.map(el => {
                return(
                    <SideBarItem name={el} key={el}/>
                )
            })}
        </nav>
    )
}