import React, {useEffect, useState} from 'react';
import {getAllPokemon, getPokemon} from "../services/api";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=300";
    const [loading, setLoading] = useState(true);

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
        <div className="pokemon-list">
            {loading ? <h1>Loading</h1> :
            pokemonData.map((pokemon, index) => {
                return <PokemonCard pokemon={pokemon} key={index} />
            })}
        </div>
    );
}

export default PokemonList;