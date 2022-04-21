import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const pokemonsSlice = createSlice({
  name: 'pokemones',
  initialState: {
    list: [],
    pokemonById: [],
  },
  reducers: {
    setPokemonsList: (state, action) => {
      state.list = action.payload;
    },
    getPokemonById: (state, action) => {
      state.pokemonById = action.payload;
    },
  },
});

export const { setPokemonsList, getPokemonById } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;

export const fetchPokemons = (numPage) => {
  return (dispatch) => {
    const perPage = 20;
    const offset = numPage * perPage - perPage;
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset)
      .then((response) => {
        dispatch(setPokemonsList(response.data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

export const fetchPokemonById = (id) => {
  return (dispatch) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((response) => {
        dispatch(getPokemonById(response.data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};
