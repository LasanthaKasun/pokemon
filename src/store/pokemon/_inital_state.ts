import { PokemonStateInterface } from "@/shared/interfaces/pokemon.interface";

export const POKE_INITIAL_STATE: PokemonStateInterface = {
  pokemonList: [],
  fetchStatus: "idle",
  pokemonTeam: [],
  error: "",
};
