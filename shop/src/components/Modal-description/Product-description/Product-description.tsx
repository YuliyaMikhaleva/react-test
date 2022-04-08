import React, {useState} from "react";
import "./Product-description.scss"

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
export function ProductDescription (props:{product:Product}) {
    const [info, setInfo] = useState({
        description:"",
        parametrs:"",
        reviews:[],
        form_review:""
    })


    return (
        <div className="modal-product">
            <button>
                <img className="modal-product__img" src={props.product.img} alt="img"/>
            </button>
            <h3 className="modal-product__name">{props.product.name}</h3>
            <span className="modal-product__price"><span>{props.product.price}</span> ₽</span>
            <div className="modal-product__links"></div>
            <section></section>
        </div>
    )
}