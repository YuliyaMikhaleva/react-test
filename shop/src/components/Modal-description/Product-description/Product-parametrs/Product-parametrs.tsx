import React from "react";
import "./Product-parametrs.scss"

export function ProductParametrs(props:{params:any}) {

    return (
        <div className="parametrs">
            {Object.values(props.params).map((param:any) => {
                return (
                    <div className="parametrs__line" key={param.value}>
                        <span>{param.caption}</span>
                        <div>
                            <span className="parametrs__value">{param.value}</span>
                            <span className="parametrs__measure">{param.measure}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}