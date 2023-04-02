import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actions.types";
import * as actions from "./actions";
import axios from "axios";
import {
  Pokemon,
  PokemonApiResponse,
  PokemonInterface,
} from "@/shared/interfaces/pokemon.interface";
import { toast } from "react-toastify";

function getPokeList() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getPokemon(url: string) {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function* getPokemonListSaga() {
  try {
    // Getting pokemon list
    const pokeListResponse: { data: { results: PokemonApiResponse[] } } =
      yield getPokeList();

    // Getting pokemon information
    const pokeList: [{ data: Pokemon }] = yield all(
      pokeListResponse.data.results?.map((pokemon: PokemonApiResponse) =>
        call(getPokemon, pokemon.url)
      )
    );
    if (pokeList) {
      const pokemonListWithData: PokemonInterface[] = pokeList.map(
        (responseData) => {
          const { data } = responseData;
          const { name, id, sprites, height, weight } = data;
          return {
            id: id,
            name: name,
            image: sprites.front_default,
            height: height,
            weight: weight
          };
        }
      );
      yield put(actions.getPokemonListSuccess(pokemonListWithData));
    } else {
      yield put(actions.getPokemonListFailure("Error getting pokemon details"));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getPokemonListFailure("Error in pokemon saga"));
  }
}

function* submitTeamSaga(data: { type: string, payload: PokemonInterface[] }) {
  try {
    let apiStatus = 0;
    // mock api call for submit
    yield axios.post("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      apiStatus = response.status
    });

    if (apiStatus === 201) {
      toast.success("Your team created successfully", {
        icon: "🚀",
      });
      const getId = data.payload.map((obj) => obj.id);
      yield put(actions.submitTeamSuccess(getId));
    } else {
      yield put(actions.submitTeamFailure("Error in create team saga"));
    }

  } catch (error) {
    console.log(error);
    yield put(actions.submitTeamFailure("Error in create team saga"));
  }
}

function* pokemonSaga() {
  yield all([
    takeLatest(actionTypes.GET_POKEMON_LIST, getPokemonListSaga),
    takeLatest(actionTypes.SUBMIT_TEAM, submitTeamSaga)
  ]);
}

export default pokemonSaga;
