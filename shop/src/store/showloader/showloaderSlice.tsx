import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./state";

//тут то, что было в редюссере
export const showloaderSlice = createSlice({
    name:'showloader',//название редюссера
    initialState,//добавляем его стейт
    reducers: {
        /**
         * Включить шоу-лоадер
         * @param state
         */
        turnOnShowloader: (state) => {
            state.showloader = true
        },
        /**
         * Выключить шоу-лоадер
         * @param state
         */
        turnOfShowloader: (state) => {
            state.showloader = false
        },

    },
})
export const { turnOnShowloader, turnOfShowloader } = showloaderSlice.actions
export default showloaderSlice.reducer

