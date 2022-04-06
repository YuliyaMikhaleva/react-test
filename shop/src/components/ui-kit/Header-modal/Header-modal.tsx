import React, {useState} from "react";
import "./HeaderModal.scss"

export function HeaderModal(props:{title:string}) {

    const closeBasketModal = () => {
        let basketModal = document.querySelector('.header__modal-basket-open');
        if (basketModal){
            basketModal.classList.remove('header__modal-basket-open')
        }
    }

    return (
        <header className="header-modal">
            <h5 className="header-modal__title">{props.title}</h5>
            <button className="header-modal__btn" onClick={closeBasketModal}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z" fill="black"/>
                </svg>
            </button>
        </header>

    )
}