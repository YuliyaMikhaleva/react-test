export interface Product{
    id:number,
    img:string,
    name:string,
    descr?:string,
    parent_id:number,
    price:number,
    props: ProductProps,
    reviews:ProductReviews
}
export interface ProductProps {
    [key: string]: {
        caption: string,
        measure:string,
        value:number
    }
}
export interface ProductReviews {
    [key: number]: {
        author: string,
        avatar:string,
        rate:number,
        text:string
    }
}
export interface Error{
    errors:Array<string>,
    element:string,
}

//входящие параметры в форму
export interface Show{
    setShowParams:(el:boolean) => void
    setShowResultOrder:(el:boolean) => void
}

export interface PropsReviewObj {
    author:string,
    avatar:string,
    rate:number,
    text:string
}

export interface InterfaceInfo {
    description?: string | undefined,
    parametrs:ProductProps,
    reviews: ProductReviews,
    form_review:string
}
export interface PropsDataForm {
    mark:number,
    author:string,
    text:string,
    errors:Array<string>
}
export interface PropsDataForm {
    mark:number,
    author:string,
    text:string,
    errors:Array<string>
}