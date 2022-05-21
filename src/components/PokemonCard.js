import React from 'react';
import {Link} from "react-router-dom";

function PokemonCard({pokemon}) {
    return (
        <Link to={`/react-pokedex/${pokemon.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} className="pokemon-card">
            <div className={`${pokemon.types[0].type.name} pokemon-image`}>
                <span className="id-information">#{("00" + pokemon.id).slice(-3)}</span>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} pokemon`} />
            </div>
            <div className="pokemon-information">
                <span className="name-information">{pokemon.name}</span>
                <div className="types-information">
                    {pokemon.types.map(type => (
                            <div className={`${type.type.name} type`} >{type.type.name}</div>
                        ))}
                </div>
            </div>
        </Link>
    );
}

export default PokemonCard;