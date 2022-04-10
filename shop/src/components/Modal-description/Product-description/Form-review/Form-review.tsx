import React, {ChangeEvent, useEffect, useState} from 'react';
import {InputBlock} from "../../../ui-kit/Input-block/Input-block";
import {ModalError} from "../../../Modal-basket/Modal-Error/Modal-error";
import {Button} from "../../../ui-kit/Button/Button";
import "./Form-review.scss"
import classNames from "classnames";

interface PropsFormReview {
    author:string,
    text:string,
    errors:string[],
    mark:{},
    onStepUpdate:{},
    checkForm:(e:ChangeEvent<HTMLFormElement>) => void,
    changeName:(author:string) => void,
    changeText:(text:string) => void
}

export default function FormReview(props: PropsFormReview & JSX.IntrinsicAttributes){

    const [data, setData] = useState({
        name:"",
        review:""
    })

    useEffect(() => {
        props.changeName(data.name)
    }, [data.name])

    useEffect(() => {
        props.changeText(data.review)
    }, [data.review])

    const submitFunc =  (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
         props.checkForm(e);
         setData({name:"", review: ""})
    }

    const classes = ['form-review__textArea', {'form-review__error' : props.errors.indexOf('nameError')}]

    return(
        <form className="form-review" onSubmit={submitFunc}>
            <span className="form-review__mark">Оценка</span>

            <InputBlock
                value={data.name}
                className="form-review__input"
                label="Имя"
                errors={props.errors}
                error="nameError"
                changeData={((value:string) => setData({...data, name:value}))
                }
            />
            <label className="form-review__label">Отзыв</label>
            <textarea className={classNames(classes)} name="review" id="review" onChange={(event:ChangeEvent<HTMLTextAreaElement>):void => setData({...data, review: event.target.value})}></textarea>
            {props.text === "" && (
                <ModalError errors={props.errors} element={data.review}/>

            )}
            <Button title="Отправить отзыв" type="submit"/>
        </form>
    )
}
