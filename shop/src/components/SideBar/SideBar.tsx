import React from "react";
import "./SideBar.scss"
import {useButtons} from "../../hooks/hooks";
import {SideBarItem} from "./SideBar-item/SideBar-item";
import {useParams} from "react-router-dom";

export function SideBar() {
    //кнопки сайдбара
    const sideBarButtons: Array<any> = useButtons( 14)

    const params = useParams()
    console.log('params', params)
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