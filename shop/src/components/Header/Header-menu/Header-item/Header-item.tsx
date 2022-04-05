import React from "react";
import "./Header-item.scss"
import {Link, useParams} from "react-router-dom";

export function HeaderItem(props:{name:string}) {

    let params = useParams();
    console.log('params', params)

    return (
        <Link to="#" className="header-item">
            {props.name}
        </Link>
    )
}