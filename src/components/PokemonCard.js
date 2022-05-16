import React from 'react';

function PokemonCard({pokemon}) {
    return (
        <div className="pokemon-card">
            <div className={`${pokemon.types[0].type.name} pokemon-image`}>
                <span className="id-information">#{("00" + pokemon.id).slice(-3)}</span>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} pokemon`} />
            </div>
            <div className="pokemon-information">
                <span className="name-information">{pokemon.name}</span>
                <div className="types-information">
                    {pokemon.types.map(type => {
                        return (
                            <div className={`${type.type.name} type`} >{type.type.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;