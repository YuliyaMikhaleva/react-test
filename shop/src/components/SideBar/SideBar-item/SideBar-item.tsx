import React, {useMemo} from "react";
import "./SideBar-item.scss"
import {Link, useParams} from "react-router-dom";
import classNames from "classnames";


export function SideBarItem(props:{name:string, id:number, parent_id:number}) {

    const link = useMemo(() => {
        return `/${props.parent_id}/${props.id}`
    },[props.id, props.parent_id])

    let params = useParams()

    const isActive = useMemo(() => {
        return Number(params.subcategory) === props.id
    },[params.subcategory,props.id])

    return (
        <Link to={link} className="link">
            <span className={classNames('category',{'active-category': isActive})}>
                {props.name}
            </span>
        </Link>
    )
}