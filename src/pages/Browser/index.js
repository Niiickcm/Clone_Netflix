import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet'

import './styles.css'
import Tmdb from '../../services/Tmdb';


import MovieRow from '../../componets/MovieRow';
import FeaturedMovie from '../../componets/FeaturedMovie'
import Header from '../../componets/Header'
import Footer from '../../componets/Footer'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () =>{
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // filtrando os filmes originais da api
      let originals = list.filter(i=>i.slug === 'originals');
      // pega um valor aleatorio
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      //busca dentro dos results (que e o array com o numero de cada filme), com o numero do randomChosen
      let chosen = originals[0].items.results[randomChosen]; 
      // pega as informaçoes do filmes consultado a funçao do tmdb
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
     
      setFeaturedData(chosenInfo)
   
    }
    
    loadAll();
  }, []);
  

  useEffect(() =>{
    const scrollListener = () => {
        if(window.scrollY > 10){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="page">

      <Helmet title="Netflix" />

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      
      
      <section className="lists" maxlength="5">
        {movieList.map((item,key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />
      
        {movieList.length <= 0 &&
          <div className="loading">
            <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Carregando" />
          </div>
        }
    </div>

   
  );
}