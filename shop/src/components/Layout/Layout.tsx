import React  from "react";
import {Header} from "../Header/Header";
import {SideBar} from "../SideBar/SideBar";
import {Outlet} from "react-router-dom";

export function Layout() {

    return (
        <div>
            <Header/>
            <section className="main">
                <section className="main__menu">
                    <SideBar/>
                    {/*внутри Outlet будут роуты*/}
                    <Outlet/>
                </section>
            </section>
        </div>

    )
}