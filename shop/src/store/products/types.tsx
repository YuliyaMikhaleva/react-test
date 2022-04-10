//Здесь указываются типы каждого свойства изначального стейта этого модуля
export interface ProductsInitialState {
    productsList: Product[],
    productsListPending: null | boolean,
}

export interface Product{
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