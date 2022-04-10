//Здесь указываются типы каждого свойства изначального стейта этого модуля
export interface BasketInitialState {
    basket: Product[],
    pending: null | boolean | number,
    itemsIds:Array<number>
}

export interface ProductProps {
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

export interface Product {
    id: number,
    parent_id: number,
    name:string,
    price:number,
    img:string,
    props:ProductProps,
    reviews:ProductReviews
}