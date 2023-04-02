import { POKE_INITIAL_STATE } from "@/store/pokemon/_inital_state";
import type { PokemonActions as PokeActions } from "@/store/pokemon/types";
import * as actionsTypes from "./actions.types";

export const pokemonReducer = (
  state = POKE_INITIAL_STATE,
  action: PokeActions
) => {
  switch (action.type) {
    case actionsTypes.GET_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        fetchStatus: "success",
        pokemonList: action.payload,
      };
    }
    case actionsTypes.GET_POKEMON_LIST_FAILURE: {
      return {
        ...state,
        fetchStatus: "fail",
        error: action.payload,
      };
    }
    case actionsTypes.SET_POKEMON: {
      return {
        ...state,
        pokemonTeam: [...state.pokemonTeam, action.payload],
      };
    }
    case actionsTypes.DELETE_POKEMON: {
      return {
        ...state,
        pokemonTeam: state.pokemonTeam.filter(data => data.id !== action.payload),
      };
    }
    default:
      return { ...state };
  }
};
