import React from "react";
import {useParams} from "react-router-dom";


export function Products() {
    let params = useParams()
    console.log('PARAMS', params)

    return (
        <div>1</div>
    )
}