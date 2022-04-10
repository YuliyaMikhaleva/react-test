import React from "react";
import {HeaderModal} from "../ui-kit/Header-modal/Header-modal";
import "./Modal-description.scss"
import classNames from "classnames";
import {ProductDescription} from "./Product-description/Product-description";
import {Product} from "../../types/Products";

export function ModalDescription (props:{close:() => void, className:string, product:Product}) {

    const classes = classNames('modal', props.className)
    return (
        <div className={classes}>
            <div className="modal__wrp">
                <div className="modal__content">
                    <div>
                        <HeaderModal title="Информация" className="modal__header" close={props.close}/>

                        <ProductDescription product={props.product}/>
                    </div>
                </div>
            </div>
        </div>
    )
}