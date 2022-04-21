import React, { useEffect, useState } from 'react';
import { fetchPokemons, fetchPokemonById } from '../redux/slices/pokemons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function PokemonsList() {
    const [currentCharacter, setCurrentCharacter] = useState(1);
    const [details, setDetails] = useState([]);
    const [page, setPage] = useState(1);
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
        if (page + numPage >= 9) return;
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
        <div className="container-sm">
            <br></br>
            <div className='row justify-content-center shadow-lg p-3 mb-5 bg-body rounded'>
                <div className="col-4">
                    <ol className='list-group list-group-flush'>
                        {
                            pokemones?.results?.map((character, index) => (
                                <li key={index} className="list-group-item" onClick={(e) => showDetails(character, e)}>
                                    {character.name}
                                </li>
                            ))
                        }
                    </ol>
                </div>                
                {
                    details && (
                        <div className="col-2 align-self-center">
                            <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "12rem" }}>
                                <img src={details?.sprites?.front_default} className="card-img-top" alt={details.name} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='row justify-content-center shadow-lg p-3 mb-5 bg-body rounded'>
                <div className="col-2">
                    <button className="btn btn-outline-info" onClick={() => onChangePage(-1)}>Prev</button>
                </div>
                <div className="col-2">
                    Pagina : {page}
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-info" onClick={() => onChangePage(1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default PokemonsList