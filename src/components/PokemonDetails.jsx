import React from 'react';
import { useSelector } from 'react-redux';


const PokemonDetails = () => {

    const { pokemonById: pokemon } = useSelector((state) => state.pokemons);
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <ul>
                <li>height : {pokemon.height}</li>
                <li>weight : {pokemon.weight}</li>
            </ul>
        </div>
    )
}

export default PokemonDetails