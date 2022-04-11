//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";

/**
 * Получить описание всех товаров
 * @param state
 */
export const getDescription = (state: RootState) => state.info.description;//Получение описания товаров

/**
 * Получение статуса загрузки информации
 * @param state
 */
export const getInfoPending = (state: RootState) => state.info.infoPending;

/**
 * Получение ошибки загрузки информации
 * @param state
 */
export const getInfoError = (state: RootState) => state.info.infoErrors;