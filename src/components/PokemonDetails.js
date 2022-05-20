import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "./Header";
import {getPokemon} from "../services/api";

function PokemonDetails() {
    let {pokemonId} = useParams();
    const [pokemonData, setPokemonData] = useState("");
    const [loading, setLoading] = useState(true);
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    useEffect(() => {
        async function fetchData() {
            let result  = await getPokemon(pokemonUrl);
            setPokemonData(result)
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <>
            <Header />
            {loading ? <h1>Loading</h1> : (
            <div className="pokemon-details">
                <div className="pokemon-info-section">
                    <span>NAME: {pokemonData.name}</span>
                    <span>ID: #{("00" + pokemonData.id).slice(-3)}</span>
                    <span>HEIGHT: {pokemonData.height}</span>
                    <span>WEIGHT: {pokemonData.weight}</span>
                    <div className="pokemon-abilities">
                        <span>ABILITIES:</span>
                        {pokemonData.abilities.map(ability => (
                            <div className={`ability-info ${pokemonData.types[0].type.name}`} >{ability.ability.name}</div>
                        ))}
                    </div>
                    <div className="pokemon-types">
                        <span>TYPES:</span>
                        {pokemonData.types.map(type => (
                                <div className={`type-info ${type.type.name}`} >{type.type.name}</div>
                            ))}
                    </div>
                </div>
                <div className="pokemon-image-section">
                    <img src={pokemonData.sprites.other.dream_world.front_default} alt={`${pokemonData.name} pokemon`} />
                </div>
                <div className="pokemon-stats-section">
                    {pokemonData.stats.map(stat => (
                            <div className="stat-info">
                                <span>{stat.stat.name}: </span>
                                <div className="progress-bar">
                                    <span>{`${stat.base_stat} / 100`}</span>
                                    <progress value={stat.base_stat / 100 } />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
                )}
        </>
    );
}

export default PokemonDetails;