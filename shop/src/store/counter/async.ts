// здесь мы создаем обертку для запроса;
import {createAsyncThunk} from "@reduxjs/toolkit";

// get-запрос http://test1.web-gu.ru/
//получение
export const fetchCounter = createAsyncThunk(
    'counter/fetchCounter',//название слайса/название экшена
    //вторым параметром функция, в которой делается запрос
    () => {
        let array = fetch('http://test1.web-gu.ru/')
            .then(response => response.json())
            .then(result => {
                result.sort((prev:any,next:any) => prev.id - next.id)
            })
        console.log(array)
        return array

    }
    // async () => {
    //     const response = TodoApi.list();
    //     response.data();
    // }
)