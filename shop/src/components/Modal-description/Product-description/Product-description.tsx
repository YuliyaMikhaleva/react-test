import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import "./Product-description.scss"
import {useAppSelector} from "../../../hooks/hooks";
import {getDescription} from "../../../store/info/selectors"
import 'react-tabs/style/react-tabs.css';
import BasicTabs from "./Tabs/BasicTabs";
import {Product} from "../../../types/Products";
import {InterfaceInfo} from "../../../types/Products";
import {PropsDataForm} from "../../../types/Products";

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

    // const dispatch = useAppDispatch()

    // const addLoader = () => dispatch(turnOnShowloader())

    const checkForm = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDataForm({...dataForm, errors:[]});
        if (!dataForm.author) {
            setDataForm({...dataForm, errors:[...dataForm.errors, 'authorError']})
        } else
        if (!dataForm.text){
            setDataForm({...dataForm, errors:[...dataForm.errors, 'textError']})
        } else
        // addLoader()
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