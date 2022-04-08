// здесь мы создаем обертку для запроса;
import {createAsyncThunk} from "@reduxjs/toolkit";

//Здесь указываются типы каждого свойства изначального стейта этого модуля
interface Product{
    id:number,
    img:string,
    name:string,
    parent_id:number,
    price:number,
    props: ProductProps,
    reviews:ProductReviews
}
interface ProductProps {
    [key: string]: {
        caption: string,
        measure:string,
        value:number
    }
}
interface ProductReviews {
    [key: number]: {
        author: string,
        avatar:string,
        rate:number,
        text:string
    }
}

//Эти функции вызываются в компоненте через useAppDispatch
export const loadDescription = createAsyncThunk(
    'info/loadDescription',//название слайса/название экшена
    //вторым параметром функция, в которой делается запрос
    () => {
        return fetch('http://test1.web-gu.ru/')
            .then(response => response.json())
            .then(data => {
                /**
                 * Массив объектов с откзывами
                 */
                let array = data.filter((el:Product) => {
                    return el.reviews
                })
                let newArray = array.map((element:Product) => Object.assign({
                    id: element.id,
                    data: element.props,
                    reviews:element.reviews
                }))
                return newArray
            })
            .then( async function(newArray) {
                let arrayDescription:any = [];
                await newArray.map((element:Product) => {
                    fetch(`http://test1.web-gu.ru/?action=show_product&id=${element.id}`)
                        .then(response => {
                                return response.json()
                            }
                        )
                        .then((data) => {
                            arrayDescription.push(data);
                            return arrayDescription
                        })
                });
            })

    }
)