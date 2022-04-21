import React, { useEffect, useState } from 'react';
import { fetchPokemons, fetchPokemonById } from '../redux/slices/pokemons';
import { useDispatch, useSelector } from 'react-redux';

function PokemonsList() {
    const [currentCharacter, setCurrentCharacter] = useState(1);
    const [details, setDetails] = useState([]);
    const [page, setPage] = useState(0);

    const { list: pokemones } = useSelector((state) => state.pokemons);
    const { pokemonById: pokemon } = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemons(page));
    }, [page])

    useEffect(() => {
        dispatch(fetchPokemonById(currentCharacter));
        setDetails(pokemon);
    }, [currentCharacter])

    const onChangePage = (numPage) => {
        if (!pokemones.previous && page + numPage <= 0) return;
        if (pokemones.next && page + numPage >= 8) return;
        setPage(page + numPage)
    }


    const showDetails = (character) => {
        const id = Number(character.url.split('/').slice(-2)[0]);
        setCurrentCharacter(id);
    }


    return (
        <div className="container">
            <div className='row'>
                <ol>
                    {
                        pokemones?.results?.map((character, index) => (
                            <li key={index} className="col-sm" onClick={() => showDetails(character)}>
                                {character.name}
                            </li>
                        ))
                    }
                </ol>
            </div>
            <section>
                <button onClick={() => onChangePage(-1)}>Prev</button>
                <p>Pagina : {page}</p>
                <button onClick={() => onChangePage(1)}>Next</button>
            </section>
            {
                details && (
                    <aside>
                        <h1>Details pokemon</h1>
                        <h2>{details.name}</h2>
                        <p>{details.height} </p>
                        <p>{details.weight} </p>
                    </aside>
                )
            }
        </div>
    )
}

export default PokemonsList