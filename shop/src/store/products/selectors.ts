//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Все товары в каталоге
 * @param state
 */
export const productsList = (state: RootState) => state.products.productsList;

/**
 * Группы товаров, указанные в верхнем/боковом меню
 * @param state
 * @param id
 */
export const getGroups = (state: RootState, id:number) => state.products.productsList.filter((item) => item.parent_id === id).map((el) => el.name);

/**
 * Группы товаров сфильтрованные по id
 * @param state
 * @param id
 */
export const getGroupsObjects = (state: RootState, id:number) => state.products.productsList.filter((item) => item.parent_id === id);


/**
 * Вывод статуса загразуки товаров
 * @param state
 */
export const productsPending = (state: RootState) => state.products.productsListPending

/**
 * Вывод ошибки запроса на загрузку товаров
 * @param state
 */
export const productsError= (state: RootState) => state.products.productsListErrors
