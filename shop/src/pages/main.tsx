import React, {useEffect} from "react";
import {fetchProducts} from "../store/products/async";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {getGroupsObjects, productsList} from "../store/products/selectors";
import {useNavigate} from "react-router-dom";


export function Main() {
    // const dispatch = useAppDispatch()
    //
    // useEffect(() => {
    //     const fetchProductsList = () => dispatch(fetchProducts());
    //     fetchProductsList();//вызываем список товаров
    //
    // },[dispatch])

    const category = useAppSelector(state => getGroupsObjects(state, -1))[0]?.id//название первой категории

    const subCategory = useAppSelector(state => getGroupsObjects(state, category))[0]?.id//название первой подкатегории

    const navigate = useNavigate()// let products = useAppSelector(productsList)
    let products = useAppSelector(productsList)
    if (products){
        navigate(`/${category}/${subCategory}`)
    }

    return (
        <div>Main</div>
    )
}