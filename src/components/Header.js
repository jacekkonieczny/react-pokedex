import React from 'react';

function Header() {
    return (
        <div className="page-header">
            <div className="empty"/>
            <a className="home-link" href="/">React Pokédex</a>
            <a className="github-link" href="https://github.com/jacekkonieczny/react-pokedex" target="_blank"><i className="fa-brands fa-github" /></a>
        </div>
    );
}

export default Header;