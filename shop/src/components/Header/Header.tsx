import React from "react";
import "./Header.scss"
import {HeaderMenu} from "./Header-menu/Header-menu";

export function Header() {

    return (
        <header>
            <div className="header">
                <div className="header__wrp">
                    <div className="header__block">
                        <span>shop</span>
                        <a href="/">
                            <svg className="header__block-svg" width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.11619 24.9343L12.6683 31.7625L35.7723 18.2497L34.7878 17.6129L13.0278 30.3398L12.5833 30.5993L12.1584 30.2957L3.96602 24.4374L3.11619 24.9343ZM22.996 14.9792L22.3443 14.3995C22.0256 14.7013 21.7265 14.9093 21.4485 15.0271C21.1705 15.1449 20.8482 15.1761 20.4906 15.1228C20.1294 15.0676 19.7717 14.9019 19.4123 14.6277L19.8444 13.8381C20.2392 14.0976 20.5721 14.2357 20.8447 14.2485C21.2342 14.2651 21.5494 14.1528 21.7955 13.9117L19.7541 12.0934C19.4549 12.3105 19.1096 12.4927 18.713 12.6418C18.4209 12.7559 18.1252 12.778 17.8242 12.7118C17.5232 12.6455 17.2434 12.4964 16.9814 12.2664C16.5192 11.8541 16.2838 11.3498 16.2785 10.7553C16.2732 10.3559 16.4325 9.91239 16.7583 9.4265L16.4467 9.15044L16.776 8.75104L17.0876 9.02713C17.4452 8.66823 17.8135 8.4584 18.1889 8.39399C18.6669 8.31116 19.1379 8.42343 19.6 8.73079L19.1344 9.51485C18.844 9.32528 18.5767 9.23142 18.3359 9.23694C18.0933 9.23878 17.8596 9.33263 17.6347 9.513L19.5098 11.1805C19.8727 10.9155 20.1223 10.7498 20.2604 10.6799C20.5207 10.5492 20.7703 10.4756 21.0076 10.4572C21.2448 10.4369 21.4804 10.47 21.7141 10.5547C21.9478 10.6412 22.1673 10.7756 22.3727 10.9559C22.8224 11.3571 23.0738 11.8394 23.1323 12.4062C23.1889 12.9713 23.0314 13.4976 22.6649 13.989L23.3235 14.5762L22.996 14.9792ZM17.2983 9.91055C17.1213 10.2069 17.0504 10.5032 17.0929 10.7995C17.1318 11.0977 17.2646 11.3443 17.4895 11.5449C17.7108 11.7418 17.9499 11.8449 18.203 11.8486C18.4598 11.8522 18.752 11.7363 19.0813 11.497L17.2983 9.91055ZM22.1266 13.5124C22.3107 13.2216 22.3816 12.9068 22.332 12.5682C22.2878 12.2314 22.1249 11.9369 21.8486 11.6903C21.6114 11.4805 21.3724 11.3719 21.1298 11.3664C20.8872 11.3608 20.5702 11.4989 20.1825 11.7823L22.1266 13.5124ZM19.1255 6.07132C20.1082 6.13021 21.1298 6.40997 22.1036 6.92899C23.6475 7.75352 24.7895 9.03447 25.3862 10.4369C25.9988 11.878 26.0413 13.4516 25.372 14.8173L35.7705 8.73447L25.7155 2.22288L19.1255 6.07132ZM20.719 17.5393L12.6665 22.2491L3.11446 15.4209L13.851 9.15044C13.3553 10.4277 13.4403 11.8504 13.9998 13.1645C14.5947 14.567 15.7349 15.8461 17.2806 16.6724C18.4067 17.2724 19.5965 17.5522 20.719 17.5393ZM17.6985 7.44982C16.5671 7.69276 15.6163 8.34798 15.1187 9.35472C14.623 10.3596 14.6637 11.543 15.1329 12.6455C15.6198 13.7921 16.5653 14.843 17.8489 15.5295C19.1343 16.2178 20.5066 16.4037 21.6875 16.1479C22.8207 15.905 23.7696 15.2498 24.2672 14.243C24.7629 13.2381 24.7223 12.0547 24.2548 10.9522C23.7679 9.80747 22.8225 8.75472 21.5388 8.06822C20.2516 7.38172 18.8794 7.19584 17.6985 7.44982ZM12.1567 23.9607L12.5816 24.2644L13.0259 24.0031L34.8958 11.2118L35.7705 11.7786L12.6665 25.2914L3.11446 18.4614L3.85979 18.0271L12.1567 23.9607ZM2.34773 16.9467L1.09244 16.0485L0.00529523 15.2718L1.15793 14.5982L25.333 0.481791L25.758 0.233337L26.1705 0.50204L37.8189 8.04797L39 8.81361L37.7853 9.52221L36.53 10.2566L37.8189 11.0903L39 11.8559L37.7853 12.5645L36.3282 13.4185L37.8189 14.3847L39 15.1504L37.7853 15.8608L36.4202 16.6596L37.8172 17.5651L38.9982 18.3307L37.7836 19.0393L13.0225 33.522L12.578 33.7833L12.1531 33.4797L1.08887 25.5693L0.00183712 24.7908L1.15447 24.119L2.44694 23.3626L1.08714 22.3908L0 21.6123L1.15263 20.9405L2.53544 20.1325L1.08714 19.0964L0 18.3197L1.15263 17.6461L2.34773 16.9467ZM34.6922 14.3737L35.7687 15.0712L12.6648 28.584L3.11262 21.7559L4.05107 21.2092L12.1531 27.003L12.578 27.3067L13.0225 27.0454L34.6922 14.3737Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <div className="header__block">
                        <HeaderMenu/>
                        <button className="header__button-basket">
                            <svg className="header__button-svg" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.29766 16.8C5.14309 16.8 4.20894 17.745 4.20894 18.9C4.20894 20.055 5.14309 21 6.29766 21C7.45223 21 8.39688 20.055 8.39688 18.9C8.39688 17.745 7.45223 16.8 6.29766 16.8ZM16.7938 16.8C15.6392 16.8 14.705 17.745 14.705 18.9C14.705 20.055 15.6392 21 16.7938 21C17.9483 21 18.893 20.055 18.893 18.9C18.893 17.745 17.9483 16.8 16.7938 16.8ZM15.2718 11.55C16.059 11.55 16.7518 11.1195 17.1086 10.4685L20.8663 3.654C21.2546 2.961 20.7508 2.1 19.9531 2.1H4.41886L3.43223 0H0V2.1H2.09922L5.87782 10.0695L4.46084 12.6315C3.69463 14.0385 4.70225 15.75 6.29766 15.75H18.893V13.65H6.29766L7.45223 11.55H15.2718ZM5.41599 4.2H18.1688L15.2718 9.45H7.90356L5.41599 4.2Z" fill="#424242"/>
                            </svg>
                            <div className="header__ellipse-counter"></div>
                            <span className="header__counter">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}