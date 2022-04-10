import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import "./Product-description.scss"
import {useAppSelector} from "../../../hooks/hooks";
import {getDescription} from "../../../store/info/selectors"
import ReactHtmlParser from 'react-html-parser';
import { Buffer } from 'buffer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ProductParametrs} from "./Product-parametrs/Product-parametrs";
import { ProductReviews } from "./Product-reviews/Product-reviews";
import BasicTabs from "./Tabs/BasicTabs";
// global.Buffer = Buffer;

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
export function ProductDescription (props:{product:Product}) {
    const description:[]= useAppSelector(getDescription)
    const [info, setInfo] = useState<InterfaceInfo>({
        description:"",
        parametrs:{},
        reviews: [],
        form_review:""
    })

    const [dataForm, setDataForm] = useState<PropsDataForm>({
        mark:5,
        author: '',
        text:'',
        errors:[],
    })



    let element:(Product|undefined) = useMemo(() => {
        return description.find((el:Product) => el.id === props.product.id)
    },[description])

    useEffect(() => {
        if (element){
            setInfo({
                ...info,
                description:element.descr,
                parametrs:element.props,
                reviews:element.reviews
            })
        }
    },[element])

    const onStepUpdate = (newData:number) => {
        setDataForm({...dataForm, mark: newData})
    }

    const checkForm = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDataForm({...dataForm, errors:[]});
        if (!dataForm.author) {
            setDataForm({...dataForm, errors:[...dataForm.errors, 'authorError']})
        } else
        if (!dataForm.text){
            setDataForm({...dataForm, errors:[...dataForm.errors, 'textError']})
        } else
        setTimeout(() => {
            addNewReview()
        }, 1000)

    }

    const addNewReview = () => {
        const element = {
            author: dataForm.author,
            rate:dataForm.mark,
            avatar: 'https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg',
            text: dataForm.text
        }
        setTimeout(() => {
            setInfo({...info, reviews:{...info.reviews, [Object.keys(info.reviews).length]:element}})
            setDataForm({
                mark:5,
                author: '',
                text:'',
                errors:[],
            })
            // setInfo({...info, reviews})
        }, 500)
    }


    return (
        <div className="modal-product">
            <button className="modal-product__button">
                <img className="modal-product__img" src={props.product.img} alt="img"/>
            </button>
            <h3 className="modal-product__name">{props.product.name}</h3>
            <span className="modal-product__price"><span>{props.product.price}</span> ₽</span>
            <BasicTabs
                info={info}
                dataForm={dataForm}
                onStepUpdate={onStepUpdate}
                checkForm={(e:ChangeEvent<HTMLFormElement>) => checkForm(e)}
                changeName={(author:string) => setDataForm({...dataForm, author:author})}
                changeText={(text:string) => setDataForm({...dataForm, text:text})}
            />
        </div>
    )
}