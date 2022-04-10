import React from "react";
import "./Modal-error.scss"
import {Error} from "../../../types/Products";

export function ModalError(props:Error) {
    return (
        <div>
            {props.errors.length ? (
                <div>
                    {!props.element && (
                        <span className="error">Поле не должно быть пустым</span>
                    )}
                </div>
            ) : <div></div>}
        </div>
    )
}