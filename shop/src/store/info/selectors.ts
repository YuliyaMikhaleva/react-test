//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Все товары
 * @param state
 */
export const getDescription = (state: RootState) => state.info.description;//Получение описания товаров
