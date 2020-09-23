import React from 'react';
import '../Header/style.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { blue } from '@material-ui/core/colors';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <Link to="/browse">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix"/>
                </Link>
            </div>
            <div className="header--menu">
                <ul>
                    <li>
                        <Link to="/browse">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/series">Séries</Link>
                    </li>
                    <li>
                        <Link to="/movies">Filmes</Link>
                    </li>
                    <li>
                        <Link>Mais recentes</Link>
                    </li>
                    <li>
                        <Link>Minha lista</Link>
                    </li>
                </ul>
                <div className="header-menu-secondary">
                    <div className="header--pesq">
                        <input className="header-busca" placeholder="Titulos, gente e gêneros" />
                    </div>
                    <div className="header--gift">
                        <a href="">
                            <CardGiftcardIcon  style={{ fontSize: 30, color: blue[50] }} />
                        </a>
                    </div>
                    <div className="header--bell">
                        <a href="">
                            <NotificationsIcon  style={{ fontSize: 30, color: blue[50] }}/>
                        </a>
                    </div>
                    <div className="header--user">
                        <a href="">
                            <img src="https://occ-0-1069-1567.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcqBskTCn3DkGQQb75keSWbkb7UvDc5R_1jJvJuDyp6GgGN_TeMbo_kPwlwmE0gwOmeTh2hNyKhotFROEYtkelSkKYmL.png?r=fcc" />
                        </a>
                    </div>
                </div>
            </div>
            
        </header>
    );
}