//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";
export const productsList = (state: RootState) => state.products.productsList.sort((prev:any,next:any) => prev.id - next.id);
export const productsListPending = (state: RootState) => state.products.productsListPending;
