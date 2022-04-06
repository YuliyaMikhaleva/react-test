//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Все товары
 * @param state
 */
export const basket = (state: RootState) => state.basket.basket;//все товары в корзине
