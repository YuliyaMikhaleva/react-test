import React from "react";
import "./SideBar.scss"
import {useButtons} from "../../hooks/hooks";
import {SideBarItem} from "./SideBar-item/SideBar-item";
import {useLocation} from "react-router-dom";

export function SideBar() {
    //кнопки сайдбара
    // const sideBarButtons: Array<any> = useAppSelector(state => sideBarMenu(state, 100))
    const sideBarButtons: Array<any> = useButtons( 100)

    // const category =  useLocation();
    // console.log('!', category)

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