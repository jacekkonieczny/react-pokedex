import React, {useState} from 'react';

function SearchPokemon({getQuery}) {
    const pokemonTypes = ["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"];

    const [keyWord, setKeyWord] = useState("");

    function handleSearchChange(q) {
        setKeyWord(q);
        getQuery(q);
    }

    return (
        <div className="search-container">
            <input className="search-input"
                   type="text"
                   placeholder="Search for pokemon..."
                   value={keyWord}
                   onChange={(event => handleSearchChange(event.target.value))}/>

            <h2 className="search-info">Filter by type</h2>
            <div className="type-button-container">
                {pokemonTypes.map((type) => (
                    <button className={`${type} filter-button`} key={type}>{type}</button>
                ))}
            </div>
        </div>
    );
}

export default SearchPokemon;