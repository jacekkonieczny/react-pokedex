import React, {useState} from 'react';

function SearchPokemon({getSearchQuery, getTypeQuery}) {
    const pokemonTypes = ["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"];

    const [keyWord, setKeyWord] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    function handleSearchChange(q) {
        setKeyWord(q);
        getSearchQuery(q);
    }
    function handleTypeChange(q) {
        setTypeFilter(q);
        getTypeQuery(q);
    }
    function renderActiveSearchFilter() {
        if (keyWord.length > 0) {
            return (
                <div className="active-search-filter"
                     onClick={() => handleSearchChange("")}
                ><i className="fa-solid fa-x"/>{keyWord}</div>
            )
        }
    }
    function renderActiveTypeFilter() {
        if (typeFilter.length) {
            return (
                <div className={`active-type-filter ${typeFilter}`}
                     onClick={() => handleTypeChange("")}
                ><i className="fa-solid fa-x"/>{typeFilter}</div>
            )
        }
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
                    <button className={`${type} filter-button`}
                            key={type}
                            value={type}
                            onClick={(event => handleTypeChange(event.currentTarget.value))}
                    >{type}</button>
                ))}
            </div>
            <div className="type-select-container" >
                <select onChange={(event => handleTypeChange(event.currentTarget.value))}>
                    <option className="select-option-header" value="">Select type:</option>
                    {pokemonTypes.map((type) => (
                        <option className="select-option" value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div className="active-filters-container">
                <span className="active-filters-info">Active filters:</span>
                {renderActiveSearchFilter()}
                {renderActiveTypeFilter()}
            </div>
        </div>
    );
}

export default SearchPokemon;