import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import FeaturedMovie from './featuredMovie';
import tmdb from '../Tmdb';
import Main from './Main';
import './Home.css';


export default () => {
const [movieList, setMovieList] = useState([]);
const [featuredData, setFeaturedData] = useState(null);
const [blackHeader, setBlackHeader] = useState(false);

useEffect(() => {
    const loadAll = async () => {
        //pegando toda a lista
        let list = await tmdb.getHomeList();
        setMovieList(list);

        //pegando o featured
        let originals = list.filter(i => i.slug === "originals")
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        let chosen = originals[0].items.results[randomChosen]
        let choseInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
        console.log(choseInfo)
        setFeaturedData(choseInfo)

    }

    loadAll();
}, []);


useEffect(() => {
    const scrollListener = () => {
        if (window.scrollY > 10) {
            setBlackHeader(true);
        } else {
            setBlackHeader(false)
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
        window.removeEventListener('scroll', scrollListener);
    }
}, []);

    return(
    <div className='App'>

        <Header black={blackHeader} />

        {
            featuredData &&
            <FeaturedMovie item={featuredData} />
        }

        <section className='lists'>
            {
                movieList.map((item, key) => (
                    <Main key={key} title={item.title} items={item.items} />
                    ))
                }
        </section>

        {
            movieList.length <= 0 &&
            <div className='loading'>

                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt='Carregando' />

            </div>
        }
    <Footer></Footer>

    </div>
    )
}