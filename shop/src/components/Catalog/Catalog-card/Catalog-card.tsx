import React, {useMemo, useState} from "react";
import {Button} from "../../ui-kit/Button/Button";
import "./Catalog-card.scss"
import {ModalDescription} from "../../Modal-description/Modal-description";
import classNames from "classnames";
import {useAppSelector} from "../../../hooks/hooks";
import {getItemIds} from "../../../store/basket/selectors";
import {Product} from "../../../types/Products";

export function CatalogCard (props:{product:Product, add:()=> void}) {
    const [open, setOpen] = useState(false)


    const titleButton = useAppSelector(state => getItemIds(state, props.product.id))

    /**
     * Название кнопки в зависимости от того, есть в корзине товар уже или нет
     * return "В корзине", "...", "Добавить в корзину"
     */
    const nameButton = useMemo(() => {
        return titleButton
    },[titleButton])

    return (
        <article className="catalog-card">
            <button className="catalog-card__link" type="button" onClick={() => setOpen(!open)}>
                <img className="catalog-card__img" src={props.product.img} alt="photo"/>
            </button>
            <button className="catalog-card__link" onClick={() => setOpen(!open)}>
                <h3 className="catalog-card__title">{props.product.name}</h3>
            </button>
            <span className="catalog-card__price"><span>{props.product.price}</span> ₽</span>
            <Button  className="catalog-card__button" title={nameButton} add={props.add}></Button>
            <ModalDescription close={() => setOpen(!open)} className={classNames('catalog-card__description',{'catalog-card__description-open':open})} product={props.product}/>
            <div className={classNames('catalog-card__dark-block', {'catalog-card__dark-block-active': open})}></div>
        </article>
    )
}