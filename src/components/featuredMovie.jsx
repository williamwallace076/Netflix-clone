import React from "react";
import "./featuredMovie.css";
import {Link} from "react-router-dom";

export default ({ item }) => {

    let FistYear = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length>200){
        description = description.substring(0,200)+'...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }
        }
        >

            <div className="fade-vertical">
                <div className="fade-orizontal">
                    
                    <div className="info-area">
                        <h2 className="featured-title">{item.name}</h2>
                        <div className="description-area">
                            <span className="info-span green">{item.vote_average.toFixed(2)}</span>
                            <span className="info-span">{(FistYear.getFullYear())}</span>
                            <span className="info-span"> {item.number_of_seasons} {item.number_of_seasons>1?'temporadas':'temporada'}</span>
                            <p className="featured-overwiew">{description}</p>
                           <div className="buttons">
                           <Link to='/Assistir' className="link"> <a className="button watch"> ▶ Assistir</a> </Link>
                           <Link to ='/Mais' className="link"> <a className="button more"> + Mais Informações</a> </Link>
                           </div>
                            
                        </div>
                        <span className="generes-span"><b>Gêneros:</b> {genres.join(', ')} </span>
                        
                    </div>
                </div>
            </div>

        </section>

    )
}