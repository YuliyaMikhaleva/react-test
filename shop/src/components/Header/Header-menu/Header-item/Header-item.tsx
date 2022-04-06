import React, {useMemo} from "react";
import "./Header-item.scss"
import {Link} from "react-router-dom";
import {useButtonsObj} from "../../../../hooks/hooks";

export function HeaderItem(props:{name:string, id:number}) {

    let buttonsObj = useButtonsObj(props.id)

    const firstEl = useMemo(() => {
        return buttonsObj.filter((item) => item.parent_id === props.id)[0]
    },[buttonsObj, props.id])

    const link = useMemo(() => {
        return `/${props.id}/${firstEl.id}`
    },[props.id])


    return (
        <Link to={link} className="header-item">
            {props.name}
        </Link>
    )
}