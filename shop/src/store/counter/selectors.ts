//здесь указываются типо геттеры, их мы вызываем в компоненте через useAppSelector
import {RootState} from "../index";
export const selectCount = (state: RootState) => state.counter.count;