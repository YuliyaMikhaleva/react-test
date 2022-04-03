import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {increment} from "../../store/counter";
import {decrement} from "../../store/counter";

export function Counter() {
    //Первый дженерик тип - тип всего нашего объекта(Указали в store/index.tsx)
    //Второй дженерие тип - тип возвращаемого значения
    const count = useSelector<RootState, number>(state => state.counter.count)

    const dispatch = useDispatch()//для вызова экшенов

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={() => dispatch(increment())}>Добавить 1</button>
            <button onClick={() => dispatch(decrement())}>Удалить 1</button>
        </div>
    )
}