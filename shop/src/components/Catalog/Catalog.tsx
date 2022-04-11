import React, {useEffect, useMemo} from "react";
import {CatalogCard} from "./Catalog-card/Catalog-card";
import "./Catalog.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {addToCart, deleteBasketPending, deleteFromCart} from "../../store/basket/basketSlice";
import {ZeroComponent} from "../ZeroComponent/ZeroComponent";
import classNames from "classnames";
import {Product} from "../../types/Products";
import {basket, getItemInBasket} from "../../store/basket/selectors";
// import any = jasmine.any;
import {RootState} from "../../store";
import {createSelector} from "@reduxjs/toolkit";
import {productsList} from "../../store/products/selectors";

export function Catalog (props:{products:Array<Product>, className:string}) {

    const dispatch = useAppDispatch()

    const classes = classNames(['catalog', props.className])

    const deleteButtonPending = () => dispatch(deleteBasketPending())

    const useAddedProduct = (id: number) => useAppSelector(state => getItemInBasket(state,id))

    const basketState = useAppSelector(basket)

    const state = (state:RootState) => state


    // const basketState = useAppSelector(state => basket);

    // console.log('catalog', useAppSelector(productsList))


    // useEffect(()=> {
    //
    // },[])

    // const basketState = (state:RootState) => state.basket.basket
    // const addedProduct = createSelector(basketState, (id:number) => {
    //     let find = basketState.find(el => el.id === id)
    // })

    // const u

    // const addedProduct = useAddedProduct(id)

    // const rootState = {...useAppSelector(basket)} as RootState;
    // const itemInBasket = (id:number) => getItemInBasket(rootState, id);

    const funcAddToCart = (el:Product) => {
        console.log(el.id)
        let basket = basketState
        console.log('basketState',basket)

        let find = basket.find((element => element.id === el.id))
        if (basket.length>0){
            if (!find){
                dispatch(addToCart(el))
            } else {
                dispatch(deleteFromCart(el))
            }
        } else {
            dispatch(addToCart(el))
        }


        setTimeout(() => {
            deleteButtonPending()
        }, 1000)
    }

    //
    /**
     * Проверка по id наличия такого товара в корзине в корзине
     * @param {id}
     * @returns {Boolean}
     */
    // const addedProduct = useMemo(() => {
    //     return useAddedProduct(id:n)
    // },[useAddedProduct])



    return (
        <section className={classes}>
            {props.products.map(el => {
                return (
                    <CatalogCard key={el.name} product={el} add={() => funcAddToCart(el)} />
                )
            })}
            {props.products.length === 0 && (
                <ZeroComponent className="catalog__zeropage"/>
            )}
        </section>
    )
}
