import React, {useState} from "react";
import './lista.css'
import {Link} from "react-router-dom";

export default props => {
    
    const [scrollX, setScrollX] = useState(-400);

    const dragLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth/2);
    if(x>0){
        x=0;
    }
    setScrollX(x)
    }

    const dragRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = props.items.results.length*108;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW);
        }
        setScrollX(x);
        
    }

    return (
        <div className="princ-list">
            <div className="lista-container">


                <h2 className="title-list">{props.titulo}</h2>

                <div className="setas">
                    <div className="seta-left" onClick={dragLeftArrow}>←</div>
                    <div className="seta-right" onClick={dragRightArrow}>→</div>
                </div>
                <div className="itens-container" style={{
                    marginLeft: scrollX,
                    width: props.items.results.length * 150
                }} >

                    {props.items.results.length > 0 && props.items.results.map((item, key) => (
                       
                       <Link to = "/Assistir"><a key={key} >
                            <img key={key} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.original_title} />
                            <div className="description">
                                <span> {item.name ? item.name : item.title}
                                </span>
                                <span> {`IMDB - ${item.vote_average}`} </span>
                            </div>
                        </a></Link> 
                    ))}
                </div>


            </div>
        </div>
    )
}