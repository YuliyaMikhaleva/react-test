//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Все товары
 * @param state
 */
export const productsList = (state: RootState) => state.products.productsList;//все товары

export const productsListPending = (state: RootState) => state.products.productsListPending;
