import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./state";
// import {loadToCard} from "./async";
import {BasketInitialState} from "./types";
import {counterSlice} from "../counter/counterSlice";


//тут то, что было в редюссере
export const basketSlice = createSlice({
    name:'basket',//название редюссера
    initialState,//добавляем его стейт
    reducers: {
    // Обычные редюссеры, видимо для экшенов без side-эффектов
    // Автоматом создается экшен одноименный с редюссером
    // их надо заполнять, если не надо никаких запросов к серверу делать
    // что-то типо мутаторов
        // Эти экшены вызываются через useAppDispatch
        addToCart: (state, product) => {
            const element = Object.assign(product.payload);
            state.basket.push(element);
        },
    },
    //если нужно сделать какой-то запрос, то создается файл async.ts
    // Редьюсеры, которые обрабатывают side-эффекты в async.ts. Прелесть в том что можно цеплять редьюсеры к статусам
    // fullfilled, pending, rejected и тд. Соотвественно удобно обрабатывать ошибки и загрузки, уже не говоря о том, что можно сделать
    // полностью автоматизированную генерацию всех этих редьюсеров и статусов ошибок, загрузок
    // extraReducers: (builder) => {
    //     builder.addCase(loadToCard.fulfilled, (state: BasketInitialState, action: PayloadAction<[]>) => {
    //         state.basket = action.payload;
    //     });
    // }

})
export const { addToCart } = basketSlice.actions
export default basketSlice.reducer
