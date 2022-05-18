import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {getAllPokemon, getPokemon} from "../services/api";

function PokemonDetails() {
    let {pokemonId} = useParams();
    const [pokemonData, setPokemonData] = useState("");
    const [loading, setLoading] = useState(true);
    const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const pokemon = pokemonData[pokemonId - 1];

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl)
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, [])

    async function loadPokemon(data) {
        let pokemonArray = await Promise.all(data.map(async pokemon => {
            let allPokemon = await getPokemon(pokemon.url);
            return allPokemon;
        }))
        setPokemonData(pokemonArray);
    }

    console.log(pokemonData);

    return (
        <>
            <Header />
            {loading ? <h1>Loading</h1> : (
            <div className="pokemon-details">
                <div className="pokemon-info-section">
                    <span>ID: #{("00" + pokemon.id).slice(-3)}</span>
                    <span>HEIGHT: {pokemon.height}</span>
                    <span>WEIGHT: {pokemon.weight}</span>
                    <div className="pokemon-abilities">
                        <span>ABILITIES:</span>
                        {pokemon.abilities.map(ability => {
                            return (
                                <div className={`ability-info ${pokemon.types[0].type.name}`} >{ability.ability.name}</div>
                            )
                        })}
                    </div>
                    <div className="pokemon-types">
                        <span>TYPES:</span>
                        {pokemon.types.map(type => {
                            return (
                                <div className={`type-info ${type.type.name}`} >{type.type.name}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="pokemon-image-section">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} pokemon`} />
                </div>
                <div className="pokemon-stats-section">
                    {pokemon.stats.map(stat => {
                        return (
                            <div className="stat-info">
                                <span>{stat.stat.name}:</span>
                                <div className="progress-bar">
                                    <span>{`${stat.base_stat} / 100`}</span>
                                    <progress value={stat.base_stat / 100 } />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                )}
        </>
    );
}

export default PokemonDetails;