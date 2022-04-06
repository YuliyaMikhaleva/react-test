import React, {useMemo} from "react";
import "./SideBar-item.scss"
import {Link} from "react-router-dom";


export function SideBarItem(props:{name:string, id:number, parent_id:number}) {

    const link = useMemo(() => {
        return `/${props.parent_id}/${props.id}`
    },[props.id, props.parent_id])


    return (
        <Link to={link} className="link">
            <span className="category">
                {props.name}
            </span>
        </Link>
    )
}