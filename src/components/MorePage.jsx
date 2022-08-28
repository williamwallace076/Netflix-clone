import React from "react";
import './MorePage.css'
import Header from './Header'
import Footer from './Footer'

export default () =>{
    return(
        <div>
            
    <Header></Header>
    <div className="more">
       <span className="message">Mais Informações Em Breve ! <br /> 😉 </span> 
    </div>
    <Footer></Footer>
        </div>
    )
}