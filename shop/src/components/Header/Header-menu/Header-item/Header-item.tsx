import React, {useMemo} from "react";
import "./Header-item.scss"
import {Link, useParams} from "react-router-dom";
import {useButtonsObj} from "../../../../hooks/hooks";
import classNames from "classnames";

export function HeaderItem(props:{name:string, id:number}) {

    let buttonsObj = useButtonsObj(props.id)

    const firstEl = useMemo(() => {
        return buttonsObj.filter((item) => item.parent_id === props.id)[0]
    },[buttonsObj, props.id])

    const link = useMemo(() => {
        return `/${props.id}/${firstEl.id}`
    },[props.id])

    let params = useParams()

    const isActive = useMemo(() => {
        return Number(params.category) === props.id
    },[params.category,props.id])

    return (
        <Link to={link} className={classNames('header-item', {'activeClass': isActive})}>
            {props.name}
        </Link>
    )
}