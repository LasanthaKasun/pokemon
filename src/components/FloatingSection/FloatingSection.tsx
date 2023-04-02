/* eslint-disable @next/next/no-img-element */
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Button from "../Button/Button";

interface FloatingSectionProps {
  teamData: PokemonInterface[];
  label: string;
  path: string;
}

const FloatingSection: FC<FloatingSectionProps> = ({
  teamData,
  label,
  path,
}) => {
  const { push } = useRouter();
  return (
    <div className="team-wrapper animation-puls">
      <div className="team-content">
        <div>Your Team | </div>
        {teamData.length === 0 ? (
          <div className="error-wrapper">
            Still not any pokemon in your team
          </div>
        ) : (
          teamData.map((myTeam: PokemonInterface) => (
            <div
              className="team-poker"
              title={myTeam.name}
              key={myTeam.id}
            >
              <img src={myTeam.image} alt={`${myTeam.id}`} />
            </div>
          ))
        )}
      </div>
      <div>
        <Button
          label={label}
          disable={teamData.length === 0 && path !== "/"}
          type="warn"
          onHandleClick={() => push(path)}
        />
      </div>
    </div>
  );
};

export default FloatingSection;
