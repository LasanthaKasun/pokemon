import Loader from "@/components/Loader/Loader";
import MainNav from "@/components/MainNav/MainNav";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import PokemonModel from "@/components/PokemonModel/PokemonModel";
import ResponsiveGrid from "@/components/ResponsiveGrid/ResponsiveGrid";
import Spaces from "@/components/Spaces/Spaces";
import TextField from "@/components/TextField/TextField";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import { getPokemonList } from "@/store/pokemon/actions";
import { selectPokeList } from "@/store/pokemon/selector";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const pokemonList = useSelector(selectPokeList);

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
    console.log(pokemanData);
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
            label="Search pokmon"
            value={filter}
            onHandleChanges={(e) => setFilter(e.target.value)}
          />
        </ResponsiveGrid>
        <Spaces />
        <ResponsiveGrid>
          {pokemonList.filter(fillObj => `${fillObj.id}` === filter || fillObj.name.includes(filter)).map((pokeObj, index) => (
            <PokemonCard
              key={index}
              id={pokeObj.id}
              name={pokeObj.name}
              image={pokeObj.image}
              weight={pokeObj.weight}
              height={pokeObj.height}
              onHandleClick={() => visiblePokemonModel(pokeObj)}
              isDeleteAvailable={false}
              onDeleteClick={() => console.log("")}
              onOrderChange={() => console.log("")}
            />
          ))}
        </ResponsiveGrid>
        {pokemonList.length === 0 && <Loader />}
        {visible && (
          <PokemonModel
            pokemon={pokemanData}
            onHandleClose={() => setVisible(false)}
            onHandleGet={() => buildYourTeam()}
            currentTeamLength={1}
          />
        )}
      </main>
    </>
  );
}
