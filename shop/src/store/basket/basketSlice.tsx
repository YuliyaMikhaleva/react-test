import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./state";
import {BasketInitialState} from "./types";
import {loadOrder} from "./async";
import {useDispatch} from "react-redux";


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
            state.pending = product.payload.id
            const element = Object.assign(product.payload);
            state.basket.push(element);
            state.itemsIds = state.basket.map(el => el.id)
            state.pending = false

        },
        deleteFromCart: (state, product) => {
            const element = Object.assign(product.payload);
            let finObj = state.basket.find((item) => item.id === element.id);
            if (finObj){
                state.basket.splice(state.basket.indexOf(finObj),1)
                state.itemsIds.splice(state.itemsIds.indexOf(finObj.id),1)
            }
        },

    },
    //если нужно сделать какой-то запрос, то создается файл async.ts
    // Редьюсеры, которые обрабатывают side-эффекты в async.ts. Прелесть в том что можно цеплять редьюсеры к статусам
    // fullfilled, pending, rejected и тд. Соотвественно удобно обрабатывать ошибки и загрузки, уже не говоря о том, что можно сделать
    // полностью автоматизированную генерацию всех этих редьюсеров и статусов ошибок, загрузок
    extraReducers: (builder) => {
        builder.addCase(loadOrder.fulfilled, (state: BasketInitialState) => {
            state.basket = [];
        });
    }

})
export const { addToCart, deleteFromCart } = basketSlice.actions
export default basketSlice.reducer
