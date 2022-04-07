import React, {ChangeEvent, useState} from "react";
import "./Modal-form.scss"
import {Button} from "../../ui-kit/Button/Button";
import {InputBlock} from "../../ui-kit/Input-block/Input-block";
import {useAppDispatch} from "../../../hooks/hooks";
import {loadOrder} from "../../../store/basket/async";


export function ModalForm() {
    const [errors, setErrors] = useState<Array<string>>([])
    const [data, setData] = useState({
        name:"",
        phone:"",
        address:""
    })
    const dispatch = useAppDispatch()

    const checkForm = async () => {
        await setErrors([]);
        if(data.name === ""){
            await setErrors([...errors, 'nameError'])
        }
        if (!data.phone) {
            setErrors([...errors, 'phoneError'])
        }
        if (!data.phone) {
            setErrors([...errors, 'phoneError'])
        }
        await console.log(errors)

        // setTimeout(async () => {
        //     console.log(errors.length)
        //
        // }, 1000)
        // if (!errors.length){
        //     const order = () => dispatch(loadOrder())
        //     order()
        // }
    }

    return (
        <div className="form">
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
            <Button className="form__button" title="Заказать" add={checkForm}/>
        </div>

    )
}