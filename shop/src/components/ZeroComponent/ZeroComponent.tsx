import React from "react";
import "./ZeroComponent.scss"
import classNames from "classnames";

export function ZeroComponent(props:{className:string}) {
    const classes = classNames(['zero-page', props.className])

    return (
        <section className={classes}>
            <svg className="zero-page__svg" width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.689 79.2C24.246 79.2 19.8421 83.655 19.8421 89.1C19.8421 94.545 24.246 99 29.689 99C35.132 99 39.5853 94.545 39.5853 89.1C39.5853 83.655 35.132 79.2 29.689 79.2ZM79.1706 79.2C73.7276 79.2 69.3238 83.655 69.3238 89.1C69.3238 94.545 73.7276 99 79.1706 99C84.6136 99 89.0669 94.545 89.0669 89.1C89.0669 83.655 84.6136 79.2 79.1706 79.2ZM71.9958 54.45C75.7069 54.45 78.9727 52.4205 80.655 49.3515L98.3695 17.226C100.2 13.959 97.8252 9.9 94.0646 9.9H20.8318L16.1805 0H0V9.9H9.89633L27.7097 47.4705L21.0297 59.5485C17.4175 66.1815 22.1678 74.25 29.689 74.25H89.0669V64.35H29.689L35.132 54.45H71.9958ZM25.5325 19.8H85.6527L71.9958 44.55H37.2597L25.5325 19.8Z" fill="#424242"/>
            </svg>
            <span className="zero-page__txt">В данной категории товаров пока нет</span>
        </section>

    )
}