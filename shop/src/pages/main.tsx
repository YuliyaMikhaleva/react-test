import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import {getGroupsObjects, productsList} from "../store/products/selectors";
import {useNavigate} from "react-router-dom";


export function Main() {
    const category = useAppSelector(state => getGroupsObjects(state, -1))[0]?.id//название первой категории

    const subCategory = useAppSelector(state => getGroupsObjects(state, category))[0]?.id//название первой подкатегории
    let products = useAppSelector(productsList)
    const navigate = useNavigate()


    useEffect(() => {
        navigate(`/${category}/${subCategory}`)

    }, [category])



    return (
        <div>Main</div>
    )
}