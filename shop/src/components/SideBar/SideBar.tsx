import React from "react";
import "./SideBar.scss"
import {useButtonsObj} from "../../hooks/hooks";
import {SideBarItem} from "./SideBar-item/SideBar-item";
import {useParams} from "react-router-dom";



export function SideBar() {
    //кнопки сайдбара
    const params = useParams()
    const sideBarButtons: Array<any> = useButtonsObj(Number(params.category))

    return (
        <nav className="side-bar">
            {sideBarButtons.map(el => {
                return(
                    <SideBarItem name={el.name} key={el.name} id={el.id} parent_id={el.parent_id}/>
                )
            })}
        </nav>
    )
}