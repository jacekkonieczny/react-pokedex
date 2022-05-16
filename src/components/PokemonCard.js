import React from 'react';

function PokemonCard(props) {
    return (
        <div className="pokemon-card">
            <div className="normal pokemon-image">
                <span className="id-information">#132</span>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" />
            </div>
            <div className="pokemon-information">
                <span className="name-information">Ditto</span>
                <div className="types-information">
                    <div className="grass type">grass</div>
                    <div className="poison type">posion</div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;