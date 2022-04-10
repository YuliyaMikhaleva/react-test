import Tabs, { TabPane } from 'rc-tabs';
import React, {ChangeEvent} from 'react';
import ReactHtmlParser from "react-html-parser";
import {Buffer} from "buffer";
import {ProductParametrs} from "../Product-parametrs/Product-parametrs";
import { ProductReviews } from '../Product-reviews/Product-reviews';
import FormReview from "../Form-review/Form-review";
global.Buffer = Buffer;

interface Product{
    id:number,
    descr:string,
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
interface InterfaceInfo {
    description: string,
    parametrs:ProductProps,
    reviews: ProductReviews,
    form_review:string
}
interface PropsDataForm {
    mark:number,
    author:string,
    text:string,
    errors:Array<string>
}
export default function BasicTabs(
    props:{
        info:InterfaceInfo,
        dataForm:PropsDataForm,
        onStepUpdate: (element:number) => void,
        checkForm:(e:ChangeEvent<HTMLFormElement>) => void,
        changeName:(author:string) => void,
        changeText:(text:string) => void,

    }){
    const callback = function(key:string) {};
    return(
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Описание" key="1">
                <div>{ReactHtmlParser(props.info.description)}</div>
            </TabPane>
            <TabPane tab="Характеристики" key="2">
                <ProductParametrs params={props.info.parametrs}/>
            </TabPane>
            <TabPane tab="Отзывы" key="3">
                <ProductReviews reviews={props.info.reviews}/>
            </TabPane>
            <TabPane tab="Оставить отзыв" key="4">
                <FormReview
                    author={props.dataForm.author}
                    text={props.dataForm.text}
                    errors={props.dataForm.errors}
                    mark={props.dataForm.mark}
                    onStepUpdate={props.onStepUpdate}
                    checkForm={props.checkForm}
                    changeName={props.changeName}
                    changeText={props.changeText}
                />
            </TabPane>
        </Tabs>
    )
}
