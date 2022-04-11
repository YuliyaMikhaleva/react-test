//Здесь само состояние этого модуля

import {BasketInitialState} from "./types"

export const initialState: BasketInitialState = {
    basket:[],
    basketPending: null,
    basketErrors:null,
    itemsIds:[],//id товаров в корзине
}