import React from "react";
import {CatalogCard} from "./Catalog-card/Catalog-card";
import "./Catalog.scss"
import {useAppDispatch} from "../../hooks/hooks";
import {addToCart} from "../../store/basket/basketSlice";
import {ZeroComponent} from "../ZeroComponent/ZeroComponent";
import classNames from "classnames";
import {Product} from "../../types/Products";

export function Catalog (props:{products:Array<Product>, className:string}) {
    const dispatch = useAppDispatch()

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
