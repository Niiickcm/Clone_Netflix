import React from 'react';
import './styles.css';

export default ({item}) => {

    //pegando a data de lançamento do filme
    let firstDate = new Date(item.first_air_date);
    let secondaryDate = new Date(item.release_date);
    let a = firstDate.getFullYear()
    let b = secondaryDate.getFullYear()
    console.log("a",a)
    console.log(b)
    let genres = [];
    // pegando o nome do genero que por padrao vem com id
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
        
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className="featured--name">{item.original_name  !== undefined ? item.original_name : item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear() || secondaryDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} {item.number_of_seasons == undefined ? ''  : 'temporada' }{item.number_of_seasons !== 1 && item.number_of_seasons !== undefined ? 's' : ''} </div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}