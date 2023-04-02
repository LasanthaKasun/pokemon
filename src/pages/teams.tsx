import Button from "@/components/Button/Button";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import FloatingSection from "@/components/FloatingSection/FloatingSection";
import MainNav from "@/components/MainNav/MainNav";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import ResponsiveGrid from "@/components/ResponsiveGrid/ResponsiveGrid";
import Spaces from "@/components/Spaces/Spaces";
import { PokemonStateInterface } from "@/shared/interfaces/pokemon.interface";
import {
  deletePokemon,
  reOrderPokemon,
  submitTeam,
} from "@/store/pokemon/actions";
import { RootState } from "@/store/store";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Teams() {
  const dispatch = useDispatch();

  const currentTeam: PokemonStateInterface = useSelector(
    (state: RootState) => state.pokemon
  );

  const handleDeletePokemon = (id: number, name: string) => {
    dispatch(deletePokemon(id));
    toast.success(name + " pokemon delete successfully", {
      icon: "🚀",
    });
  };

  const handleReorderTeam = () => {
    dispatch(reOrderPokemon());
  };

  const handleSubmit = () => {
    dispatch(submitTeam(currentTeam.pokemonTeam));
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
        </ResponsiveGrid>
        <Spaces />
        <ResponsiveGrid>
          {currentTeam.pokemonTeam.map((pokeObj, index) => (
            <PokemonCard
              key={index}
              id={pokeObj.id}
              name={pokeObj.name}
              image={pokeObj.image}
              weight={pokeObj.weight}
              height={pokeObj.height}
              onHandleClick={() => {}}
              isDeleteAvailable={true}
              onDeleteClick={() =>
                handleDeletePokemon(pokeObj.id, pokeObj.name)
              }
            />
          ))}
          {currentTeam.pokemonTeam.length === 0 && (
            <EmptyBox
              message="😏 You haven't any pokemon for creating own team. please go to home and add your pokemon"
              label="Go to Home"
              path="/"
            />
          )}
        </ResponsiveGrid>
        <Spaces />
        <ResponsiveGrid>
          <Button
            label="Random Re-order"
            disable={currentTeam.pokemonTeam.length === 0}
            type="warn"
            onHandleClick={() => handleReorderTeam()}
          />
          <Button
            label="Submit Team"
            disable={currentTeam.pokemonTeam.length === 0 || currentTeam.saving}
            type="info"
            onHandleClick={() => handleSubmit()}
          />
        </ResponsiveGrid>
        <FloatingSection
          teamData={currentTeam.pokemonTeam}
          label="Go back"
          path="/"
        />
      </main>
    </>
  );
}
