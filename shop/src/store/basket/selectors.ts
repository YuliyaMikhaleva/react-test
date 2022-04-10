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
export const getPending = (state: RootState) => state.basket.pending

/**
 * Проверка по id наличия такого id в корзине
 * @param {state, id}
 * @returns {String}
 */
export const getItemIds = (state: RootState, id:number) => {
    let find = state.basket.itemsIds.find(element => element === id);
    if (find && state.basket.pending === id){
        return "..."
    } else if (find && state.basket.pending !== id){
        return "В корзине"
    } else {
        return "Добавить в корзину"
    }
}