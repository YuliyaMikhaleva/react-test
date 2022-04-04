//здесь инициализируется стор: все модули (в тулкине они называются слайсами
//configureStore заменяет комбайн-редюссерс
import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "./counter/counterSlice";
import {productsSlice} from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        products: productsSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
