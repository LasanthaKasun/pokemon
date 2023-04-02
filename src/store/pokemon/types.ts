import type * as actionTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export type GetPokemonList = {
  type: typeof actionTypes.GET_POKEMON_LIST;
};

export type GetPokemonListSuccess = {
  type: typeof actionTypes.GET_POKEMON_LIST_SUCCESS;
  payload: PokemonInterface[];
};

export type GetPokemonListFailure = {
  type: typeof actionTypes.GET_POKEMON_LIST_FAILURE;
  payload: string;
};

/****************************** SET POKEMON **********************************/
export type SetPokemon = {
  type: typeof actionTypes.SET_POKEMON;
  payload: PokemonInterface;
};

/****************************** DELETE POKEMON **********************************/
export type DeletePokemon = {
  type: typeof actionTypes.DELETE_POKEMON;
  payload: number;
};

/****************************** REORDER POKEMON **********************************/
export type ReOrderPokemon = {
  type: typeof actionTypes.RE_ORDER_POKEMON;
};

export type PokemonActions =
  | GetPokemonList
  | GetPokemonListSuccess
  | GetPokemonListFailure
  | SetPokemon
  | DeletePokemon
  | ReOrderPokemon;
