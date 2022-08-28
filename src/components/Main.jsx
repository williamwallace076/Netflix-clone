import React from "react";
import Lista from "./lista";
import './Main.css'

export default ({title, items}) =>{
    return (
        <div className="princ">
            <Lista titulo = {title} items = {items}></Lista>
        </div>
    )
}