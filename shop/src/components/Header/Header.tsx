import React from "react";

export function Header(props:{message: string}) {

    return (
        <>
        <header>Первый текст</header>
        <h1>{props.message}</h1>
            </>
    )
}