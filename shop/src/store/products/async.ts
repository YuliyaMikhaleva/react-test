// здесь мы создаем обертку для запроса;
import {createAsyncThunk} from "@reduxjs/toolkit";

//получение товаров
//Эти функции вызываются в компоненте через useAppDispatch
/**
 * Запрос на получение товаров
 */
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',//название слайса/название экшена
    //вторым параметром функция, в которой делается запрос
    async () => {
        const response = await fetch('http://test1.web-gu.ru/')
        return await response.json()
    }
)