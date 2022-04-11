//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Все товары в корзине
 * @param state
 */
export const basket = (state: RootState) => state.basket.basket;//все товары в корзине

/**
 * Получение cтатуса загрузки
 */
export const getPending = (state: RootState) => state.basket.basketPending

/**
 * Получение ошибки загрузки
 */
export const getBasketError = (state: RootState) => state.basket.basketErrors

/**
 * Проверка по id наличия такого id в корзине
 * @param {state, id}
 * @returns {String}
 */
export const getItemIds = (state: RootState, id:number) => {
    let find = state.basket.itemsIds.find(element => element === id);
    if (find && state.basket.basketPending === id){
        return "..."
    } else if (find && state.basket.basketPending !== id){
        return "В корзине"
    } else {
        return "Добавить в корзину"
    }
}

/**
 * Проверка по id наличия такого товара в корзине в корзине
 * @param {state, id}
 * @returns {Boolean}
 */
export const getItemInBasket = (state:RootState, id:number) => {
    let find = state.basket.basket.find(element => element.id === id)
    if (find){
        return true
    } else {
        return false
    }
}

