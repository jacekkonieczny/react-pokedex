import React from 'react';

function SearchPokemon() {
    const pokemonTypes = ["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"];

    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search"/>

            <div className="type-button-container">
                {pokemonTypes.map((type) => (
                    <button className={`${type} filter-button`}>{type}</button>
                ))}
            </div>
        </div>
    );
}

export default SearchPokemon;