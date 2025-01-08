import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  list: Pokemon[];
}

const initialState: PokemonState = {
  list: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList(state, action: PayloadAction<Pokemon[]>) {
      state.list = action.payload;
    },
    removePokemon(state, action: PayloadAction<string>) {
        state.list = state.list.filter(pokemon => pokemon.name !== action.payload);
    },
  },
});

export const { setPokemonList, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;