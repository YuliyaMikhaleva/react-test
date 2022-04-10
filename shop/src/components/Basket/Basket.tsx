import React  from "react";
import "./Basket.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {basket} from "../../store/basket/selectors";
import {BasketItem} from "./Basket-Item/BasketItem";
import {deleteFromCart} from "../../store/basket/basketSlice";

export function Basket() {
    const basketList = useAppSelector(basket)

    const dispatch = useAppDispatch()//для вызова экшенов

    return (
        <section className="basket">
            {basketList.map(el => {
                return(
                    <BasketItem className="basket__item"
                                product={el}
                                key={el.name}
                                deleteProduct={() => dispatch(deleteFromCart(el))}/>
                )
            })}
        </section>

    )
}