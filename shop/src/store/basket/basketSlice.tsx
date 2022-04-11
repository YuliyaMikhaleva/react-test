import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./state";
import {BasketInitialState} from "./types";
import {loadOrder} from "./async";


export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        addToCart: (state, product) => {
            state.basketPending = product.payload.id
            const element = Object.assign(product.payload);
            state.basket.push(element);
            state.itemsIds = state.basket.map(el => el.id)
        },
        deleteFromCart: (state, product) => {
            const element = Object.assign(product.payload);
            let finObj = state.basket.find((item) => item.id === element.id);
            if (finObj){
                state.basket.splice(state.basket.indexOf(finObj),1)
                state.itemsIds.splice(state.itemsIds.indexOf(finObj.id),1)
            }
        },
        /**
         * Удалить статуc загрузки
         * @param state
         */
        deleteBasketPending: (state) => {
            state.basketPending = false
        },
    },
    //если нужно сделать какой-то запрос, то создается файл async.ts
    // Редьюсеры, которые обрабатывают side-эффекты в async.ts. Прелесть в том что можно цеплять редьюсеры к статусам
    // fullfilled, pending, rejected и тд. Соотвественно удобно обрабатывать ошибки и загрузки, уже не говоря о том, что можно сделать
    // полностью автоматизированную генерацию всех этих редьюсеров и статусов ошибок, загрузок
    extraReducers: (builder) => {
        builder.addCase(loadOrder.pending, (state: BasketInitialState) => {
            state.basketPending = true
        });
        builder.addCase(loadOrder.fulfilled, (state: BasketInitialState) => {
            state.basket = [];
            state.basketPending = false
        });
        builder.addCase(loadOrder.rejected, (state: BasketInitialState) => {
            state.basket = [];
            state.basketPending = false
        });
    }

})
export const { addToCart, deleteFromCart, deleteBasketPending } = basketSlice.actions
export default basketSlice.reducer
