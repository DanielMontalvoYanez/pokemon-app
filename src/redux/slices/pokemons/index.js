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
    setPokemonById: (state, action) => {
      state.pokemonById = action.payload;
    },
  },
});

export const { setPokemonsList, setPokemonById } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;

export const fetchPokemons = (numPage) => {
  return (dispatch) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + numPage)
      .then((response) => {
        console.log('res', response.data);
        dispatch(setPokemonsList(response.data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

export const fetchPokemonById = (id = 1) => {
  return (dispatch) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((response) => {
        dispatch(setPokemonById(response.data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};
