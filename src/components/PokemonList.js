import React, {useEffect, useState} from 'react';
import {getAllPokemon, getPokemon} from "../services/api";
import PokemonCard from "./PokemonCard";
import SearchPokemon from "./SearchPokemon";

function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=600";
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [typeQuery, setTypeQuery] = useState("");

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

    const renderPokemonList = () => {
        const pokemonList = [];

        pokemonData.forEach((pokemon) => {
            if (!pokemon.name.includes(searchQuery)) {
                return;
            }
            if (!pokemon.types[0].type.name.includes(typeQuery)) {
                return;
            }

            pokemonList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
        });

        return pokemonList;
    };

    return (
        <>
            <SearchPokemon getTypeQuery={(q) => setTypeQuery(q)} getSearchQuery={(q) => setSearchQuery(q)}/>
            <div className="pokemon-list">
                {loading ? <h1>Loading</h1> :
                renderPokemonList()}
            </div>
        </>
    );
}

export default PokemonList;