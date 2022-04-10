//Здесь само состояние этого модуля

import {BasketInitialState} from "./types"

export const initialState: BasketInitialState = {
    basket:[],
    pending: null,
    itemsIds:[],//id товаров в корзине
}