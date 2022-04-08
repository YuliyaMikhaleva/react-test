import React, {useState} from "react";
import {Button} from "../../ui-kit/Button/Button";
import "./Catalog-card.scss"
import {ModalDescription} from "../../Modal-description/Modal-description";
import classNames from "classnames";

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
    const [open, setOpen] = useState(false)

    return (
        <article className="catalog-card">
            <button className="catalog-card__link" type="button" onClick={() => setOpen(!open)}>
                <img className="catalog-card__img" src={props.product.img} alt="photo"/>
            </button>
            <button className="catalog-card__link" onClick={() => setOpen(!open)}>
                <h3 className="catalog-card__title">{props.product.name}</h3>
            </button>
            <span className="catalog-card__price"><span>{props.product.price}</span> ₽</span>
            <Button  className="catalog-card__button" title={props.nameButton} add={props.add}></Button>
            <ModalDescription close={() => setOpen(!open)} className={classNames('catalog-card__description',{'catalog-card__description-open':open})} product={props.product}/>
            <div className={classNames('catalog-card__dark-block', {'catalog-card__dark-block-active': open})}></div>
        </article>
    )
}