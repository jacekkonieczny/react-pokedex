import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="page-header">
            <div className="empty"/>
            <Link className="home-link" to="/react-pokedex">React Pokédex</Link>
            <a className="github-link" href="https://github.com/jacekkonieczny/react-pokedex" rel="noreferrer" target="_blank"><i className="fa-brands fa-github" /></a>
        </div>
    );
}

export default Header;