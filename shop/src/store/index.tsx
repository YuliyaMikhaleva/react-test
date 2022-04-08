//здесь инициализируется стор: все модули (в тулкине они называются слайсами
//configureStore заменяет комбайн-редюссерс
import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "./counter/counterSlice";
import {productsSlice} from "./products/productsSlice";
import {basketSlice} from "./basket/basketSlice";
import {infoSlice} from "./info/infoSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        products: productsSlice.reducer,
        basket:basketSlice.reducer,
        info:infoSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
