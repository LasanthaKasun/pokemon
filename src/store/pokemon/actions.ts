import type * as types from "./types";
import * as actionTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export const getPokemonList = (): types.GetPokemonList => ({
  type: actionTypes.GET_POKEMON_LIST,
});

export const getPokemonListSuccess = (
  payload: PokemonInterface[]
): types.GetPokemonListSuccess => ({
  type: actionTypes.GET_POKEMON_LIST_SUCCESS,
  payload,
});

export const getPokemonListFailure = (
  payload: string
): types.GetPokemonListFailure => ({
  type: actionTypes.GET_POKEMON_LIST_FAILURE,
  payload,
});

/****************************** SET POKEMON **********************************/
export const setPokemon = (payload: PokemonInterface): types.SetPokemon => ({
  type: actionTypes.SET_POKEMON,
  payload
});

/****************************** DELETE POKEMON **********************************/
export const deletePokemon = (payload: number): types.DeletePokemon => ({
  type: actionTypes.DELETE_POKEMON,
  payload
});

/****************************** REORDER POKEMON **********************************/
export const reOrderPokemon = (): types.ReOrderPokemon => ({
  type: actionTypes.RE_ORDER_POKEMON,
});
