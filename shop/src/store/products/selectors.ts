//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Все товары
 * @param state
 */
export const productsList = (state: RootState) => state.products.productsList;//все товары

//группы товаров, указанные в верхнем/боковом меню
export const getGroups = (state: RootState, id:number) => state.products.productsList.filter((item) => item.parent_id === id).map((el) => el.name);

export const getGroupsObjects = (state: RootState, id:number) => state.products.productsList.filter((item) => item.parent_id === id);

export const productsListPending = (state: RootState) => state.products.productsListPending;


export const basket = (state: RootState) => state.basket.basket;//все товары в корзине