import React  from "react";
import classNames from "classnames";
import imgBasket from "../../../assets/images/basket.svg"
import imgOrder from "../../../assets/images/order.png"
import "./Modal-text.scss"

export function ModalText(props:{title:string, className:string}) {
    const classes = ['modal-text', props.className]

    return (
        <section className={classNames(classes)}>
            {props.title === 'В корзине ничего нет' && (
                <img src={imgBasket} alt="basket" width="99" height="99"/>
            )}

            {props.title === 'Заказ успешно создан' && (
                <img src={imgOrder} alt="basket" width="140" height="109"/>
            )}
            <span className="modal-text__txt">{props.title}</span>
        </section>

    )
}