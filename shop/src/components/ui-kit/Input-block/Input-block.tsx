import React, {ChangeEvent, useState} from "react";
import "./Input-block.scss"
import classNames from "classnames";
import {ModalError} from "../../Modal-basket/Modal-Error/Modal-error";

interface inputType{
    value:string,
    className:string,
    label:string,
    errors:Array<any>,
    error:string,
    changeData:(value:string)=>void
}


export function InputBlock(props:inputType) {
    const classes = ['input-block', props.className]

    return (
        <div className={classNames(classes)}>
            <label htmlFor={props.value} className="input-block__label">{props.label}</label>
            <input id={props.value} className="input-block__input" type="text" onInput={(e:ChangeEvent<HTMLInputElement>) => props.changeData(e.target.value)}/>
            <ModalError errors={props.errors} element={props.value}/>
        </div>

    )
}