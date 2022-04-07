// здесь мы создаем обертку для запроса;
import {createAsyncThunk} from "@reduxjs/toolkit";

//получение товаров
//Эти функции вызываются в компоненте через useAppDispatch
export const loadOrder = createAsyncThunk(
    'basket/loadOrder',//название слайса/название экшена
    //вторым параметром функция, в которой делается запрос
    async () => {
        const response = await fetch('http://test1.web-gu.ru/?action=send_form')
        return await response.json()
    }
)