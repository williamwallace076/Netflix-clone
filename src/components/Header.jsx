import React from "react";
import "./Header.css"
import netflixlogo from "../assets/imgs/Netflix-logo.png"
import iconeLupa from "../assets/imgs/icone-lupa.png"
import iconeNotificacao from "../assets/imgs/notification-icon.png"
import userImg1 from "../assets/imgs/user1.jpg"
import {Link} from "react-router-dom"

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>

            <Link to='/inicio'><a href="">
                
                <img className="logo-netflix" src={netflixlogo} alt="logo netflix" />
                </a>
                </Link>
            <div className="nav-principal">
                <ul className="opcoes-botoes">
                <Link to='/inicio'> <a href="">  <li className="botao-opcao destaque">Início</li></a></Link>
                    <Link to='/inicio'> <a href=""> <li className="botao-opcao">Séries</li></a></Link>
                    <Link to='/'> <a href=""> <li className="botao-opcao">Filmes</li></a></Link>
                    <Link to='/'> <a href=""> <li className="botao-opcao">Bombando</li></a></Link>
                    <Link to='/'> <a href=""> <li className="botao-opcao">Minha lista</li></a></Link>
                    <Link to='/'> <a href=""> <li className="botao-opcao">Navegar por Indiomas</li></a></Link>
                </ul>
            </div>

            <div className="nav-secundaria">

            <Link to='/'> <a href="">  <img className="icone-lupa" src={iconeLupa} alt="" /> </a></Link>
                <a className="modo-infantil" href="https://www.netflix.com/kids">Infantil</a>
                <img className="icone-notificacao" src={iconeNotificacao} alt="icone de notificação" />
            </div>
            <div className="menu-users">
                <img className="logo-user1" src={userImg1} alt="" />
                <ul className="menu-dropdown">
                    <li>
                        <div className="lista-perfis">
                            <ul>
                                <li className="perfil">User 2</li>
                                <li className="perfil">User 3</li>
                                <li className="perfil">User 4</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </header>
    )
}