import React from "react";
import {Button} from "../../ui-kit/Button/Button";
import "./Catalog-card.scss"

interface Product{
    id:number,
    img:string,
    name:string,
    parent_id:number,
    price:number,
    props: ProductProps,
    reviews:ProductReviews
}
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
export function CatalogCard (props:{product:Product, nameButton:string, add:()=> void}) {
    return (
        <article className="catalog-card">
            <button className="catalog-card__link" type="button">
                <img className="catalog-card__img" src={props.product.img} alt="photo"/>
            </button>
            <button className="catalog-card__link">
                <h3 className="catalog-card__title">{props.product.name}</h3>
            </button>
            <span className="catalog-card__price"><span>{props.product.price}</span> ₽</span>
            <Button  className="catalog-card__button" title={props.nameButton} add={props.add}></Button>
        </article>
    )
}