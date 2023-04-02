import FloatingSection from "@/components/FloatingSection/FloatingSection";
import Loader from "@/components/Loader/Loader";
import MainNav from "@/components/MainNav/MainNav";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import PokemonModel from "@/components/PokemonModel/PokemonModel";
import ResponsiveGrid from "@/components/ResponsiveGrid/ResponsiveGrid";
import Spaces from "@/components/Spaces/Spaces";
import TextField from "@/components/TextField/TextField";
import {
  PokemonInterface,
  PokemonStateInterface,
} from "@/shared/interfaces/pokemon.interface";
import { getPokemonList, setPokemon } from "@/store/pokemon/actions";
import { selectPokeList } from "@/store/pokemon/selector";
import { RootState } from "@/store/store";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Home() {
  const dispatch = useDispatch();

  const pokemonList = useSelector(selectPokeList);
  const currentTeam: PokemonStateInterface = useSelector(
    (state: RootState) => state.pokemon
  );
  const [filter, setFilter] = useState("");
  const [visible, setVisible] = useState(false);
  const [pokemanData, setPokemonData] = useState({
    id: 0,
    name: "",
    weight: 0,
    height: 0,
    image: "",
  });

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const visiblePokemonModel = (pokemon: PokemonInterface) => {
    setPokemonData({
      ...pokemanData,
      id: pokemon.id,
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      image: pokemon.image,
    });
    setVisible(true);
  };

  const buildYourTeam = () => {
    const isAlreadySelected =
      currentTeam.pokemonTeam.filter((data) => data.id == pokemanData.id)
        .length > 0;
    if (currentTeam.pokemonTeam.length < 6) {
      if (isAlreadySelected) {
        toast.error(
          pokemanData.name + " already selected. please try again another pokemon",
          {
            icon: "❌",
          }
        );
      } else {
        dispatch(setPokemon(pokemanData));
        toast.success("Your team update with new pokemon", {
          icon: "🚀",
        });
        setVisible(false);
      }
    }else {
      toast.error("Your team limit is exceeded. please try again later", {
        icon: "❌",
      });
      setVisible(false);
    }
  };

  return (
    <>
      <Head>
        <title>Vidzing Front-end test</title>
        <meta
          name="description"
          content="Small test for front-end developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ResponsiveGrid>
          <MainNav
            title="Pokemon Game"
            subTitle="Select and build your favorite pokmon team"
          />
          <TextField
            label="Search pokemon"
            value={filter}
            onHandleChanges={(e) => setFilter(e.target.value)}
          />
        </ResponsiveGrid>
        <Spaces />
        <ResponsiveGrid>
          {pokemonList
            .filter(
              (fillObj) =>
                `${fillObj.id}` === filter || fillObj.name.includes(filter)
            )
            .map((pokeObj, index) => (
              <PokemonCard
                key={index}
                id={pokeObj.id}
                name={pokeObj.name}
                image={pokeObj.image}
                weight={pokeObj.weight}
                height={pokeObj.height}
                onHandleClick={() => visiblePokemonModel(pokeObj)}
                isDeleteAvailable={false}
                isAvailable={!currentTeam.savedTeam.includes(pokeObj.id)}
                onDeleteClick={() => {}}
              />
            ))}
        </ResponsiveGrid>
        {pokemonList.length === 0 && <Loader />}
        {visible && (
          <PokemonModel
            pokemon={pokemanData}
            onHandleClose={() => setVisible(false)}
            onHandleGet={() => buildYourTeam()}
            currentTeamLength={currentTeam.pokemonTeam.length}
          />
        )}
        <FloatingSection
          teamData={currentTeam.pokemonTeam}
          label="View team"
          path="/teams"
        />
      </main>
    </>
  );
}
