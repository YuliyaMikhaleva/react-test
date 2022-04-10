//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Получить описание всех товаров
 * @param state
 */
export const getDescription = (state: RootState) => state.info.description;//Получение описания товаров
