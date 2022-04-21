import React, { useEffect, useState } from 'react';
import { fetchPokemons, fetchPokemonById } from '../redux/slices/pokemons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function PokemonsList() {
    const [currentCharacter, setCurrentCharacter] = useState(1);
    const [details, setDetails] = useState([]);
    const [page, setPage] = useState(0);
    let navigate = useNavigate();

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
        // const perPage = 20;
        // const offset = (numPage * perPage) - perPage;
        /*1 = 0 0 1*15 - 15 = 0;
        2 = 15 2*15 - 15 =15;
        3 = 30 3*15 - 15 = 30*/
        setPage(page + numPage)
    }

    const showDetails = (character, e) => {
        const count = e.detail;
        if (count === 2) {
            navigate('/Details/' + character.name);
        }
        const id = Number(character.url.split('/').slice(-2)[0]);
        setCurrentCharacter(id);
    }


    return (
        <div className="container">
            <div className='row'>
                <ol>
                    {
                        pokemones?.results?.map((character, index) => (
                            <li key={index} className="col-sm" onClick={(e) => showDetails(character, e)}>
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
                        <img src={details?.sprites?.front_default} alt={details.name} />
                    </aside>
                )
            }
        </div>
    )
}

export default PokemonsList