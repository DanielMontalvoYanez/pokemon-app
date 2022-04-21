import React from 'react';
import { useSelector } from 'react-redux';


const PokemonDetails = () => {

    const { pokemonById: pokemon } = useSelector((state) => state.pokemons);
    return (
        <div className="container">
            <br></br>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "12rem" }}>
                    <div className="card-header">
                        <h5 className="card-title">{pokemon.name}</h5>
                    </div>
                    <img src={pokemon?.sprites?.front_default} className="card-img-top" alt={pokemon.name} />
                    <div className="card-body">
                        <p className="card-text">height : {pokemon.height}</p>
                        <p className="card-text">weight : {pokemon.weight}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonDetails