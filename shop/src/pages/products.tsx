import React from "react";
import {Catalog} from "../components/Catalog/Catalog";
import {useParams} from "react-router-dom";
import {useButtonsObj} from "../hooks/hooks";

export function Products() {
    let params = useParams()

    const products: Array<any> = useButtonsObj(Number(params.subcategory))


    return (
        <div>
            <Catalog products={products}/>
        </div>
    )
}