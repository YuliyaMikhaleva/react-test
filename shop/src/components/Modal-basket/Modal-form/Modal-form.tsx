import React, {ChangeEvent, SetStateAction, useCallback, useEffect, useMemo, useState} from "react";
import "./Modal-form.scss"
import {Button} from "../../ui-kit/Button/Button";
import {InputBlock} from "../../ui-kit/Input-block/Input-block";
import {useAppDispatch} from "../../../hooks/hooks";
import {loadOrder} from "../../../store/basket/async";

interface show{
    setShowParams:(el:boolean) => void
    setShowResultOrder:(el:boolean) => void
}

export function ModalForm(props:show) {
    const [errors, setErrors] = useState<Array<string>>([])
    const [data, setData] = useState({
        name:"",
        phone:"",
        address:""
    })
    const dispatch = useAppDispatch()

    const checkForm =  (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors([]);
        if(!data.name){
             setErrors(prevState => [...prevState, 'nameError']);
        } else
        if (!data.phone) {
             setErrors(prevState => [...prevState, 'phoneError']);
        } else
        if (!validPhone(data.phone)) {
            setErrors(prevState => [...prevState, 'phoneError']);
        } else
        if (!data.address) {
             setErrors(prevState => [...prevState, 'addressError'])
        } else doOrder()
    }

    /**
     * Проверка правильности ввода номера телефона телефона
     * @param phone - номер телефона типа +7(950)45-84-345
     * @returns {boolean}
     */
    const validPhone = (phone:string) => {
        let re = /^\+?[78]\(?\d{3}\)?\d{2}-?\d{2}-?\d{3}$/;
        return re.test(phone);
    }

    //создание заказа
    const doOrder = () => {
        props.setShowParams(false);
        props.setShowResultOrder(true)
        const order = () => dispatch(loadOrder())
        order()
        setTimeout(() => {
            props.setShowResultOrder(true)
        }, 2000)
    }

    return (
        <form className="form" onSubmit={checkForm}>
            <div className="form__wrp">
                <InputBlock
                    value={data.name}
                    errors={errors}
                    label="Имя"
                    error="nameError"
                    className="form__block-item"
                    changeData={(value:string) => setData({...data, name: value})}/>
                <InputBlock
                    value={data.phone}
                    errors={errors}
                    label="Телефон"
                    error="phoneError"
                    className="form__block"
                    changeData={(value:string) => setData({...data, phone: value})}/>
            </div>
            <InputBlock
                value={data.address}
                errors={errors}
                label="Полный адрес"
                error="addressError"
                className="form__block"
                changeData={(value:string) => setData({...data, address: value})}/>
            <Button type="submit" className="form__button" title="Заказать"/>
        </form>

    )
}