import React from "react"
import "./Loader.scss"

export function Loader () {
    return (
       <div className="loader">
               <div className="preloader">
                   <div className="spinner-border" role="status">
                       <span className="visually-hidden"></span>
                   </div>
                   <p></p>
               </div>
       </div>
    )
}