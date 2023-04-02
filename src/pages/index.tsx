import MainNav from "@/components/MainNav/MainNav";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import ResponsiveGrid from "@/components/ResponsiveGrid/ResponsiveGrid";
import Spaces from "@/components/Spaces/Spaces";
import TextField from "@/components/TextField/TextField";
import { getPokemonList } from "@/store/pokemon/actions";
import { selectPokeList } from "@/store/pokemon/selector";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const pokemonList = useSelector(selectPokeList);

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

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
            value="abc"
            onHandleChanges={(e) => console.log(e.target.value)}
          />
        </ResponsiveGrid>
        <Spaces />
        <ResponsiveGrid>
          {pokemonList.map((pokeObj, index) => (
            <PokemonCard
              key={index}
              id={pokeObj.id}
              name={pokeObj.name}
              image={pokeObj.image}
              weight={pokeObj.weight}
              height={pokeObj.height}
              onHandleClick={() => console.log("")}
              isDeleteAvailable={false}
              onDeleteClick={() => console.log("")}
              onOrderChange={() => console.log("")}
            />
          ))}
        </ResponsiveGrid>
      </main>
    </>
  );
}
