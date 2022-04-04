import React, {useEffect} from "react";
// import {useSelector, useDispatch} from "react-redux";
// import {RootState} from "../../store";
import {increment} from "../../store/counter/counterSlice";
import {decrement} from "../../store/counter/counterSlice";
import "./Counter.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchProducts} from "../../store/products/async";


export function Counter() {
    const count = useAppSelector(state => state.counter.count)
    const fetchProductsList = () => dispatch(fetchProducts());


    const dispatch = useAppDispatch()//для вызова экшенов

    useEffect(() => {
        console.log('render')
        fetchProductsList();
    })

    return (
        <div className="counter">
            <h1 className="counter__title">Счетчик: {count}</h1>
            <button onClick={() => dispatch(increment())}>Добавить 1</button>
            <button onClick={() => dispatch(decrement())}>Удалить 1</button>
        </div>
    )
}