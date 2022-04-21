import { configureStore } from '@reduxjs/toolkit';
import pokemons from './slices/pokemons';

export const store = configureStore({
  reducer: { pokemons },
});
