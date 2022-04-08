import React from "react";
import {HeaderModal} from "../ui-kit/Header-modal/Header-modal";
import "./Modal-description.scss"
import classNames from "classnames";
import {ProductDescription} from "./Product-description/Product-description";


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