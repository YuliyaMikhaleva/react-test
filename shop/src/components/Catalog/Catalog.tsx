import React, {useMemo} from "react";
import {CatalogCard} from "./Catalog-card/Catalog-card";
import "./Catalog.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {addToCart} from "../../store/basket/basketSlice";
import {ZeroComponent} from "../ZeroComponent/ZeroComponent";
import classNames from "classnames";
import {getItemIds} from "../../store/basket/selectors";

interface ProductProps {
    [key: string]: {
        caption: string,
        measure:string,
        value:number
    }
}
interface ProductReviews {
    [key: number]: {
        author: string,
        avatar:string,
        rate:number,
        text:string
    }
}
interface Product{
    id:number,
    descr:string,
    img:string,
    name:string,
    parent_id:number,
    price:number,
    props: ProductProps,
    reviews:ProductReviews
}
export function Catalog (props:{products:Array<Product>, className:string}) {
    const dispatch = useAppDispatch()//для вызова экшенов

    const classes = classNames(['catalog', props.className])



    return (
        <section className={classes}>
            {props.products.map(el => {
                return (
                    <CatalogCard key={el.name} product={el} add={() => dispatch(addToCart(el))} />
                )
            })}
            {props.products.length === 0 && (
                <ZeroComponent className="catalog__zeropage"/>
            )}
        </section>
    )
}
