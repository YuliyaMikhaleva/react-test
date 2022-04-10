import Tabs, { TabPane } from 'rc-tabs';
import React, {ChangeEvent} from 'react';
import ReactHtmlParser from "react-html-parser";
import {Buffer} from "buffer";
import {ProductParametrs} from "../Product-parametrs/Product-parametrs";
import { ProductReviewsComp } from '../Product-reviews/Product-reviews';
import FormReview from "../Form-review/Form-review";
import {InterfaceInfo} from "../../../../types/Products";
import {PropsDataForm} from "../../../../types/Products";
global.Buffer = Buffer;


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
                {props.info.description && (
                    <div>{ReactHtmlParser(props.info.description)}</div>
                )}
            </TabPane>
            <TabPane tab="Характеристики" key="2">
                <ProductParametrs params={props.info.parametrs}/>
            </TabPane>
            <TabPane tab="Отзывы" key="3">
                <ProductReviewsComp reviews={props.info.reviews}/>
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
