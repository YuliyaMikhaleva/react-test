//Здесь указываются типы каждого свойства изначального стейта этого модуля
export interface ProductsInitialState {
    productsList: Product[],
    productsListPending: null | boolean,
}

export interface ProductProps {
    [key: string]: {
       caption: string,
       measure:string,
       value:number
    }
}

export interface Product {
    id: number,
    parent_id: number,
    name:string,
    price?:number,
    img?:string,
    props?:ProductProps


}