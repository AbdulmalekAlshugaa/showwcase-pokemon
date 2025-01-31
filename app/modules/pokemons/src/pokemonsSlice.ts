import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  loading: boolean;
  data: any[];
  error: string | null;
  success: boolean;
}

const initialState: PokemonState = {
  loading: false,
  data: [],
  error: null,
  success: false,
};

const pokemonStateSlice = createSlice({
  name: "POKEMONS",
  initialState,
  reducers: {
    // Define your synchronous reducers here
    getPokemonRequest(state) {
      state.loading = true;
    },
    getPokemonSuccess(state, action: PayloadAction<{ pokemons: any[] }>) {
      state.loading = false;
      state.data = action.payload.pokemons;
      state.success = true;
    },
    getPokemonFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export action creators
export const { getPokemonRequest, getPokemonSuccess, getPokemonFailure } = pokemonStateSlice.actions;

export default pokemonStateSlice.reducer;
