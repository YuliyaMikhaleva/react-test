import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./state";
import {fetchProducts} from "./async";
import {ProductsInitialState} from "./types";

//тут то, что было в редюссере
export const productsSlice = createSlice({
    name:'products',//название редюссера
    initialState,//добавляем его стейт
    reducers: {
    // Обычные редюссеры, видимо для экшенов без side-эффектов
    // Автоматом создается экшен одноименный с редюссером
    // их надо заполнять, если не надо никаких запросов к серверу делать
    // что-то типо мутаторов
    },
    //если нужно сделать какой-то запрос, то создается файл async.ts
    // Редьюсеры, которые обрабатывают side-эффекты в async.ts. Прелесть в том что можно цеплять редьюсеры к статусам
    // fullfilled, pending, rejected и тд. Соотвественно удобно обрабатывать ошибки и загрузки, уже не говоря о том, что можно сделать
    // полностью автоматизированную генерацию всех этих редьюсеров и статусов ошибок, загрузок
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state: ProductsInitialState, action: PayloadAction<[]>) => {
            state.productsList = action.payload;
        });
    }

})

export default productsSlice.reducer