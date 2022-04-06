import React  from "react";
import "./ModalBasket.scss";
import classNames from "classnames";
import {HeaderModal} from "../ui-kit/Header-modal/Header-modal";

export function ModalBasket(props:{className:string}) {

    const classes = classNames('modal', props.className)
    return (
        <div className={classes}>
            <div className="modal__dialog">
                <div className="modal__content">
                    <div className="basket">
                        <HeaderModal title="Оформить заказ"/>
                        <section>
                            <span className="basket__text">

                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    )
}