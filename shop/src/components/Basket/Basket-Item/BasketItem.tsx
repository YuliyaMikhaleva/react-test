import React  from "react";
import "./BasketItem.scss"
import classNames from "classnames";
import {Product} from "../../../types/Products"

export function BasketItem(props:{product:Product, className:string, deleteProduct:()=> void}) {

    const classes = ['basket-item', props.className]

    return (
        <article className={classNames(classes)}>
            <img className="basket-item__img" src={props.product.img} alt="photoImg"/>
            <div className="basket-item__txt">
                <h3 className="basket-item__title">{props.product.name}</h3>
                <span className="basket-item__price"><span>{props.product.price}</span> ₽</span>
                <button className="basket-item__button" onClick={props.deleteProduct}>Убрать из корзины</button>
            </div>
        </article>

    )
}