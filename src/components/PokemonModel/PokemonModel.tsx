/* eslint-disable @next/next/no-img-element */
import { getRandomColor, MAX_TEAM_SIZE } from "@/helper";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import React, { FC } from "react";
import Button from "../Button/Button";

interface PokemonModelProps {
  pokemon: PokemonInterface;
  onHandleClose: any;
  onHandleGet: any;
  currentTeamLength: number;
}

const PokemonModel: FC<PokemonModelProps> = ({
  pokemon,
  onHandleClose,
  onHandleGet,
  currentTeamLength,
}) => {
  return (
    <div className="model-wrapper">
      <div
        className="model-inner"
        data-aos="zoom-in"
        style={{ backgroundColor: getRandomColor(), display: "grid" }}
      >
        <div className="model-content">
          <div>
            <div className="pokemon-id"># {pokemon.id}</div>
            <div className="pokemon-name">{pokemon.name}</div>
            <div className="pokemon-tag-wrapper">
              <div className="pokemon-tag green-tag">
                <div className="smaller">Weight</div>
                <div>{pokemon.weight}</div>
              </div>
              <div className="pokemon-tag indego-tag">
                <div className="smaller">Height</div>
                <div>{pokemon.height}</div>
              </div>
            </div>
          </div>
          <img
            className="select-poker"
            src={pokemon.image}
            alt={`${pokemon.id}`}
          />
        </div>
        <div className="balance">
          {Number(MAX_TEAM_SIZE - currentTeamLength + 1) + " Poker is left"}
        </div>
        <div className="footer">
          <Button
            label="Close"
            disable={false}
            type="default"
            onHandleClick={onHandleClose}
          />
          <Button
            label="Get"
            disable={false}
            type="info"
            onHandleClick={onHandleGet}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonModel;
