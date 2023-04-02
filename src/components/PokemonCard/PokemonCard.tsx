/* eslint-disable @next/next/no-img-element */
import { getRandomColor } from "@/helper";
import React, { FC } from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  weight: number;
  height: number;
  isDeleteAvailable: boolean;
  onHandleClick: () => void;
  onDeleteClick: (id: number) => void;
  onOrderChange: () => void;
}

const PokemonCard: FC<PokemonCardProps> = ({
  id,
  name,
  image,
  weight,
  height,
  isDeleteAvailable,
  onHandleClick,
  onDeleteClick,
  onOrderChange,
}) => {
  return (
    <div
      className="pokemon-card-wrapper"
      style={{ backgroundColor: getRandomColor(), position: "relative" }}
      onClick={onHandleClick}
    >
      <div>
        {isDeleteAvailable && (
          <div
            className="pokemon-delete-icon"
            onClick={() => onDeleteClick(id)}
          >
            ⌫
          </div>
        )}
        <div className="pokemon-id"># {id}</div>
        <div className="pokemon-name">{name}</div>
        <div className="pokemon-tag-wrapper">
          <div className="pokemon-tag green-tag">
            <div className="smaller">Weight</div>
            <div>{weight}</div>
          </div>
          <div className="pokemon-tag indego-tag">
            <div className="smaller">Height</div>
            <div>{height}</div>
          </div>
        </div>
      </div>
      <img className="pocker-image" src={image} alt="123" />
    </div>
  );
};

export default PokemonCard;
