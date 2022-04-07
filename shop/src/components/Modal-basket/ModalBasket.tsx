import React, {useMemo, useState} from "react";
import "./ModalBasket.scss";
import classNames from "classnames";
import {HeaderModal} from "../ui-kit/Header-modal/Header-modal";
import {useAppSelector} from "../../hooks/hooks";
import {basket} from "../../store/basket/selectors";
import {Basket} from "../Basket/Basket";
import {ModalText} from "./Modal-text/Modal-text";
import {ModalForm} from "./Modal-form/Modal-form";

export function ModalBasket(props:{className:string, close:() => void}) {

    const [showResultOrder] = useState(false)

    const basketList = useAppSelector(basket)

    const title = useMemo(() => {
        if (basketList.length<=0 && !showResultOrder){
            return "В корзине ничего нет"
        } else if (showResultOrder){
            return "Заказ успешно создан"
        } else {
            return ""
        }
    },[basketList,showResultOrder ])

    const classes = classNames('modal', props.className)
    return (
        <div className={classes}>
            <div className="modal__dialog">
                <div className="modal__content">
                    <div className="basket">
                        <HeaderModal className="basket__header" title="Оформить заказ" close={props.close}/>
                        {basketList.length > 0 && (
                            <section>
                                <span className="basket__text">В корзине:</span>

                                <Basket/>
                                {/*Здесь будет корзина с товарами*/}

                                <ModalForm/>
                            </section>
                        )}
                        <ModalText className="basket__modaltext" title={title}/>

                    </div>
                </div>
            </div>
        </div>

    )
}