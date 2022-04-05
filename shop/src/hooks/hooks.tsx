import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import {getGroups} from "../store/products/selectors";


//Используйте во всем приложении вместо простых `useDispatch` и `useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

//хук для получения массива кнопок
export const useButtons = (id:number) => useAppSelector(state=> getGroups(state, id))