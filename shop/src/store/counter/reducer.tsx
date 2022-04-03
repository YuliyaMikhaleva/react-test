import {INCREMENT, DECREMENT} from "./types";
//2. Создадим тут объект, а у него будет свойство count = 0
//это значение приравниваем к state

const initialState = {
    count: 0
}

interface Action {
    type: string
}

//1. создадим редюссер - чистая функция,
// которая вычисляет наше следующее состояние.
export const counterReducer = (state = initialState, action:Action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count+1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count-1
            }
        default:
            return state;//для примера вернем просто state = конкретно сейчас начальное состояние этого редюссера
    }
};