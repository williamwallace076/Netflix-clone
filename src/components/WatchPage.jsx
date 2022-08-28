import './WatchPage.css';
import loading from "../assets/imgs/Netflix-LoadTime-unscreen.gif"


export default () =>{

    return(
        <div className="watch-page" >

        <div className="player">
            <img src={loading} alt="Carregando" />
        </div>
    </div>
    )
}